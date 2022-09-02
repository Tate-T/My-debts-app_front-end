const BASE_URL = 'https://api.';

async function fetchWithErrorHandling(url = '') {
    const response = await fetch(url);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

function fetchMovies() {
    return fetchWithErrorHandling(`${BASE_URL}/`)
}

function fetchDebt(query) {
    return fetchWithErrorHandling(`${BASE_URL}/`)
}

function fetchDebtDetail(debt_id) {
    return fetchWithErrorHandling(`${BASE_URL}/`)
}

const fetches = { fetchMovies, fetchDebt, fetchDebtDetail }

export default fetches