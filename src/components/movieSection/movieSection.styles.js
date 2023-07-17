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
    color: "white",
    fontSize: 12,
    fontWeight: "600",
    paddingVertical: 4,
  },
  titleDesc:{
    color: "white",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    backgroundColor: "#333333",
    borderRadius: 5,
    paddingVertical: 4,
  },
  titleAttribut:{
    color: "#ababab",
    fontSize: 8,
    fontWeight: "500",
    marginLeft:2,
  },
  viewAll:{
    color:'#fff',
    fontSize:15,
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
 
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  itemContainer: {
    display:'flex',
    flexDirection:'column',
    width:150,
    height:'auto'
  },
  itemContainerHorizontal: {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'auto'
  },
  cImageItem:{
    backgroundColor: "#34495e",
    borderRadius: 8,
    overflow: "hidden",
    height:110,
    minWidth:'30%'
  },
  cImageItemHorizontal:{
    backgroundColor: "#34495e",
    borderRadius: 8,
    overflow: "hidden",
    height:64,
    minWidth:'30%'
  },
  cImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bottomTitleBox:{
    display:'flex',
    flexDirection:'column',
  },
  rightTitleBox:{
    display:'flex',
    flexDirection:'column',
    paddingLeft:20,
    justifyContent:'center',
    alignItems:'flex-start'
  },
  titleDescBottom:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  horizontalRightView:{
    marginLeft:20,
  }
});
