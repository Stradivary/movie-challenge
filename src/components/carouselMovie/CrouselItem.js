import React, { useState } from "react";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import Constants from "expo-constants";
import CarouselmageItem from "./CarouselImageItem";

export default CrouselItem = (props) => {
  const {
    movies,
    style,
    index,
    pretty,
    testID,
    handleSelectItem,
    ...animatedViewProps
  } = props;
  const enablePretty = Constants?.expoConfig?.extra?.enablePretty || false;
  const [isPretty, setIsPretty] = useState(pretty || enablePretty);
  return (
    <LongPressGestureHandler
      onActivated={() => {
        setIsPretty(!isPretty);
      }}
    >
      <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
        <CarouselmageItem
          handleSelectItem={handleSelectItem}
          movies={movies}
          style={style}
          index={index}
          showIndex={typeof index === "number"}
        />
      </Animated.View>
    </LongPressGestureHandler>
  );
};
