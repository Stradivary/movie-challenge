import { API_KEY, API_URL } from '../../configs';

export function GetResponseMovie(response) {
  const { results } = response;

  return results;
}
async function getMovies({ keyword = 'batman' }) {
  return fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${keyword}`)
    .then((res) => res.json())
    .then(GetResponseMovie);
}

export default getMovies;
