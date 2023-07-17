import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import {styles} from './home.styles.js';
import MovieSection from '../../components/movieSection/index.js';
import CarouselMovie from '../../components/carouselMovie/index.js';
import { getDiscover, SortByOptions } from '../../repositories/movies';
// import DiscoverCarousel from '../../components/discover/discover-carousel';

export default function App({navigation}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getDiscover(SortByOptions.voteDesc).then((res) => {
      setMovies(res);
    });
  }, []);

  return (
    <ScrollView style={styles.root}>
      {/* <DiscoverCarousel/> */}
      <CarouselMovie movies={movies?.slice(0,5)} />
      <MovieSection 
        handleSeeAll={()=>navigation.navigate('movieList')}
        handleSelectItem={(item)=>navigation.navigate("DetailMovie", item)}
        movies={movies?.slice(6,11)} title={"Latest Movies"} 
      />
      <MovieSection movies={movies?.slice(12,17)} title={"Now Playing"} />
      <MovieSection movies={movies?.slice(18,23)} title={"Top rated"} />
      <MovieSection movies={movies?.slice(12,17)}title={"Upcoming"} />
      <StatusBar movies={movies?.slice(17,27)} style="auto" />
    </ScrollView>
  );
}
