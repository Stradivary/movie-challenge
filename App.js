import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GlobalContextProvider from './src/context/global.js';
import {default as Home} from './src/screens/home';
import {default as OnBoarding} from './src/screens/onBoarding';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchMovie from './src/screens/searchMovie/index.js';
import Favorites from './src/screens/favorites/index.js';
import { RouteOptions } from './src/configs/routeConfig/routeOptions';
import TabBarBottom from './src/modules/TabBarBottom';
import { ThemeProvider } from "react-native-magnus";
import { theme } from './src/configs/themeOptions';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DetailMovie from './src/screens/detailMovie/index.js';

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeTabsMenu= () => {
    return (
      <Tab.Navigator  tabBar={(props)=><TabBarBottom {...props} />}>
        <Tab.Screen options={RouteOptions.home} name="Home" component={Home} />
        <Tab.Screen options={RouteOptions.searchMoview} name="SearchMovie" component={SearchMovie} />
        <Tab.Screen options={RouteOptions.favorites} name="Favorites" component={Favorites} />
      </Tab.Navigator>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GlobalContextProvider>
        <ThemeProvider theme={theme}>
        <NavigationContainer >
          <Stack.Navigator>
            {/* <Stack.Screen
              name="OnBoarding"
              options={RouteOptions.onBoarding}
              component={OnBoarding}
            /> */}
            <Stack.Screen
              name="DetailMovie"
              options={(props)=>RouteOptions.detailMovie(props)}
              component={DetailMovie}
            />
            <Stack.Screen
              name="HomeMenu"
              options={RouteOptions.homeMenu}
              component={HomeTabsMenu}
            />
          
          </Stack.Navigator>
        </NavigationContainer>
        </ThemeProvider>
      </GlobalContextProvider>
    </GestureHandlerRootView>
  );
}
