import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import {styles} from './favorites.styles.js';
import { getFavorites } from '../../repositories/movies/index.js';
import Favorites from '../../modules/Favorites/index.js';
import CardEmptyData from '../../components/cardEmptyData/index.js';

export default function FavoritesScreen(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getFavorites().then((res) => {
      setMovies(res);
    });
  }, []);

  return (
    <ScrollView style={styles.root}>
      <Favorites data={movies} {...props}/>
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
