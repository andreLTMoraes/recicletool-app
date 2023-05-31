import { useState, useEffect, useRef, createContext } from 'react';
import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

export const NotificationContext = createContext({})

export default function App({ children }) {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    const [notificationsActive, setNotificationsActive] = useState(true);

    const changeNotificationsActive = (newState) => {
        setNotificationsActive(newState);
        if (!newState) {
            Notifications.cancelAllScheduledNotificationsAsync().then(() => console.log("Notifications dismissed"))
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
                data: { data: "goes here" },
            },
            trigger: {
                seconds: 10,
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
        Notifications.getAllScheduledNotificationsAsync()
            .then((scheduledNotifications) => {
                if (scheduledNotifications.length > 0) {
                    console.log("Esse dispostivo já estava recebendo notificações");
                } else {
                    console.log("Ativando recebimento de notificações...");
                    triggerNotifications()
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
