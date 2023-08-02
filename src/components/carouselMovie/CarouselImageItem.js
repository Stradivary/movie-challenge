import React, { useRef } from "react";
import { View, ActivityIndicator, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./carouselMovie.styles.js";
import { IMAGE_PATH } from "../../configs/index.js";
import { Icon } from "react-native-magnus";
import { formatDuraton } from "../../helpers/index.js";

export default CarouselImageItem = ({
  movies,
  style,
  index: _index,
  showIndex = true,
  handleSelectItem=()=>{},
}) => {
  const index = (_index || 0) + 1;
  const moviewItems = movies[index] || {};
  const source = useRef({
    uri: `${IMAGE_PATH}${moviewItems?.poster_path || ''}`,
  }).current;

  return (
    <View style={{...style}}>
        <TouchableOpacity style={{height:220}} onPress={()=>handleSelectItem(moviewItems)}>
          <View style={styles.cImageItem}>
            <ActivityIndicator size="small" />
            <Image key={index} style={styles.cImage} source={source} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleSelectItem(movies[_index])}>
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 20,
              width:'70%',
              fontWeight:'600',
              overflow: "hidden",
              paddingHorizontal: 14,
              paddingVertical:2,
              bottom:48,
              left:8,
            }}
          >
          {moviewItems?.title || ''}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",
            color: "white",
            fontSize: 15,
            backgroundColor: "#333333",
            borderRadius: 5,
            fontWeight:'600',
            overflow: "hidden",
            paddingHorizontal: 8,
            paddingVertical:4,
            bottom:20,
            left:20,
            alignItems:'center',
            display:'flex',
            justifyContent:'center'
          }}
        >
          <Text style={{color:'yellow', fontSize:15, marginRight:5}}>* </Text>{moviewItems?.vote_average || ''}
        </Text>
        <Text
          style={{
            position: "absolute",
            color: "#ababab",
            fontSize: 16,
            fontWeight:'500',
            overflow: "hidden",
            paddingHorizontal: 8,
            paddingVertical:2,
            bottom:20,
            left:65,
          }}
        >
          {formatDuraton(moviewItems?.runtime)} | Fantasy
        </Text>
        <Text
          style={{
            position: "absolute",
            color: "white",
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center',
            backgroundColor: "white",
            borderRadius: 15,
            paddingHorizontal:2,
            paddingVertical:2,
            overflow: "hidden",
            bottom:16,
            right:16,
          }}
        >
          {showIndex ? <Icon name="play-circle" fontFamily="Feather" color="primary500" fontSize={"3xl"} /> : ""}
        </Text>
      </View>
  );
};
