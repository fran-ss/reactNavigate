import { NavigationContainer } from "@react-navigation/native";
import { Dashboard } from "../screens/dashboard";
import { Signin } from "../screens/signin";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "../screens/profile";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
type StackRouteList ={
  signin: undefined
  home: undefined
}
const BottonTabsnavigator =()=>{
  const{Navigator, Screen} = createBottomTabNavigator()
    return(
      <Navigator screenOptions={{
        headerShown: false
      }}>
        <Screen name='dashboard' component={Dashboard}/>
        <Screen name='profile' component={Profile}/>
      </Navigator>
  )
  }
export type StackProps = NativeStackNavigationProp<StackRouteList>
export const Routes =()=>{
  const{Navigator, Screen} = createNativeStackNavigator<StackRouteList>()
  return(
    <NavigationContainer>
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name='signin' component={Signin}/>
      <Screen name='home' component={BottonTabsnavigator}/>
    </Navigator>
    </NavigationContainer>
  )

  }


