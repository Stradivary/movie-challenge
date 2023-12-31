import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./detailMovie.styles";
import { Button, Div, Icon, Text } from "react-native-magnus";
import GradientButton from "../../components/gradientButton";
import { ScrollView } from "react-native-gesture-handler";
import CardSlider from "../../components/cardSlider";
import TabView from "../../components/tabView";
import MovieSection from "../../components/movieSection/index";
import dayjs from "dayjs";
import MoviePlayer from "../../components/moviePlayer/index";
import { formatDuraton } from "../../helpers";

const mockDataCash = [
  { id: "c01", image: "", role: "Director", name: "Anton Amir" },
  { id: "c02", image: "", role: "Actor", name: "Jenifer" },
  { id: "c03", image: "", role: "Actor", name: "Joann Doel" },
  { id: "c04", image: "", role: "Actor", name: "Rano" },
  { id: "c05", image: "", role: "Actor", name: "Karno" },
];

export default function detailMovieModule({ data, handleAddFavorite }) {
  const [tab, setTab] = useState(1);
  const [dataTab, setDataTab] = useState([
    { name: "Similars", value: 1 },
    { name: "Recommendation", value: 2 },
  ]);

  const _data = data[0] || {};

  return (
    <View style={styles.root}>
      <MoviePlayer videoUrl={""} imageUrl={_data?.poster_path}/>
      <View style={styles.boxDetails}>
        <View style={styles.boxDetailTop}>
          <Text
            style={styles.titleTop}
            color="white"
            fontWeight="700"
            fontSize={20}
            mb={15}
          >
            {_data?.title || ""}
          </Text>
          <Div row mb={6}>
            <Button bg="gray700" m={0} p={4} mr={10}>
              <Icon
                mr={5}
                name="star"
                fontFamily="FontAwesome"
                color="yellow"
                fontSize={10}
              />
              <Text color="gray300" fontSize={10}>
                {parseFloat(_data?.vote_average).toFixed(1)}
              </Text>
            </Button>
            <Button bg="gray700" m={0} p={4} mr={10}>
              <Text color="gray300" fontSize={10}>
                {dayjs(_data?.release_date).format("YYYY")}
              </Text>
            </Button>
            <Button bg="gray700" m={0} p={4}>
              <Text color="gray300" fontSize={10}>
                {formatDuraton(_data?.runtime)}
              </Text>
            </Button>
          </Div>
          <Div row>
            {_data?.genres?.length > 0 &&
              _data?.genres?.map((item, i) => {
                return (
                  <Div row key={i}>
                    <Text color="gray300" fontSize={10} mr={5}>
                      {item?.name}
                    </Text>
                   {i < _data?.genres?.length-1 && <Text color="gray300" fontSize={10} mr={5}>
                      ●
                    </Text>}
                  </Div>
                );
              })}
          </Div>
          <Div row mt={20}>
            <GradientButton
              onPress={() => {}}
              title="Watch Trailer"
              customStyle={{
                paddingLeft: 70,
                paddingRight: 70,
              }}
              leftSection={
                <Icon
                  fontFamily="FontAwesome"
                  name="play"
                  color="white"
                  mr={10}
                  fontSize={"2xl"}
                />
              }
            />
            <Button onPress={()=>handleAddFavorite(_data || "")}  ml={10} p={10} bg="white">
              <Icon
                fontFamily="Feather"
                name="bookmark"
                color="gray500"
                fontSize={"2xl"}
              />
            </Button>
          </Div>
          <Div pl={20} pr={12}>
            <Text color="white" mt={20} fontSize={"lg"} mb={5}>
              Description
            </Text>
            <Text>
              <Text color="gray500">
                {_data?.overview || ""}
              </Text>
              <Text ml={10} fontSize={10} color="#cb15fa">
                {" "}
                Read more
              </Text>
            </Text>
          </Div>
          <Div row pl={20} pr={12} w={"100%"} h={100}>
            <CardSlider title={"Cast"} data={mockDataCash} />
          </Div>
          <Div row pl={20} pr={12} w={"100%"} h={"auto"}>
            <TabView
              data={dataTab}
              tabSelected={tab}
              handleTabSelected={(value) => {
                setTab(value);
              }}
            >
              <ScrollView style={{ height: 320, width: "100%" }}>
                <MovieSection
                  title={""}
                  withTitle={false}
                  horizontal={false}
                  rightPlayButton={true}
                  hideRateStar={true}
                  scrollEnabled={false}
                  staticDimension={0}
                  horizontalItemsView={true}
                  itemDimension={300}
                  titleRight=""
                  stylesItems={true}
                  movies={data}
                  customDesc={(data, styles) => (
                    <Text style={styles.titleDesc}>
                      {dayjs(data?.release_date).format("YYYY")}
                    </Text>
                  )}
                />
              </ScrollView>
            </TabView>
          </Div>
        </View>
      </View>
    </View>
  );
}
