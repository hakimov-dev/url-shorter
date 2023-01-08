import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NUXT_ENV_BASE_URL
})