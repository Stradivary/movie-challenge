import { useState, useEffect } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { styles } from "./detailMovie.styles.js";
import {
  getDetailMovies,
  postFavorite,
} from "../../repositories/movies/index.js";
import DetailMovie from "../../modules/DetailMovie/index.js";
import CardEmptyData from "../../components/cardEmptyData/index.js";
import { Icon, Modal, Button, Text, Div } from "react-native-magnus";

export default function DetailMovieScreen({ route }) {
  const [movies, setMovies] = useState([]);
  const [dataModal, setDataModal] = useState({
    show: false,
    message: "",
    isError: false,
  });
  const params = route?.params;
  useEffect(() => {
    getDetailMovies(params?.id).then((res) => {
      setMovies(res);
    });
  }, []);

  const handleAddFavorite = async (data) => {
    const payload = {
      media_type: "movie",
      media_id: data?.id,
      favorite: true,
    };
    const result = await postFavorite(payload);
    if (result?.success) {
      setDataModal({
        ...dataModal,
        show: true,
        message: "Video berhasil ditambahkan ke favorite.",
        isError: false,
      });
    } else {
      setDataModal({
        ...dataModal,
        show: true,
        message: "Video gagal ditambahkan ke favorite.",
        isError: true,
      });
    }
    setTimeout(() => {
      setDataModal({ ...dataModal, show: false, message: "", isError: false });
    }, 1000);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.root}>
        <DetailMovie data={movies} handleAddFavorite={handleAddFavorite} />
        {movies?.length === 0 && (
          <CardEmptyData
            title="Data Kosong !"
            desc="Cek Koneksi anda/Coba
              reload aplikasi"
          />
        )}
        <Modal
          h={70}
          isVisible={dataModal?.show}
          onBackdropPress={() => setDataModal({ ...dataModal, show: false })}
        >
          <Div
            onPress={() => {
              () => setDataModal({ ...dataModal, show: false });
            }}
            row
          >
            <Button
              bg={dataModal?.isError ? "red" : "green"}
              h={35}
              w={35}
              position="absolute"
              top={10}
              right={15}
              rounded="circle"
              onPress={() => {
                () => setDataModal({ ...dataModal, show: false });
              }}
            >
              <Icon
                fontSize={12}
                color={"white"}
                name={dataModal?.isError ? "x" : "check"}
                fontFamily="Feather"
              />
            </Button>
            <Text
              fontSize={16}
              pt={18}
              pl={20}
              color={dataModal?.isError ? "red" : "black"}
            >
              {dataModal?.message}
            </Text>
          </Div>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
