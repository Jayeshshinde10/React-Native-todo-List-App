import style from "./Header.style.js"
import { View ,Image,Text} from "react-native"
import headerImg from '../../assets/logo.jpeg';
export default function Header(){
    return(<>
    <View style={style.container}>
    <Image  source={headerImg} style={style.img} resizeMode="contain"></Image>
    <Text style={style.txt}>JUST DO IT</Text>
    </View>
   </>
   )
}
