import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from "@expo/vector-icons";

import { setNavigator } from './src/navigationRef';

import { Provider as AuthProvider } from "./src/states/contexts/AuthContext";
import { Provider as LocationProvider } from "./src/states/contexts/LocationContext";
import { Provider as VehicleProvider } from "./src/states/contexts/VehicleContext";

import SigninScreen from './src/screens/SigninScreen';
import VehicleListScreen from './src/screens/VehicleListScreen';
import SignupScreen from './src/screens/SignupScreen';
import VehicleDetailScreen from './src/screens/VehicleDetailScreen';
import AccountScreen from './src/screens/AccountScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

const VehicleListFlow = createStackNavigator({
  VehicleList: VehicleListScreen,
  VehicleDetail: VehicleDetailScreen
});

VehicleListFlow.navigationOptions = () => {
  return {
    title: "Vehicles",
    tabBarIcon: <Feather name="list" size={20} />
  }
};

const switchNavigator = createSwitchNavigator(
  {
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
      Signin: SigninScreen,
      Signup: SignupScreen
    },{
      defaultNavigationOptions:{
        title: ""
      }
    }),
    mainFlow: createMaterialBottomTabNavigator({
      vehicleListFlow: VehicleListFlow,
      Account: AccountScreen
    })
  },{
    initialRouteName: "ResolveAuth"
  }
);

const App = createAppContainer(switchNavigator);

export default function (){
  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <LocationProvider>
          <VehicleProvider>
            <App ref={navigation => setNavigator(navigation)} />
          </VehicleProvider>
        </LocationProvider>
      </AuthProvider>
    </SafeAreaProvider> 
  );
}
