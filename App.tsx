import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Navigation from './src/utils/Navigation'
import AppContext, { contexto } from './src/utils/AppContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from './src/models/IUser';

const App = () => {

  return (
    <AppContext>
      <Navigation></Navigation>
    </AppContext>
  )
}

export default App

const styles = StyleSheet.create({})