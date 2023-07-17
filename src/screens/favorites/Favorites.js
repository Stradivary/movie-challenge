import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import {styles} from './favorites.styles.js';
import { getDiscover, SortByOptions } from '../../repositories/movies/index.js';
import Favorites from '../../modules/Favorites/index.js';
import CardEmptyData from '../../components/cardEmptyData/index.js';

export default function FavoritesScreen() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getDiscover(SortByOptions.voteDesc).then((res) => {
      setMovies(res);
    });
  }, []);

  return (
    <ScrollView style={styles.root}>
      <Favorites data={movies?.slice(0,10)}/>
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
