import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  dialogBox: {
    width: 250,
    height: 200,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    position: 'absolute',
    top: '25%',
    left: '25%',
    justifyContent: 'space-evenly',
    borderRadius:20,
  },
  header: {
    fontSize: 18,
    fontFamily: 'bold',
    color: 'black',
  },
  input: {
    width: '90%',
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 10,
  },
  footer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly", 
  },
  cancel:{
    width:"50%",
    height:40,
  },
  add:{
    width:"50%",
    height:40,
  }
  ,
  blue:{
    color:"blue"
  },
  red:{
    color:"red"
  }
});
export default style;
