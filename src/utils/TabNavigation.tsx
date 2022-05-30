import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAlumno from '../screens/Alumno/HomeAlumno';
import { RootStackParamList } from './RootStackParam';
import TareasAlumno from '../screens/Alumno/TareasAlumno';
import Icon from 'react-native-vector-icons/FontAwesome';
import OfertadasAlumno from '../screens/Alumno/OfertadasAlumno';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName='HomeAlumno' screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: string = "";
        switch (route.name) {
          case 'HomeAlumno':
            iconName = focused ? 'user' : 'user-o';
            break;
          case 'TareasAlumno':
            iconName = focused ? 'address-book' : 'address-book-o';
            break;
          case "MateriasOfertadas":
            iconName = focused ? 'pencil-square' : 'pencil-square-o';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} ></Icon>
      },
      tabBarActiveTintColor: 'green'
    })}>
      <Tab.Screen name='TareasAlumno' component={TareasAlumno}></Tab.Screen>
      <Tab.Screen name='HomeAlumno' component={HomeAlumno}></Tab.Screen>
      <Tab.Screen name='MateriasOfertadas' component={OfertadasAlumno} options={{unmountOnBlur: true}}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})