import React, { useState } from "react";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import Constants from "expo-constants";
import CarouselmageItem from "./CarouselImageItem";
// import CarouselextItem from "./CarouselTextItem";

export default CrouselItem = (props) => {
  const { movies, style, index, pretty, testID, ...animatedViewProps } = props;
  const enablePretty = Constants?.expoConfig?.extra?.enablePretty || false;
  const [isPretty, setIsPretty] = useState(pretty || enablePretty);
  return (
    <LongPressGestureHandler
      onActivated={() => {
        setIsPretty(!isPretty);
      }}
    >
      <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
        <CarouselmageItem movies={movies} style={style} index={index} showIndex={typeof index === "number"} />
      </Animated.View>
    </LongPressGestureHandler>
  );
};
