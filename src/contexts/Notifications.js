import { useState, useEffect, useRef, createContext } from 'react';
import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { getNotificationsValue, toggleNotifications, setNotificationsAsyncStorage } from '../utils/asyncStorage';

export const NotificationContext = createContext({})

export default function App({ children }) {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    const [notificationsActive, setNotificationsActive] = useState(true);

    useEffect(() => {
        initNotifications()
    }, []);

    const changeNotificationsActive = async () => {
        if (notificationsActive) {
            deactivateNotifications()
        } else {
            activateNotifications()
        }
    }

    const initNotifications = async () => {
        getNotificationsValue()
            .then(notificationValue => {
                if (notificationValue == null) {
                    console.log("Inicializando sistema de notificações...");
                    activateNotifications();
                } else {
                    console.log("Enviando notificações: " + notificationValue)
                    setNotificationsActive(notificationValue);
                }
            })
    }

    const activateNotifications = async () => {
        setNotificationsActive(true);
        await setNotificationsAsyncStorage(true);
        await triggerPromotionNotification();
        console.log("Notifications activated");
    }

    const deactivateNotifications = async () => {
        setNotificationsActive(false);
        await setNotificationsAsyncStorage(false);
        await Notifications.cancelAllScheduledNotificationsAsync()
        console.log("Notificações desativadas");
    }

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: notificationsActive,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
    });

    async function registerForPushNotificationsAsync() {
        let token;
        if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log("NOTIFICATION TOKEN :" + token);
        } else {
            alert('Must use physical device for Push Notifications');
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }

        return token;
    }

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    const triggerNotifications = async (title, body, seconds, repeat=false) => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: title,
                body: body,
            },
            trigger: {
                seconds: seconds,
                repeats: repeat,
            },
        });
    }

    const triggerPromotionNotification = async () =>
        await triggerNotifications(
            "Vamos reciclar hoje? ♻️",
            "Venha reciclar e ganhe cupons!",
            60*60*12, true
        );

    const triggerCouponNotification = async () =>
        await triggerNotifications(
            "Você já usou o seu cupom? 📋♻️",
            "Resgate suas recompensas e proteja o meio ambiente",
            60*60*24*2, false
        );

    return (
        <NotificationContext.Provider
            value={{
                notificationsActive,
                changeNotificationsActive,
                expoPushToken,
                triggerCouponNotification,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
}
