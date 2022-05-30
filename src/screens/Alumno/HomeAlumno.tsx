import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { contexto } from '../../utils/AppContext'
import { EstilosGlobales } from '../../styles/Estilos'
import { _url } from '../../global/variables'
import { ScrollView } from 'react-native-gesture-handler'

const HomeAlumno = () => {
  const context = useContext(contexto)

  return (
    <View style={EstilosGlobales.fondo}>
      <ScrollView>
        <Text>Nombre: {context.user.datos?.nombre}</Text>
        <Text>Nombre: {context.user.rol}</Text>
        <Image style={{ alignSelf: 'center', height: 200, width: 200 }} source={{ uri: `${_url}imagenes/${context.user.datos?.imagen}` }} />
        <Pressable onPress={() => context.logout({
          correo: "",
          contrasenia: "",
          isLogin: false
        })} style={EstilosGlobales.boton}>
          <Text style={EstilosGlobales.textoBoton}>logout</Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}

export default HomeAlumno

const styles = StyleSheet.create({})