import { API_KEY, API_URL } from '../../configs';

export function GetResponseMovie(response) {
  const { results }= response;
  return results || [];
};

async function getTranding(key='day') {
  return fetch(`${API_URL}/trending/all/${key}?api_key=${API_KEY}`)
  .then((res) => res.json())
  .then(GetResponseMovie);
}

export default getTranding;
