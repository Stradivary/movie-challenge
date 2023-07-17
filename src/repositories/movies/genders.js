import { API_KEY, API_URL } from '../../configs';

export function GetResponseGender(response) {
  const { genres } = response;

  return genres;
}

async function GetGenders() {
  return fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then(GetResponseGender);
}

export default GetGenders;
