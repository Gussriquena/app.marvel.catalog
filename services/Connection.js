import axios from 'axios';

export const https = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/'
})
