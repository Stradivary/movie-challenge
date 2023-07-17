import React, { useRef } from "react";
import { View, Image, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { styles } from "./movieSection.styles.js";
import { IMAGE_PATH } from "../../configs/index.js";
import { Icon } from "react-native-magnus";

export default movieSectionItem = ({ data, horizontalItemsView, handleSelectItem }) => {
  const source = useRef({
    uri: `${IMAGE_PATH}${data?.poster_path || ""}`,
  }).current;
  return (
    <View style={horizontalItemsView ? styles.itemContainerHorizontal : styles.itemContainer}>
        <TouchableOpacity onPress={()=>handleSelectItem(data)}>
          <View style={horizontalItemsView ? styles.cImageItemHorizontal :  styles.cImageItem}>
            <ActivityIndicator size="small" />
            <Image style={styles.cImage} source={source} />
          </View>
        </TouchableOpacity>
      <View style={horizontalItemsView ? styles.rightTitleBox : styles.bottomTitleBox }>
        <TouchableOpacity onPress={()=>handleSelectItem(data)}>
          <Text style={styles.titleItem}>
            {data?.title || ""}
          </Text>
        </TouchableOpacity>
        <View style={styles.titleDescBottom}>
          <View style={styles.titleDesc}>
            <Text style={{ color: "yellow", fontSize: 3, paddingTop:0 }}>
              <Icon name="star" fontFamily="FontAwesome" fontSize={10} color="yellow" />
            </Text>
            <Text style={{marginLeft:5, color:'white', fontSize:8}}>
              {data?.vote_average || ""}
            </Text>
          </View>
          <Text
            style={styles.titleAttribut}>
            1h 45min | Fantasy
          </Text>
        </View>
      </View>
    </View>
  );
};
