import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Onboarding from './src/Authentication/Onboarding';
import { LoadAssets } from './src/components/LoadAssets';

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

const AuthenticationStack = createStackNavigator()

const AuthenticationNavigator = () => {
 return (<AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
  </AuthenticationStack.Navigator>)
}

export default function App() {
  return (
    (<LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>)
  );
}

