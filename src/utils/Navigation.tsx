import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParam';
import { NavigationContainer } from '@react-navigation/native';
import Principal from '../screens/Principal';
import Login from '../screens/Login';
import { _isSignedIn, _userRol } from '../global/variables';
import HomeAlumno from '../screens/Alumno/HomeAlumno';
import HomeMaestro from '../screens/Maestro/HomeMaestro';
import { contexto } from './AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '../models/IUser';

const Navigation = () => {
    const Stack = createStackNavigator<RootStackParamList>();
    const context = useContext(contexto)

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@usuario')
          if (jsonValue != null) {
            const ll = JSON.parse(jsonValue) as IUser
            context.updateUser(ll)
          }
        } catch(e) {
          // error reading value
        }
      }
      
      useEffect(() => {
        getData()
      }, [])
  
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {context.user.isLogin == false ? (
                    // No token found, user isn't signed in
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            title: 'Login',
                            // When logging out, a pop animation feels intuitive
                            // You can remove this if you want the default 'push' animation
                            animationTypeForReplace: _isSignedIn ? 'pop' : 'push',
                        }}
                    />
                ) : (
                    // User is signed in
                    (
                        context.user.rol === "alumno" ? (
                            <Stack.Screen name="HomeAlumno" component={HomeAlumno} />
                        ) : (
                            <Stack.Screen name="HomeMaestro" component={HomeMaestro} />

                        )
                    )
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );

    /*     return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Principal'>
                    <Stack.Screen name='Login' component={Login}></Stack.Screen>
                    <Stack.Screen name='Principal' component={Principal}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        ) */
}

export default Navigation
