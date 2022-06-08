import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { IAlumno } from '../models/IAlumno'
import { Avatar } from '@rneui/base'
import { _url } from '../global/variables'
import { EstilosGlobales, EstilosNavBar } from '../styles/Estilos'
import Icon from 'react-native-vector-icons/FontAwesome';
import { contexto } from '../utils/AppContext'


const NavBarAlumno = (alumno: IAlumno) => {
  const context = useContext(contexto)

    return (
        <View style={EstilosNavBar.container}>
            <View style={{ marginLeft: 10 }}>
                <Avatar size={55} rounded source={{ uri: `${_url}imagenes/${alumno.imagen}` }} containerStyle={{ backgroundColor: '#eb1561' }} />
            </View>
            <Text style={[EstilosGlobales.textoDescrip, { fontSize: 26 }]}>{alumno.nombre}</Text>
            <Pressable onPress={() => context.logout({
                correo: "",
                contrasenia: "",
                isLogin: false
            })}>
                <Icon style={{ marginRight: 10 }} name="sign-out" size={35} color="white" />
            </Pressable>
        </View>
    )
}

export default NavBarAlumno

const styles = StyleSheet.create({})