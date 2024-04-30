import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductListingScreen from '../screens/ProductListingScreen';
import ProfileScreen from '../screens/ProfileScreen'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen'; // RegisterScreen eklendi
import useAuth from '../hooks/useAuth';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const {user} = useAuth();
  if ( user) {
    return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Products"
          component={ProductListingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    )

  }else {
        return (
          <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
        )

  }
  
};

export default AppNavigator;
