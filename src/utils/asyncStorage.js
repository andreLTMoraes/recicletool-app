import AsyncStorage from '@react-native-async-storage/async-storage';

const storeString = async (storageKey, value) => {
    try {
        await AsyncStorage.setItem(storageKey, value);
    } catch (e) {
        console.log("Error storing string with key: " + storageKey, e);
    }
}

const getString = async (storageKey) => {
    try {
        const value = await AsyncStorage.getItem(storageKey);
        return value;
    } catch (e) {
        console.log("Error reading string with key: " + storageKey);
    }
}

const toggleNotifications = async () => {
    try {
        const currentValue = await getNotificationsValue();
        const newValue = ! currentValue;
        await storeString('@notifications', newValue.toString());
        console.log('Notifications toggled:', newValue);
        return newValue;
    } catch (e) {
        console.log('Error toggling notifications:', e);
    }
};

const getNotificationsValue = async () => {
    try {
        let value = await getString('@notifications');
        if(value == null) {
            await toggleNotifications();
            value = await getString('@notifications');
        }
        return value === 'true';
    } catch (e) {
        console.log('Error getting notifications value:', e);
        return false; // Default value if an error occurs
    }
};

export {toggleNotifications, getNotificationsValue}
