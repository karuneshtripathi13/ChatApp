import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login'
import Register from './screens/Register'
import Home from "./screens/Home"
import AddChat from "./screens/AddChat"
import Chat from "./screens/Chat"

const Stack=createStackNavigator();

const globalScreenOptions={
  headerStyle:{backgroundColor:"#254636"},
  headerTitleStyle:{color:"white"},
  headerTintColor:"white",
  gestureResponseDistance: {horizontal: 80},
  headerBackTitle:"back"
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={Login} options={{ gestureEnabled: true }}/>
        <Stack.Screen name="Register" component={Register} options={{ gestureEnabled: true }}/>
        <Stack.Screen name="Home" component={Home} options={{ gestureEnabled: true }}/>
        <Stack.Screen name="AddChat" component={AddChat} options={{ gestureEnabled: true }}/>
        <Stack.Screen name="Chat" component={Chat} options={{ gestureEnabled: true }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
