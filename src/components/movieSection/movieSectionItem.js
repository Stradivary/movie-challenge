import React, { useRef } from "react";
import { View, Image, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { styles } from "./movieSection.styles.js";
import { IMAGE_PATH } from "../../configs/index.js";
import { Icon } from "react-native-magnus";
import { formatDuraton } from "../../helpers/index.js";

export default movieSectionItem = ({ data, horizontalItemsView, 
  handleSelectItem,
  hideRateStar=false,
  customDesc=()=>{},
}) => {
  const source = useRef({
    uri: `${IMAGE_PATH}${data?.poster_path || ""}`,
  }).current;

  return (
    <View key={data?.id} style={horizontalItemsView ? styles.itemContainerHorizontal : styles.itemContainer}>
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
        {!hideRateStar &&<View style={styles.titleDescBottom}>
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
            {formatDuraton(data?.runtime)} | Fantasy
          </Text>
        </View>}
        {hideRateStar && <View style={styles.titleDescBottom}>
        {customDesc(data, styles) || 
          <View style={styles.titleDesc}>
           <Text style={{marginLeft:5, color:'white', fontSize:8}}>
            {data?.vote_average || ""}
            </Text>
          </View>
        }
        </View>}
      </View>
    </View>
  );
};
