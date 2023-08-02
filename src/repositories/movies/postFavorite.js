import { API_KEY, API_URL, BEARER_AUTH } from "../../configs";
export function GetResponseMovie(response) {
  return response || {};
}

async function postFavorite(payload) {
  const accountId = "20127119";
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: BEARER_AUTH,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return fetch(
    `${API_URL}/account/${accountId}/favorite?api_key=${API_KEY}`,
    requestOptions
  )
    .then((res) => res.json())
    .then(GetResponseMovie);
}

export default postFavorite;
