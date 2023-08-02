import { API_KEY, API_URL } from '../../configs';

export function GetResponseMovie(response) {
  const { results }= response;
  return results || [];
};

async function getTopRate() {
  return fetch(`${API_URL}/movie/top_rated?api_key=${API_KEY}`)
  .then((res) => res.json())
  .then(GetResponseMovie);
}

export default getTopRate;
