import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL || 'https://127.0.0.1:8000/api/v1',
});

export default instance;
