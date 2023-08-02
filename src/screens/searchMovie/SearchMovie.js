import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import {styles} from './searchMovie.styles.js';
import { getPopular, getSearchMovie } from '../../repositories/movies/index.js';
import SearchMovies from '../../modules/SearchMovies/index.js';
export default function SearchMovie(props) {
  const [keyword, setKeyword] =  useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (keyword?.length===0){
      getPopular().then((res) => {
        setMovies(res);
      });
    }
  }, [keyword]);

  useEffect(() => {
    if (keyword?.length>3){
      getSearchMovie({keyword:keyword}).then((res) => {
        setMovies(res);
      });
    }
  }, [keyword]);

  return (
    <ScrollView style={styles.root}>
      <SearchMovies data={movies} setKeyword={setKeyword} {...props}/>
    </ScrollView>
  );
}
