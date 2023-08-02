import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { styles } from "./home.styles.js";
import MovieSection from "../../components/movieSection/index.js";
import CarouselMovie from "../../components/carouselMovie/index.js";
import {
  getTopRate,
  getUpcoming,
  getPopular,
  getNowPlaying,
  getTrending,
} from "../../repositories/movies";

export default function App({ navigation }) {
  const [trending, setTrending] = useState([]);
  const [topRateMovie, setTopRateMoview] = useState([]);
  const [upComing, setUpComming] = useState([]);
  const [latest, setLatest] = useState([]);
  const [nowPlaying, setGetNowPlaying] = useState([]);

  useEffect(() => {
    getTrending().then((res) => {
      setTrending(res);
    });
  }, []);
  
  useEffect(() => {
    getPopular().then((res) => {
      setLatest(res);
    });
  }, []);

  useEffect(() => {
    getNowPlaying().then((res) => {
      setGetNowPlaying(res);
    });
  }, []);

  useEffect(() => {
    getTopRate().then((res) => {
      setTopRateMoview(res);
    });
  }, []);

  useEffect(() => {
    getUpcoming().then((res) => {
      setUpComming(res);
    });
  }, []);

  return (
    <ScrollView style={styles.root}>
      <CarouselMovie
        movies={trending.slice(0,5)}
        handleSelectItem={(item) => navigation.navigate("DetailMovie", item)}
      />
      <MovieSection
        handleSeeAll={() => navigation.navigate("movieList")}
        handleSelectItem={(item) => navigation.navigate("DetailMovie", item)}
        movies={latest}
        title={"Latest Movies"}
      />
      <MovieSection
        handleSeeAll={() => navigation.navigate("movieList")}
        handleSelectItem={(item) => navigation.navigate("DetailMovie", item)}
        movies={nowPlaying}
        title={"Now Playing"}
      />
      <MovieSection
        handleSeeAll={() => navigation.navigate("movieList")}
        handleSelectItem={(item) => navigation.navigate("DetailMovie", item)}
        movies={topRateMovie}
        title={"Top rated"}
      />
      <MovieSection
        handleSeeAll={() => navigation.navigate("movieList")}
        handleSelectItem={(item) => navigation.navigate("DetailMovie", item)}
        movies={upComing}
        title={"Upcoming"}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
