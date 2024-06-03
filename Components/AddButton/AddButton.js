import { Pressable,Text, } from "react-native";
import style from "./AddButton.Style";
 export default function AddButton({onPress}){
    return (
        <>
        <Pressable style={style.btn} onPress={onPress}> 
            <Text style={style.txt}>+ New Todo</Text>
        </Pressable>
        </>
    )
 }