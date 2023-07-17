import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    backgroundColor: '#000',
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
