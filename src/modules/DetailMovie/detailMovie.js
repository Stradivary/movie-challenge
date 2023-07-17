import React, { useEffect } from "react";
import { View } from "react-native";
import { styles } from "./detailMovie.styles";
import MovieSection from "../../components/movieSection/index";
import { Button, Div, Icon, Text } from "react-native-magnus";

export default function detailMovieModule({ data }) {
 
  return (
    <View style={styles.root}>
      <View style={styles.boxPreview}>

      </View>
      <View style={styles.boxDetails}>
        <View style={styles.boxDetailTop}>
          <Text style={styles.titleTop} color="white" fontWeight="700" fontSize={20} mb={15}>Matt Max: Furry Way</Text>
          <Div row mb={6}>
            <Button bg="gray700" m={0} p={4} mr={10}>
              <Icon mr={5} name="star" fontFamily="FontAwesome" color="yellow" fontSize={10} />
              <Text color="gray300" fontSize={10}>7.5</Text>
            </Button>
            <Button bg="gray700" m={0} p={4} mr={10}>
              <Text color="gray300" fontSize={10}>2019</Text>
            </Button>
            <Button bg="gray700" m={0} p={4}>
              <Text color="gray300" fontSize={10}>1h 45min</Text>
            </Button>
          </Div>
          <Div row>
            <Text color="gray300" fontSize={10} mr={5}>Action</Text>
            <Text color="gray300" fontSize={10} mr={5}>●</Text>
            <Text color="gray300" fontSize={10} mr={5}>Trailer</Text>
            <Text color="gray300" fontSize={10} mr={5}>●</Text>
            <Text color="gray300" fontSize={10}>Drama</Text>
          </Div>
        </View>
      </View>
    </View>
  );
}
