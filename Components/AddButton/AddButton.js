import { Pressable } from "react-native";
import style from "./AddButton.Style";
 export default function AddButton({onPress}){
    return (
        <>
        <Pressable style={style.btn} onPress={onPress}> 
            <Text style={style.txt}>New Button</Text>
        </Pressable>
        </>
    )
 }