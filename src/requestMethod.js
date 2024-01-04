import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzkzNjJlNDlmODVkNmQxMjU2MGE5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMzc0MTk0MCwiZXhwIjoxNzAzOTE0NzQwfQ.z1F8eSNJ2qLt0dqoBqPis6NN3tZAfSDEw_lFxKX64TM";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});