import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER
} from './types';

const apiUrl = 'https://5000-teal-fox-mayilo51.ws-us13.gitpod.io';

export function loginUser(dataToSubmit) {
    const reqUrl = apiUrl + '/api/users/login';
    const request = axios.post(reqUrl, dataToSubmit)
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