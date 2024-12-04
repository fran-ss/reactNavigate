import { NavigationContainer } from "@react-navigation/native";
import { Dashboard } from "../screens/dashboard";
import { Signin } from "../screens/signin";
import { createDrawerNavigator } from "@react-navigation/drawer";

const{Navigator, Screen} = createDrawerNavigator()
const Routes =()=>{
  return(
  <NavigationContainer>
    <Navigator>
      <Screen name='home' component={Signin}/>
      <Screen name='dashboard' component={Dashboard}/>
    </Navigator>
  </NavigationContainer>
)
}
export default Routes;