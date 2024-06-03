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
  const [todoList,setTodoList] = useState([
    { id: 1, taskName: "Buy groceries", isCompleted: false },
    { id: 2, taskName: "Walk the dog", isCompleted: true },
    { id: 3, taskName: "Finish report", isCompleted: false },
    { id: 4, taskName: "Call mom", isCompleted: true },
    { id: 5, taskName: "Schedule appointment", isCompleted: false },
    { id: 6, taskName: "Read book", isCompleted: true },
    { id: 7, taskName: "Pay bills", isCompleted: false },
    { id: 8, taskName: "Clean house", isCompleted: true },
    { id: 9, taskName: "Exercise", isCompleted: false },
    { id: 10, taskName: "Reply to emails", isCompleted: true },
    { id: 11, taskName: "Plan vacation", isCompleted: false },
    { id: 12, taskName: "Go to the bank", isCompleted: true },
    { id: 13, taskName: "Buy gifts", isCompleted: false },
    { id: 14, taskName: "Cook dinner", isCompleted: true },
    { id: 15, taskName: "Water plants", isCompleted: false },
    { id: 16, taskName: "Attend meeting", isCompleted: true },
    { id: 17, taskName: "Fix the car", isCompleted: false },
    { id: 18, taskName: "Update website", isCompleted: true },
    { id: 19, taskName: "Do laundry", isCompleted: false },
    { id: 20, taskName: "Meditate", isCompleted: true },
    { id: 21, taskName: "Plan birthday party", isCompleted: false },
    { id: 22, taskName: "Visit grandma", isCompleted: true },
    { id: 23, taskName: "Renew subscription", isCompleted: false },
    { id: 24, taskName: "Refill prescription", isCompleted: true },
    { id: 25, taskName: "Write blog post", isCompleted: false },
    { id: 26, taskName: "Learn a new skill", isCompleted: true },
    { id: 27, taskName: "Get a haircut", isCompleted: false },
    { id: 28, taskName: "Organize desk", isCompleted: true },
    { id: 29, taskName: "Check tire pressure", isCompleted: false },
    { id: 30, taskName: "Grocery shopping", isCompleted: true },
    { id: 31, taskName: "Donate clothes", isCompleted: false },
    { id: 32, taskName: "Update resume", isCompleted: true },
    { id: 33, taskName: "Attend webinar", isCompleted: false },
    { id: 34, taskName: "Pay rent", isCompleted: true },
    { id: 35, taskName: "Repair fence", isCompleted: false },
    { id: 36, taskName: "Go for a run", isCompleted: true },
    { id: 37, taskName: "Volunteer work", isCompleted: false },
    { id: 38, taskName: "Host dinner", isCompleted: true },
    { id: 39, taskName: "Sort mail", isCompleted: false },
    { id: 40, taskName: "Watch a movie", isCompleted: true },
    { id: 41, taskName: "Prepare presentation", isCompleted: false },
    { id: 42, taskName: "Book flights", isCompleted: true },
    { id: 43, taskName: "Clean garage", isCompleted: false },
    { id: 44, taskName: "Go fishing", isCompleted: true },
    { id: 45, taskName: "Take car to mechanic", isCompleted: false },
    { id: 46, taskName: "Complete survey", isCompleted: true },
    { id: 47, taskName: "Buy new phone", isCompleted: false },
    { id: 48, taskName: "Review finances", isCompleted: true },
    { id: 49, taskName: "Attend concert", isCompleted: false },
    { id: 50, taskName: "Fix leaky faucet", isCompleted: true },
    { id: 51, taskName: "Write thank you notes", isCompleted: false },
    { id: 52, taskName: "Practice guitar", isCompleted: true },
    { id: 53, taskName: "Study for exam", isCompleted: false },
    { id: 54, taskName: "Go hiking", isCompleted: true },
    { id: 55, taskName: "Take dog to vet", isCompleted: false },
    { id: 56, taskName: "Clean windows", isCompleted: true },
    { id: 57, taskName: "Read newspaper", isCompleted: false },
    { id: 58, taskName: "Organize closet", isCompleted: true },
    { id: 59, taskName: "Go to the post office", isCompleted: false },
    { id: 60, taskName: "Take a nap", isCompleted: true },
    { id: 61, taskName: "Buy groceries", isCompleted: false },
    { id: 62, taskName: "Walk the dog", isCompleted: true },
    { id: 63, taskName: "Finish report", isCompleted: false },
    { id: 64, taskName: "Call mom", isCompleted: true },
    { id: 65, taskName: "Schedule appointment", isCompleted: false },
    { id: 66, taskName: "Read book", isCompleted: true },
    { id: 67, taskName: "Pay bills", isCompleted: false },
    { id: 68, taskName: "Clean house", isCompleted: true },
    { id: 69, taskName: "Exercise", isCompleted: false },
    { id: 70, taskName: "Reply to emails", isCompleted: true },
    { id: 71, taskName: "Plan vacation", isCompleted: false },
    { id: 72, taskName: "Go to the bank", isCompleted: true },
    { id: 73, taskName: "Buy gifts", isCompleted: false },
    { id: 74, taskName: "Cook dinner", isCompleted: true },
    { id: 75, taskName: "Water plants", isCompleted: false },
    { id: 76, taskName: "Attend meeting", isCompleted: true },
    { id: 77, taskName: "Fix the car", isCompleted: false },
    { id: 78, taskName: "Update website", isCompleted: true },
    { id: 79, taskName: "Do laundry", isCompleted: false },
    { id: 80, taskName: "Meditate", isCompleted: true },
    { id: 81, taskName: "Plan birthday party", isCompleted: false },
    { id: 82, taskName: "Visit grandma", isCompleted: true },
    { id: 83, taskName: "Renew subscription", isCompleted: false },
    { id: 84, taskName: "Refill prescription", isCompleted: true },
    { id: 85, taskName: "Write blog post", isCompleted: false },
    { id: 86, taskName: "Learn a new skill", isCompleted: true },
    { id: 87, taskName: "Get a haircut", isCompleted: false },
    { id: 88, taskName: "Organize desk", isCompleted: true },
    { id: 89, taskName: "Check tire pressure", isCompleted: false },
    { id: 90, taskName: "Grocery shopping", isCompleted: true },
    { id: 91, taskName: "Donate clothes", isCompleted: false },
    { id: 92, taskName: "Update resume", isCompleted: true },
    { id: 93, taskName: "Attend webinar", isCompleted: false },
    { id: 94, taskName: "Pay rent", isCompleted: true },
    { id: 95, taskName: "Repair fence", isCompleted: false },
    { id: 96, taskName: "Go for a run", isCompleted: true },
    { id: 97, taskName: "Volunteer work", isCompleted: false },
    { id: 98, taskName: "Host dinner", isCompleted: true },
    { id: 99, taskName: "Sort mail", isCompleted: false },
    { id: 100, taskName: "Watch a movie", isCompleted: true }
  ]);
  const [inProgress,setInProgress] = useState(false);
  const [isDone,setIsDone] = useState(false);
  const [isDialogBoxOpen,setIsDialogBoxOpen] = useState(true)
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
    setTodoList([...TodoList,newtodo])
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

