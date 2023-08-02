import React from "react";
import { Text, View } from "react-native";
import { styles } from "./carouselMovie.styles.js";

export default CarouselTextItem = ({ style, index }) => {
  return (
    <View style={[styles.cTextItem, style]}>
      {typeof index === "number" && (
        <Text style={{ fontSize: 30, color: "black" }}>{index}</Text>
      )}
    </View>
  );
};
