import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root:{
    backgroundColor: '#000',
    paddingTop:20,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    maxWidth: '100%',
    paddingBottom:0,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
  },
  image: {
    flex: 1,
  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
    lineHeight:30,
  },
  subTitle: {
    flex: 1,
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
    lineHeight:33,
    marginBottom:14
  },
  desc:{
    flex: 1,
    color: '#a0afa0',
    fontSize: 13,
    textAlign:'center',
  },
  subDesc:{
    flex: 1,
    color: '#a0afa0',
    fontSize: 13,
    textAlign:'center',
    marginBottom:21
  },
  button:{
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:60,
    paddingRight:60,
    alignItems: 'center',
    borderRadius: 5,
  },
  textButton:{
    color:'#fff'
  }
 
});
