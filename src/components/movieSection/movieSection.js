import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./movieSection.styles.js";
import { FlatGrid } from "react-native-super-grid";
import MovieSectionItem from "./movieSectionItem.js";
export default function MovieSection({
  movies,
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
  return (
    <View style={styles.root}>
      {withTitle ? <View style={styles.titleHeader}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={()=>handleSeeAll()}>
          <Text style={styles.viewAll}>{titleRight}</Text>
        </TouchableOpacity>
      </View> : []}
      <FlatGrid
        itemDimension={itemDimension}
        data={movies}
        scrollEnabled={scrollEnabled}
        style={styles.gridView}
        staticDimension={staticDimension}
        horizontal={horizontal}
        scrol
        spacing={10}
        {...gridProps}
        renderItem={({ item }) =><MovieSectionItem handleSelectItem={handleSelectItem} horizontalItemsView={horizontalItemsView} data={item} />}
      />
    </View>
  );
}
