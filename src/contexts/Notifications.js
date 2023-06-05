import { useState, useEffect, useRef, createContext } from 'react';
import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { getNotificationsValue, toggleNotifications } from '../utils/asyncStorage';

export const NotificationContext = createContext({})

export default function App({ children }) {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    const [notificationsActive, setNotificationsActive] = useState(true);

    useEffect(() => {
        getNotificationsValue().then(
            (notificationValue) => {
                console.log("Initial notification value ", notificationValue);
                setNotificationsActive(notificationValue);
            })
    }, []);

    const changeNotificationsActive = async () => {
        const newState = await toggleNotifications();
        setNotificationsActive(newState);
        if (!newState) {
            Notifications.cancelAllScheduledNotificationsAsync()
                .then(() => console.log("Notifications dismissed"));
        }else{
            triggerNotifications()
                .then(() => console.log("Notifications activated"));
        }
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

    const triggerNotifications = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Vamos reciclar hoje? ♻️",
                body: "Venha reciclar e ganhe cupons!",
            },
            trigger: {
                seconds: 60*60*12,
                repeats: true,
            },
        });
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

    useEffect(() => {
        getNotificationsValue()
            .then((notificationsValue) => {
                if (notificationsValue) {
                    console.log("Notificações ativas");
                } else {
                    console.log("Notificações inativas");'          '
                }
            })
            .catch((error) => {
                console.log('Error checking scheduled notifications:', error);
            });
    }, [])

    return (
        <NotificationContext.Provider
            value={{
                notificationsActive,
                changeNotificationsActive,
                expoPushToken,
                triggerNotifications
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
}
