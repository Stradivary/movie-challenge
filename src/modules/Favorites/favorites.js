import React from "react";
import { View, Text} from "react-native";
import { styles } from "./favorites.styles";
import MovieSection from "../../components/movieSection/index";

export default function favoritesModule({ data, navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Favorites</Text>
      <MovieSection
        handleSelectItem={(item) => navigation.navigate("DetailMovie", item)}
        title={""}
        withTitle={false}
        horizontal={false}
        scrollEnabled={false}
        staticDimension={0}
        horizontalItemsView={true}
        itemDimension={300}
        titleRight=''
        stylesItems={true}
        movies={data} 
       />
    </View>
  );
}
