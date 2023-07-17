import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import {styles} from './detailMovie.styles.js';
import { getDiscover, SortByOptions } from '../../repositories/movies/index.js';
import DetailMovie from '../../modules/DetailMovie/index.js';
import CardEmptyData from '../../components/cardEmptyData/index.js';

export default function DetailMovieScreen() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getDiscover(SortByOptions.voteDesc).then((res) => {
      setMovies(res);
    });
  }, []);

  return (
    <ScrollView style={styles.root}>
      <DetailMovie data={movies?.slice(0,10)}/>
      {movies?.length===0 && 
        <CardEmptyData 
          title="Data Kosong !" 
          desc="Cek Koneksi anda/Coba
          reload aplikasi" 
        />
      }
    </ScrollView>
  );
}
