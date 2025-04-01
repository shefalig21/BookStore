import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from '../Screens/LandingScreen';
import Wishlist from '../Screens/WishList';
import MyBag from '../Screens/MyBag';
import SearchScreen from '../Screens/SearchScreen';
import OrderScreen from '../Screens/OrderScreen';
import LoginScreen from '../Auth/LoginScreen';
import SignUpScreen from '../Auth/SignUpScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyBag"
          component={MyBag}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Wishlist"
          component={Wishlist}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation





















