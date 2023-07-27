import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root:{
    display:'flex',
    padding:5
  },
  titleHeader:{
    display:'flex',
    justifyContent:'space-between',
    width:'100%',
    flexDirection:'row',
  },
  title:{
    color:'#fff',
    paddingLeft:10,
    fontSize:15,
  },
  titleItem:{
    color: "#5d7079",
    fontSize: 12,
    fontWeight: "600",
    paddingVertical: 4,
  },
  titleDesc:{
    fontSize:14,
    color: "#d0cfd4",
  },
  gridView: {
    marginTop: 5,
    flex: 1,
  },
  itemContainer: {
    display:'flex',
    flexDirection:'row',
    height:'auto'
  },
  cImageItem:{
    backgroundColor: "#8eacb3",
    borderRadius: 8,
    overflow: "hidden",
    height:50,
    width:50,
    borderRadius:25,
  },
  cImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  rightTitleBox:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginLeft:10,
    paddingHorizontal:5,
  },
});
