import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/authScreens/Login';
import ForgotPassword from '../screens/authScreens/ForgotPassword';
import Signup from '../screens/authScreens/Signup';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerTitle: 'Reset Password', tabBarLabel: 'Home'}}
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
