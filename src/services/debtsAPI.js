import axios from 'axios';

// axios.defaults.baseUrl = 'https://debts-app.onrender.com';
axios.defaults.baseURL = 'http://localhost:3001';

export const addDebtApi = (body) => axios.post('/api/debts/add', body);

export const fetchDebts = () => axios.get('/api/debts');

export const reminderNotify = (body) => axios.post('/api/reminder/sms', body);
