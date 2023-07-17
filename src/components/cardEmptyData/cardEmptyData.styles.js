import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    padding:5,
    minHeight:300
  },
  title:{
    color:'#fff',
    fontSize:15,
    marginTop:20,
    marginBottom:5,
  },
  desc:{
    color:'#a1a1a1',
    paddingLeft:10,
    fontSize:15,
    width:'70%',
    textAlign:'center'
  },
});
