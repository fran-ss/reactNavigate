import { useNavigation } from "@react-navigation/native";
import { Button, View, StyleSheet } from "react-native";
import { Stackprops } from "../routes";
export function Signin(){
  const {navigate} = useNavigation<Stackprops>()
  return(
    <View style={styles.container}>
      <Button title="Entrar" onPress={()=> navigate('home')}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
 }
}
)