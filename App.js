import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Constants from 'expo-constants';

import AdminScreen from './pages/Admin';
import LandingScreen from './pages/Landing';
import NewActivationScreen from './pages/NewActivation';
import ScanningScreen from './pages/Scanning';
import StartupScreen from './pages/Startup';
import ProfilePageScreen from './pages/ProfilePage';
import EmailScansScreen from './pages/EmailScans';
import ActionBarImage from './pages/components/ActionBarImage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartupScreen">
        <Stack.Screen
          name="StartupScreen"
          component={StartupScreen}
          options={{
            title: "Conference Connect",
            headerStyle: {
              backgroundColor: '#2d99f5',              
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerLeft: () => <ActionBarImage/>,
          }}
          />
          <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{
            title: "Conference Connect",
            headerStyle: {
              backgroundColor: '#2d99f5',              
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
          />
          <Stack.Screen
          name="AdminScreen"
          component={AdminScreen}
          options={{
            title: "Administration Actions",
            headerStyle: {
              backgroundColor: '#2d99f5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
          <Stack.Screen
          name="NewActivationScreen"
          component={NewActivationScreen}
          options={{
            title: "Show List",
            headerStyle: {
              backgroundColor: '#2d99f5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
          <Stack.Screen
          name="ScanningScreen"
          component={ScanningScreen}
          options={{
            title: "Scanning",
            headerStyle: {
              backgroundColor: '#2d99f5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
          <Stack.Screen
          name="ProfilePageScreen"
          component={ProfilePageScreen}
          options={{
            title: "Demographics",
            headerStyle: {
              backgroundColor: '#2d99f5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => <ActionBarImage/>,
          }}
          />          
          <Stack.Screen
          name="EmailScansScreen"
          component={EmailScansScreen}
          options={{
            title: "Email Scans",
            headerStyle: {
              backgroundColor: '#2d99f5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;