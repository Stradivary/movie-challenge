import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./moviePlayer.styles.js";
import { Button, Div } from "react-native-magnus";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";

export default function moviePlayer({
  data = [],
  title,
  tabSelected,
  ...tabProps
}) {
  return (
    <VideoPlayer
      style={styles.root}
      videoProps={{
        shouldPlay: true,
        resizeMode: ResizeMode.CONTAIN,
        source: {
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
      }}
    />
  );
}
