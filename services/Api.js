
export default function Api({ keyword = 'f1' } = {}) {
    const api_key = '____u_key_here____';
    const limit = 10;
    const rating = 'g';
    const api_url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=${limit}&q=${keyword}&offset=0&rating=${rating}&lang=en`;

    return fetch(api_url)
        .then(res => res.json())
        .then(response => { return response })
}