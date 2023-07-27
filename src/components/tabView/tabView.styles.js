import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root:{
    display:'flex',
    width:'100%',
    flexWrap:'wrap',
  },
  title:{
    color:'#fff',
    paddingLeft:10,
    fontSize:15,
  },
  tab:{
    color:'#efeff0',
    paddingVertical:2,
    minHeight:30,
    textAlign:'left',
  },
  tabActive:{
    borderBottomColor:'#cb15fa',
    borderWidth:2,
    color:'#81818a',
    paddingVertical:2,
    minHeight:30,
    textAlign:'left',
  }
});
