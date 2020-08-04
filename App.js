import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/page/Home';
import Explore from './src/page/Explore';
import Search from './src/page/Search';
import Subscribe from './src/page/Subscribe';
import VideoPlayer from './src/page/VideoPlayer';

const Stack = createStackNavigator()


const App =() =>{
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={Home} options={{
         headerShown: false
       }}/>
       <Stack.Screen name="Explore" component={Explore}/>
       <Stack.Screen name="Search" component={Search}/>
       <Stack.Screen name="Subscribe" component={Subscribe}/>
       <Stack.Screen name="Video Player" component={VideoPlayer}/>
     </Stack.Navigator>
    </NavigationContainer>
  
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
