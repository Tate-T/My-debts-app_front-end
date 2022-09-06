import axios from 'axios';

const baseUrl = process.env.BASE_URL;

axios.defaults.baseUrl = 'https://debts-app.onrender.com';
// axios.defaults.baseURL = 'http://localhost:3001';

export const addDebtApi = (body) => axios.post('/api/debts/add', body);

export const fetchDebts = () => axios.get('/api/debts');

// export const fetchDebtDetail = (body) => axios.get('/api/debts/send', body);

// export const addDebtApi = () => {
//     return fetchWithErrorHandling(`${BASE_URL}/add`)
// }

// export const fetchDebts = (query) => {
//     return fetchWithErrorHandling(`${BASE_URL}/get`)
// }

// export const fetchDebtDetail = (debt_id) => {
//     return fetchWithErrorHandling(`${BASE_URL}/`)
// }
