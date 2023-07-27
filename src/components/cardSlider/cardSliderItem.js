import React, { useRef } from "react";
import { View, Image, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { styles } from "./cardSlider.styles.js";
import { IMAGE_PATH } from "../../configs/index.js";
import { Icon } from "react-native-magnus";

export default cardSliderItem = ({ data, handleSelectItem }) => {
  const source = useRef({
    uri: `${IMAGE_PATH}${data?.image || ""}`,
  }).current;
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={()=>handleSelectItem(data)}>
        <View style={ styles.cImageItem}>
          <Image style={styles.cImage} source={source} />
        </View>
      </TouchableOpacity>
      <View style={styles.rightTitleBox }>
        <TouchableOpacity onPress={()=>handleSelectItem(data)}>
          <Text style={styles.titleItem}>
            {data?.role || ""}
          </Text>
        </TouchableOpacity>
        <Text style={styles.titleDesc}>
          {data?.name || ""}
        </Text>
      </View>
    </View>
  );
};
