import { API_KEY, API_URL } from '../../configs';

export function GetResponseMovie(response) {
  return [response] || [];
};

async function getLatest() {
  return fetch(`${API_URL}/movie/latest?api_key=${API_KEY}`)
  .then((res) => res.json())
  .then(GetResponseMovie);
}

export default getLatest;
