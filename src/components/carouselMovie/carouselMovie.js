import React from "react";
import { styles } from "./carouselMovie.styles.js";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import CrouselItem from "./CrouselItem.js";
import PaginationItem from "./PaginationItem.js";
import { useSharedValue } from "react-native-reanimated";

export default function crouselMoview({
  navigation,
  movies,
  handleSelectItem = () => {},
}) {
  const width = Dimensions.get("window").width;
  const [items, setItems] = React.useState([
    { name: "TURQUOISE", code: "#1abc9c" },
    { name: "EMERALD", code: "#2ecc71" },
    { name: "PETER RIVER", code: "#3498db" },
    { name: "AMETHYST", code: "#9b59b6" },
    { name: "WET ASPHALT", code: "#34495e" },
  ]);

  const COUNT = 6;
  const colors = [...new Array(movies?.length)].map(() => "#F1F1F1");
  const progressValue = useSharedValue(0);

  return (
    <View style={styles.root}>
      <Carousel
        loop
        vertical={false}
        width={width}
        style={{ width: width }}
        height={210}
        autoPlay={true}
        pagingEnabled
        data={movies}
        scrollAnimationDuration={1000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.8,
          parallaxScrollingOffset: 90,
        }}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        renderItem={({ index }) => (
          <CrouselItem
            handleSelectItem={handleSelectItem}
            movies={movies}
            key={index}
            index={index}
          />
        )}
      />
      <View style={styles.boxPaginaton}>
        {colors.map((backgroundColor, index) => {
          return (
            <PaginationItem
              backgroundColor={backgroundColor}
              animValue={progressValue}
              index={index}
              key={index}
              isRotate={false}
              length={colors.length}
            />
          );
        })}
      </View>
    </View>
  );
}
