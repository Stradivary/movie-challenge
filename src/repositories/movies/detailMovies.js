import { API_KEY, API_URL } from '../../configs';

export function GetResponseMovie(response) {
  return [response];
}
async function getDetailMovies(id='') {
  return fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then(GetResponseMovie);
}

export default getDetailMovies;
