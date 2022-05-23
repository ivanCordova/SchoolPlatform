import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useReducer, useState } from 'react'
import { IUser } from '../models/IUser'
import { OperacionesUsuario, reducerUsuario } from './ReducerUsuario'
import AsyncStorage from '@react-native-async-storage/async-storage';

let valorInicial: IUser = {
  correo: "",
  contrasenia: "",
  isLogin: false
}


interface ContextProps {
  user: IUser,
  login: (usuario: IUser) => void,
  logout: (usuario: IUser) => void,
  updateUser: (usuario: IUser) => void
}

interface Props {
  children: JSX.Element
}

export const contexto = createContext<ContextProps>({} as ContextProps)

const AppContext = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducerUsuario, valorInicial)

  const Login = (usuario: IUser) => {
    dispatch({ type: OperacionesUsuario.Login, payload: usuario })
  }

  const Logout = (usuario: IUser) => {
    dispatch({ type: OperacionesUsuario.Logout, payload: usuario })
  }

  const updateUser = (usuario: IUser) => {
    dispatch({ type: OperacionesUsuario.Logout, payload: usuario })
  }


  return (
    <contexto.Provider value={{
      user: state,
      login: Login,
      logout: Logout,
      updateUser
    }}>
      {children}
    </contexto.Provider>
  )
}

export default AppContext

const styles = StyleSheet.create({})