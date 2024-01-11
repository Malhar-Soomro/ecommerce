import axios from "axios";

// const BASE_URL = "https://ecommerce-backend-yxgm.onrender.com/api";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzkzNjJlNDlmODVkNmQxMjU2MGE5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDk3MDQ1OCwiZXhwIjoxNzA1MTQzMjU4fQ.ZNYAIzrzRclDAcQ5YMT6-TCNIVhfKPd5j4fDJvz27Nc";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});