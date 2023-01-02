import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { useSafeAreaInsets } from'react-native-safe-area-context';

import { Theme, ThemeConfig } from './src/assets/styles';

import { HomeScreen } from './src/components/screens';
import { Text, TouchableOpacity } from 'react-native';
import { DancaCadeira } from './src/components/screens/games';

const Stack = createNativeStackNavigator();

export default class App extends React.Component{
  render() {
    return (
      <NavigationContainer>
        <StatusBar 
          translucent={true} 
          backgroundColor={Theme.Colors.Amethyst} 
          style={ThemeConfig.AppStyleConfig.statusbarStyle} 
        />
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="DancaCadeira" 
            component={DancaCadeira} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// ***>>==== Made by Daniel =====<<***
