import { StyleSheet } from "react-native";

const style = StyleSheet.create({
container:{
    height:100,
    width:"100%",
    backgroundColor:"white",
    borderColor:"black",
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 10,
},
shadowOpacity: 0.51,
shadowRadius: 13.16,

elevation: 20,
marginVertical:10,
},
img:{
    width:50,
    height:50,
    borderRadius:25,
    marginHorizontal:20,
},
txt:{
    fontSize:25,
    fontFamily:"bold",
}
});

export default style;