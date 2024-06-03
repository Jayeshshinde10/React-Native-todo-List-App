import { Pressable, TextInput ,Text,View} from 'react-native'
import style from './DialogBox.Style.js'
export default function DialogBox({ onDialogClose, setTextChange ,onTodoADD}) {
    return (
        <View style={style.dialogBox}>
            <Text style={style.header}>Add </Text>
            <TextInput onChangeText={(text => {
                if (text.length > 5) {
                    setTextChange(text)
                }
            })} style={style.input}></TextInput>
            <View style = {style.footer}>
                <Pressable  onPress={onDialogClose} style={style.cancle}>
                    <Text>Cancle</Text>
                </Pressable>
                <Pressable onPress={()=>onTodoADD()} style={style.Add}>
                    <Text style={style.blue}>Add</Text>
                </Pressable>
            </View>
        </View>
    )
}