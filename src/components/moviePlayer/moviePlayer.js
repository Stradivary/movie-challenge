import React from "react";
import { View, Image } from "react-native";
import { styles } from "./moviePlayer.styles.js";
import { Div } from "react-native-magnus";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";
import { IMAGE_PATH } from "../../configs/index.js";

export default function moviePlayer({
  videoUrl = "",
  imageUrl = "",
  title,
  tabSelected,
  ...videoProps
}) {
  const renderEmpty = () => {
    return (
      <Div bg="#a1a1a1" h={300} w={"100%"} position="relative">
        <View style={styles.cImageItem}>
          <Image
            style={styles.cImage}
            source={{
              uri: `${IMAGE_PATH}${imageUrl || ""}`,
            }}
          />
        </View>
      </Div>
    );
  };

  if (!videoUrl) {
    return renderEmpty();
  }

  return (
    <VideoPlayer
      style={styles.root}
      videoProps={{
        shouldPlay: false,
        resizeMode: ResizeMode.CONTAIN,
        useNativeControls: true,
        source: {
          uri: videoUrl,
        },
        ...videoProps,
      }}
    />
  );
}
