import React from "react";
import { View, Text} from "react-native";
import { styles } from "./searchMovies.styles";
import { Icon, Input } from "react-native-magnus";
import MovieSection from "../../components/movieSection/index";

export default function searchMovies({ data }) {
  return (
    <View style={styles.root}>
      <Input 
        placeholder="Cari"
        style={styles.inputSearch}
        p={5}
        m={15}
        mt={21}
        color="white"
        focusBorderColor="gray700"
        borderColor="gray700"
        suffix={<Text style={styles.boxSearch}> 
        | <Icon style={styles.iconSearch} 
            name="search"
            fontFamily="Feather"
            color="gray100"
            fontSize={"lg"} />
        </Text>}
      />
      <MovieSection
        title={"Popular Movie"}
        horizontal={false}
        scrollEnabled={false}
        staticDimension={0}
        titleRight=''
        movies={data} 
       />
    </View>
  );
}
