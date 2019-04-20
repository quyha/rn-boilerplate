import AsyncStorage from '@react-native-community/async-storage';

const AsyncStorageService = {
    getItem: async function(key) {
        try {
            const tmp = await AsyncStorage.getItem(key);
            return JSON.parse(tmp);
        } catch (e) {

        }
    },
    setItem: function(key, value) {
        try {
            const tmp = JSON.stringify(value);
            AsyncStorage.setItem(key, tmp);
        } catch (e) {

        }
    },
    removeItem: function(key) {
        try {
            AsyncStorage.removeItem(key);
        } catch (e) {

        }
    },
    multiRemove: function(keys = []) {
        try {
            AsyncStorage.multiRemove(keys);
        } catch (e) {

        }
    },
    clear: function() {
        AsyncStorage.clear();
    }
};

export default AsyncStorageService;
