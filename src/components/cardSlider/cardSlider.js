import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./cardSlider.styles.js";
import { FlatGrid } from "react-native-super-grid";
import CardSlider from "./cardSliderItem.js";
export default function cardSlider({
  data=[],
  title,
  titleRight = "See All",
  withTitle=true,
  horizontal=true,
  staticDimension=200,
  scrollEnabled=true,
  gridProps,
  horizontalItemsView=false,
  itemDimension=130,
  handleSeeAll=()=>{},
  handleSelectItem=()=>{},
}) {
  console.log("DATA", data);
  return (
    <View style={styles.root}>
      {withTitle ? <View style={styles.titleHeader}>
        <Text style={styles.title}>{title}</Text>
      </View> : []}
      <FlatGrid
        itemDimension={itemDimension}
        data={data}
        scrollEnabled={scrollEnabled}
        style={styles.gridView}
        staticDimension={staticDimension}
        horizontal={horizontal}
        scrol
        spacing={10}
        {...gridProps}
        renderItem={({ item }) =><CardSlider handleSelectItem={handleSelectItem} horizontalItemsView={horizontalItemsView} data={item} />}
      />
    </View>
  );
}
