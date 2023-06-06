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

const getNotificationsValue = async () => {
    try {
        let value = await getString('@notifications');
        if(value == null) 
            return null;
        return value === 'true';
    } catch (e) {
        console.log('Error getting notifications value:', e);
        return false; // Default value if an error occurs
    }
};

const setNotificationsAsyncStorage = async (value) => {
    try {
        await storeString("@notifications", value? "true": "false");
    } catch (error) {
        console.log("Error setting notifications in asyncStorage", error)
    }
}

const deleteStoredValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Value deleted successfully');
    } catch (error) {
      console.log('Error deleting value:', error);
    }
  };

const removeNotificationsState = async () => deleteStoredValue('@notifications');

export {getNotificationsValue, removeNotificationsState, setNotificationsAsyncStorage}
