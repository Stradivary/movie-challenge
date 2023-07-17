import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    backgroundColor:'#000',
    alignItems: "center",
    paddingBottom:10
  },
  boxItems:{
    position:'relative',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'red'
  },
  boxPreview:{
    height:'100%',
  },
  boxTitle:{
    position:'absolute',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    bottom:20
  },
 
  title:{
    fontSize:16,
  },
  descLeft:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  desc:{
    fontSize:14,
  },
  boxPaginaton:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    alignSelf: "center",
  },
  cTextItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "red",
  },
  cImageItem:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  cImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
