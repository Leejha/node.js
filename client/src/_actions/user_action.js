import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';

const apiUrl = 'https://5000-teal-fox-mayilo51.ws-us13.gitpod.io';
axios.defaults.withCredentials = true;
// withCredentials은 영향 없고 defaults를 줘야만 된다

export function loginUser(dataToSubmit) {
    const reqUrl = apiUrl + '/api/users/login';
    const request = axios.post(reqUrl, dataToSubmit, { withCredentials: true })
        .then(response => response.data)

    return {
        type : LOGIN_USER,
        payload : request
    }
}


export function registerUser(dataToSubmit) {
    const reqUrl = apiUrl + '/api/users/register';
    const request = axios.post(reqUrl, dataToSubmit)
        .then(response => response.data)

    return {
        type : REGISTER_USER,
        payload : request
    }
}

export function auth() {
    const reqUrl = apiUrl + '/api/users/auth';
    const request = axios.get(reqUrl)
        .then(response => response.data)

    return {
        type : AUTH_USER,
        payload : request
    }
}