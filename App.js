import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Explore from './src/page/Explore';
import Home from './src/page/Home';
import Search from './src/page/Search';
import Subscribe from './src/page/Subscribe';
import VideoPlayer from './src/page/VideoPlayer';
import { Entypo, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {reducer} from './src/redux/Reducer'

const store = createStore(reducer)
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'explore' : 'explore';
          } else if (route.name === "Subscribe") {
            iconName = focused ? 'subscriptions' : 'subscriptions'
          }

          // You can return any component that you like here!
          return <MaterialIcons style={{ marginBottom: -5 }} name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Subscribe" component={Subscribe} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainApp">
          <Stack.Screen name="MainApp" component={MainApp} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Explore" component={Explore} />
          <Stack.Screen name="Search" component={Search} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Subscribe" component={Subscribe} />
          <Stack.Screen name="Video Player" component={VideoPlayer} 
          options={{
            headerShown: false
          }}  />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>


  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
