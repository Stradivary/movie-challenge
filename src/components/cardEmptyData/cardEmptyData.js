import React from "react";
import { Text, View } from "react-native";
import { styles } from "./cardEmptyData.styles.js";
import { Icon } from "react-native-magnus";
export default function MovieSection({
  title,
  desc
}) {
  return (
    <View style={styles.root}>
      <Icon name="trash" fontFamily="Feather" fontSize="6xl" color={'red200'} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}
