import axios from 'axios';
import { CONFIG_BASE_URL } from "../constants/Config";
// import NavigationService from "../services/Navigation";

const instance = axios.create({
    baseURL: CONFIG_BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});
// export const signalApi = axios.CancelToken.source();
export const setHeader = h => instance.defaults.headers = h;
export const get = (route, params) => instance.get(route, {params}).then(handleResponse).catch(handleError);
export const post = (route, payload = {}) => instance.post(route, payload).then(handleResponse).catch(handleError);
export const put = (route, payload) => instance.put(route, payload).then(handleResponse).catch(handleError);
export const del = route => instance.delete(route).then(handleResponse).catch(handleError);

function handleResponse(res) {
    return new Promise((resolve, reject) => {
        if (res.status === 200) {
            if(res.data.status === 'Ok') {
                return resolve(res.data.data);
            } else {
                return reject(res.data.message);
            }
        } else if (res.status !== 200) {
            return reject(new Error(res.statusText));
        } else {
            reject(new Error("Unknown Error"));
        }
    });
}
function handleError(error) {
    return new Promise((resolve, reject) => {
        if (error.response && error.response.data) {
            return reject(error.response.data.message);
        } else if (error.request && error.request.status === 401) {
            // NavigationService.navigate('Login');
        } else if (axios.isCancel(error)) {
            return reject(error.message);
        } else {
            return reject(error);
        }
    });
}
