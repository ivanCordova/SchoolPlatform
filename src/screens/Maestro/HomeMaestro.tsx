import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { EstilosGlobales } from '../../styles/Estilos'
import { contexto } from '../../utils/AppContext'

const HomeMaestro = () => {
  const context = useContext(contexto)

  return (
    <View>
      <Text>HomeMaestro</Text>
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

export default HomeMaestro

const styles = StyleSheet.create({})