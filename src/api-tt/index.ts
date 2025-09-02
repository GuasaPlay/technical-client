import axios from 'axios';

const ttApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

ttApi.interceptors.request.use(async (config) => {
	return config;
});

export default ttApi;
