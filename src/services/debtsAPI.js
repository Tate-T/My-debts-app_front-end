const BASE_URL = 'https://api.com';

async function fetchWithErrorHandling(url = '') {
    const response = await fetch(url);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export const addDebtApi = () => {
    return fetchWithErrorHandling(`${BASE_URL}/add`)
}

export const fetchDebts = (query) => {
    return fetchWithErrorHandling(`${BASE_URL}/get`)
}

export const fetchDebtDetail = (debt_id) => {
    return fetchWithErrorHandling(`${BASE_URL}/`)
}
