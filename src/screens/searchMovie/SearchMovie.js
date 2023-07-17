import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import {styles} from './searchMovie.styles.js';
import { getDiscover, SortByOptions } from '../../repositories/movies/index.js';
import SearchMovies from '../../modules/SearchMovies/index.js';
export default function SearchMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getDiscover(SortByOptions.voteDesc).then((res) => {
      setMovies(res);
    });
  }, []);

  return (
    <ScrollView style={styles.root}>
      <SearchMovies data={movies?.slice(0,10)}/>
    </ScrollView>
  );
}
