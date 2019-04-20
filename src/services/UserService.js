import * as api from '../api/Sender'
import AsyncStorageService from './AsyncStorage';

const keyUser = 'userInfo';

let listeners = {};
function broadcast() {
    Object.keys(listeners).forEach(
        k => listeners[ k ]()
    );
}
export const userService = {
    get: async () => await AsyncStorageService.getItem(keyUser),
    set: (newUser) => {
        if(newUser) {
            AsyncStorageService.setItem(keyUser, newUser);
            let headers = {
                'Authorization': `Bearer ${ newUser.accessToken }`
            };
            api.setHeader(headers);
        } else {
            api.setHeader({});
            AsyncStorageService.removeItem(keyUser);
        }
        broadcast();
    },
    onChange: (key, cb) => {
        listeners[ key ] = cb;
    },
    unChange: (key) => {
        delete listeners[ key ];
    }
};
