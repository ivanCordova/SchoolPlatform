import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EstilosGlobales, EstilosTipo } from '../styles/Estilos'
import { Image } from '@rneui/base'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/RootStackParam';

type Props = StackScreenProps<RootStackParamList, "Login">;

const TipoRegistro = ({ route, navigation }: Props) => {
  return (
    <View style={EstilosGlobales.fondo}>
      <Text style={EstilosTipo.titulo}>School Platform</Text>
      <Text style={EstilosTipo.textoTipo}>Soy ......</Text>
      <Pressable onPress={() => navigation.navigate("RegistroAlumno")} style={EstilosTipo.boton}>
        <Image style={{ alignSelf: 'center', height: 100, width: 100 }} source={require("../assets/img/alumno.png")} />
        <Text style={[EstilosGlobales.textoBoton, {marginTop: 10}]}>Alumno</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("RegistroMaestro")} style={EstilosTipo.boton}>
        <Image style={{ alignSelf: 'center', height: 100, width: 100 }} source={require("../assets/img/maestro.png")} />
        <Text style={[EstilosGlobales.textoBoton, {marginTop: 10}]}>Maestro</Text>
      </Pressable>
    </View>
  )
}

export default TipoRegistro

const styles = StyleSheet.create({})