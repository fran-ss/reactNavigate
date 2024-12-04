import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Dashboard } from "../screens/dashboard";
import { Signin } from "../screens/signin";
type StackRouteList={
  signin: undefined
  dashboard: undefined
  home: undefined
}
const{Navigator, Screen} = createNativeStackNavigator<StackRouteList>()
export type Stackprops = NativeStackNavigationProp<StackRouteList>
const Routes =()=>{
  return(
  <NavigationContainer>
    <Navigator>
      <Screen name='signin' component={Signin}/>
      <Screen name='dashboard' component={Dashboard}/>
    </Navigator>
  </NavigationContainer>
)
}
export default Routes;