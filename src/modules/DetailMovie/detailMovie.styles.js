import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root:{
    display:'flex',
  },
  boxPreview:{
    backgroundColor:'rgba(255,255,255, 0.5)',
    display:'flex',
    flex:1,
    height:300
  },
  boxDetails:{
    backgroundColor:'black',
    display:'flex',
    position:'relative',
    top:-30,
    flex:1,
    minHeight:300,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
  },
  boxDetailTop:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:20
  },
});
