import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import CashOptions from '../screens/CashOptions';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MainTabRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeTab'
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({ color, size}) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = 'home-outline';
          } else if(route.name === 'CashTab') {
            iconName = 'cash-outline';
          };

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#810AD0',
        tabBarInactiveTintColor: '#AAA',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          opacity: 0.9,
          marginBottom: 20,
          position: 'absolute'
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackRoutes} />
      <Tab.Screen name="CashTab" component={CashOptions} />
    </Tab.Navigator>
  );
};

const HomeStackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName='MainProfile'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );
};

const ProfileStackRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName='MainProfile'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainProfile" component={Profile} />
    </Stack.Navigator>
  );
};

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Main'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={MainTabRoutes} />
        <Stack.Screen name="Profile" component={ProfileStackRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;