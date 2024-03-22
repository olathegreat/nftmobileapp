 
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {useFonts} from "expo-font"
import Home from "./screens/Home";
import Details from "./screens/Details";






const theme =  {
   ...DefaultTheme,
   colors: {
    ...DefaultTheme.colors,
    background: "transparent"
   }
}

const Stack = createNativeStackNavigator();

const  App = ()=> {

  const [loaded] = useFonts({
       DmsBold: require("./assets/fonts/DMSans-Bold.ttf"),
       DmsRegular: require("./assets/fonts/DMSans-Regular.ttf"),
       DmsMedium: require("./assets/fonts/DMSans-Medium.ttf"),
       InterBold: require("./assets/fonts/Inter-Bold.ttf"),
       InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
       InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
       InterLight: require("./assets/fonts/Inter-Light.ttf"),
       InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
       
  })
  if(!loaded) return null
 
  return (
    <NavigationContainer  theme={theme}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName = "Home">
        <Stack.Screen name="Home" component= {Home}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export default App;
