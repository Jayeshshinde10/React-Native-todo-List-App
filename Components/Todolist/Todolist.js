import style from "./Todolist.style.js"
import { Alert } from "react-native";
import { Image, Pressable, ScrollView,View ,Text,TouchableOpacity} from "react-native"
import completed from '../../assets/completed.jpeg';
export default function TodoList({task,onPress,todoList}){
      function onButtonClick(task){
            const newTask = {
                ...task,
                isCompleted:!task.isCompleted,
            }
            const updatedTodolist = [...todoList]
        const index = todoList.findIndex((todo)=>todo.id ===task.id)
        updatedTodolist[index]= newTask
        onPress(updatedTodolist)
      } 
      function deleteTodo(todo){
        Alert.alert(
            "Delete todo",
            "Are you sure you want to delete this task?",
            [
                {
                 text:"cancle",
                 style:"cancel"
                },
                {
                text:"Delete",
                style:"destructive",
                onPress:()=>{ onPress(todoList.filter((task)=>task.id !==todo.id))}
                }
            ]
        )
      }

    return(
        <>
        <TouchableOpacity style={style.container} onPress={()=>onButtonClick(task)} onLongPress={()=>deleteTodo(task)}>
                        <Text style={[style.txt,task.isCompleted && {textDecorationLine:"line-through"}]}>{task.taskName}</Text>
                        {task.isCompleted && <Image source={completed} style={
                            style.img
                        }></Image>}
                    </TouchableOpacity>
        </>
    )
}

