import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment, useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParam';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import { _isSignedIn, _userRol } from '../global/variables';
import HomeAlumno from '../screens/Alumno/HomeAlumno';
import HomeMaestro from '../screens/Maestro/HomeMaestro';
import { contexto } from './AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '../models/IUser';
import RegistroAlumno from '../screens/Alumno/RegistroAlumno';
import TipoRegistro from '../screens/TipoRegistro';
import RegistroMaestro from '../screens/Maestro/RegistroMaestro';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TareasAlumno from '../screens/Alumno/TareasAlumno';
import TabNavigation from './TabNavigation';

const Tab = createBottomTabNavigator();

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
        } catch (e) {
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
                    <Fragment>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{
                                headerShown: false
                            }}
                        /*                             options={{
                                                        title: 'Login',
                                                        // When logging out, a pop animation feels intuitive
                                                        // You can remove this if you want the default 'push' animation
                                                        animationTypeForReplace: _isSignedIn ? 'pop' : 'push',
                                                    }} */
                        />
                        <Stack.Screen name='RegistroAlumno' component={RegistroAlumno}
                            options={{
                                headerShown: false
                            }}
                        ></Stack.Screen>
                        <Stack.Screen name='TipoRegistro' component={TipoRegistro}
                            options={{
                                headerShown: false
                            }}
                        ></Stack.Screen>
                        <Stack.Screen name='RegistroMaestro' component={RegistroMaestro}
                            options={{
                                headerShown: false
                            }}
                        ></Stack.Screen>
                    </Fragment>
                ) : (
                    // User is signed in
                    (
                        context.user.rol === "alumno" ? (
                            <Stack.Screen 
                            options={{
                                headerShown: false
                            }}
                            name='TabNavigation' component={TabNavigation}></Stack.Screen>
                        ) : (
                            <Stack.Screen name="HomeMaestro" component={HomeMaestro} />
    
                        )
                    )
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default Navigation
