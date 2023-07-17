import { API_KEY, API_URL } from '../../configs';

export const SortByOptions = {
  voteDesc: 'vote_average.desc',
  page:1
};

export function getResponseDiscover(response) {
  const { results } = response;
  return results;
}

async function getDiscover (sortBy = null) {
  const url = `${API_URL}/discover/movie?api_key=${API_KEY}&sortBy=${sortBy}&page=1`;
  return fetch(url)
    .then((res) => res.json())
    .then(getResponseDiscover);
};

export default getDiscover;
