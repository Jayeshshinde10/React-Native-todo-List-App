import { StatusBar } from 'expo-status-bar';
 
import { ScrollView, StyleSheet, Text, View ,Alert} from 'react-native';
import {SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context'
import Header from './Components/Header/Header.js';
import TodoList from './Components/Todolist/Todolist.js';
import Footer from './Components/Footer/Footer.js';
import style from './App.style';
import { useState } from 'react';
import AddButton from './Components/AddButton/AddButton.js';
import DialogBox from './Components/DialogBox/DialogBox.js';
export default function App() {
  const [currentButton,setCurrentButton]= useState("All")
  const [todoList,setTodoList] = useState([]);
  const [inProgress,setInProgress] = useState(false);
  const [isDone,setIsDone] = useState(false);
  const [isDialogBoxOpen,setIsDialogBoxOpen] = useState(false)
  const [newTodoText,setNewTodoText] = useState('')
   function onDialogClose (){
    setIsDialogBoxOpen(false)
    setNewTodoText("")
   }
   function onTodoAdd(){
    const newtodo = {
      id:TodoList.length+1,
      taskName:newTodoText,
      isCompleted:false,
    }
    setTodoList([todoList,newtodo])
    setNewTodoText("")
    setIsDialogBoxOpen(false)
   }
  return (
    <>
    <SafeAreaProvider>
    <SafeAreaView style={style.container}>
     <Header/>
     <ScrollView style={style.scroll}>
        {/* {todoList.map((todo)=>{
          <TodoList task={todo} key={todo.id}/>
        })} */}
        { (!isDone && !inProgress) && todoList.map((todo)=><TodoList todoList = {todoList}task={todo} onPress={setTodoList} key={todo.id}/>)}
        {isDone && todoList.filter((todo)=>todo.isCompleted ===true ).map((todo)=><TodoList todoList = {todoList}task={todo} onPress={setTodoList} key={todo.id}/>)}
        { inProgress && todoList.filter((todo)=>todo.isCompleted ===false ).map((todo)=><TodoList todoList = {todoList}task={todo} onPress={setTodoList} key={todo.id}/>)}
        </ScrollView>
     <Footer setIsDone= {setIsDone} setInProgress= {setInProgress}currentButton={currentButton} todoList={todoList}onPress={setCurrentButton} />
     </SafeAreaView>
     <AddButton onPress={()=>setIsDialogBoxOpen(true)}/>
     </SafeAreaProvider>
     {isDialogBoxOpen && <DialogBox onDialogClose={onDialogClose} setTextChange={setNewTodoText} onTodoADD={onTodoAdd}/>}
    </>
  );
}

