import { API_KEY, API_URL, BEARER_AUTH } from '../../configs';

export function GetResponseMovie(response) {
  const {results} = response;
  return results || [];
};

async function getFavorites() {
  const accountId = '20127119';
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: BEARER_AUTH,
      "Content-Type": "application/json",
    },
  };
  return fetch(`${API_URL}/account/${accountId}/favorite/movies?api_key=${API_KEY}`, requestOptions)
  .then((res) => res.json())
  .then(GetResponseMovie);
}

export default getFavorites;
