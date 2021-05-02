import Favorites from '@/common/Favorites.js';

export const axios = require('axios').create({
    baseURL: process.env.VUE_APP_API_URL ?? 'http://e28api.kimdo.me',
    responseType: 'json',
    withCredentials: true
})

export const favorites = new Favorites();