import { NavigationContainer } from "@react-navigation/native";
import { Dashboard } from "../screens/dashboard";
import { Signin } from "../screens/signin";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons'

const{Navigator, Screen} = createBottomTabNavigator()
const Routes =()=>{
  return(
  <NavigationContainer>
    <Navigator>
      <Screen name='home' component={Signin}
      options={{
        tabBarIcon:({size, color, focused})=>(
          <Feather name ='search' size={size}
          color={focused? 'green' : 'red'}/>
        )
      }}/>
      <Screen name='dashboard' component={Dashboard}/>
    </Navigator>
  </NavigationContainer>
)
}
export default Routes;