import style from './Footer.style.js'
import { View, Text, Pressable } from 'react-native'
export default function Footer({currentButton,onPress,todoList ,setIsDone,setInProgress}) {

    function getButtonStyle(btnTxt){
       if(currentButton ===btnTxt){
        return {
            color:"blue",
            fontSize:20,
        }
    }
        else {
            return{
            color:"black",
            fontSize:20,
            }
        }
       
    }
    return (
        <>
            <View style={style.container}>
                <Pressable onPress={()=>{onPress("All") 
                setInProgress(false) 
                setIsDone(false)}}><Text style={getButtonStyle("All")}>All({todoList.length})</Text></Pressable>
                <Pressable onPress={()=>{onPress("inProgress") 
                    setInProgress(true) 
                    setIsDone(false)
                }}><Text style={getButtonStyle("inProgress")}>inProgress({todoList.filter(todo=>todo.isCompleted === false).length})</Text></Pressable>
                <Pressable onPress={()=>{onPress("Done")
                    setInProgress(false) 
                    setIsDone(true)
                }}><Text style={getButtonStyle("Done")}>Done ({todoList.filter(todo=>todo.isCompleted === true).length})</Text></Pressable>
            </View>
        </>
    )
}

