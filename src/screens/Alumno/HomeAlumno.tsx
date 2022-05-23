import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { contexto } from '../../utils/AppContext'
import { EstilosGlobales } from '../../styles/Estilos'

const HomeAlumno = () => {
  const context = useContext(contexto)

  return (
    <View>
      <Text>Nombre: {context.user.datos?.nombre}</Text>
      <Text>Nombre: {context.user.rol}</Text>
      <Pressable onPress={() => context.logout({
        correo: "",
        contrasenia: "",
        isLogin: false
      })} style={EstilosGlobales.boton}>
        <Text style={EstilosGlobales.textoBoton}>logout</Text>
      </Pressable>
    </View>
  )
}

export default HomeAlumno

const styles = StyleSheet.create({})