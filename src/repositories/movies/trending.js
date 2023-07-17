import { API_KEY, API_URL } from '../../configs';

export function GetResponseTrending(response) {
  const { results } = response;

  return results;
}

async function GetTrending(type = TrendingTypes.Day) {
  return fetch(`${API_URL}/trending/movie/${type}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then(GetResponseTrending);
}

export default GetTrending;
