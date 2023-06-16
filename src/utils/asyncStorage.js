import AsyncStorage from '@react-native-async-storage/async-storage';

//Funções genéricas

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

  const addToArray = async (key, newItem) => {
    try {
      const serializedArray = await AsyncStorage.getItem(key);
      if (serializedArray !== null) {
        const array = JSON.parse(serializedArray);
        const updatedArray = [...array, newItem];
        await AsyncStorage.setItem(key, JSON.stringify(updatedArray));
      }else{
        await AsyncStorage.setItem(key, JSON.stringify([newItem]));
      }
    } catch (error) {
      console.log('Error adding to array:', error);
    }
  };

  const filterArray = async (key, filterFunction) => {
    try {
      const serializedArray = await AsyncStorage.getItem(key);
      if (serializedArray !== null) {
        const array = JSON.parse(serializedArray);
        const filteredArray = array.filter(filterFunction);
        return filteredArray;
      }
      return [];
    } catch (error) {
      console.log('Error filtering array:', error);
    }
  };


  const clearContent = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log(`Content for key '${key}' cleared successfully.`);
    } catch (error) {
      console.log(`Error clearing content for key '${key}':`, error);
    }
  };

//Funções de casos específicos

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

export {getNotificationsValue, removeNotificationsState, setNotificationsAsyncStorage,
        addToArray, filterArray, clearContent, storeString}
