import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { IUser } from '../models/IUser';
import { EstilosGlobales } from '../styles/Estilos';
import { contexto } from '../utils/AppContext';
import axios from 'axios';
import { _url } from '../global/variables';
import { ButtonGroup } from '@rneui/themed'
import { IAlumno } from '../models/IAlumno';
import { IMaestro } from '../models/IMaestro';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {

  const [rol, setRol] = useState(0)

  const context = useContext(contexto)
  const userInicial: IUser = {
    correo: "",
    contrasenia: "",
    isLogin: false
  }

  const login = (user: IUser) => {
    (rol == 0)
      ?
      (axios.post(`${_url}login?tp=alumno`, {
        correo: user.correo,
        contrasenia: user.contrasenia
      }).then((response) => {
        console.log(response.data)
        user.id = response.data.id
        user.rol = "alumno"
        user.isLogin = true
        user.datos = response.data as IAlumno
        context.login(user)
      }).catch((error) => {
        console.log("Error_ " + error);
      }))
      :
      (axios.post(`${_url}login?tp=maestro`, {
        correo: user.correo,
        contrasenia: user.contrasenia
      }).then((response) => {
        console.log(response.data)
        user.id = response.data.id
        user.rol = "maestro"
        user.isLogin = true
        user.datos = response.data as IMaestro
        context.login(user)
      }).catch((error) => {
        console.log("Error_ " + error);
      }))
  }

  const validaciones = Yup.object({
    correo: Yup.string().required("El correo es requerido"),
    contrasenia: Yup.string().required("La contraseñia es requerida")
  })





  return (
    <View>
      <Formik
        initialValues={userInicial}
        onSubmit={async user => login(user)}
        validationSchema={validaciones}>
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <Fragment>
            <Text>Correo</Text>
            <TextInput style={EstilosGlobales.textinput}
              onChangeText={handleChange('correo')}
              onBlur={() => setFieldTouched('correo')}
              placeholder="Correo"
            >
            </TextInput>
            {touched.correo && errors.correo &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.correo}</Text>
            }

            <Text>Contraseña</Text>
            <TextInput style={EstilosGlobales.textinput}
              onChangeText={handleChange('contrasenia')}
              onBlur={() => setFieldTouched('contrasenia')}
              placeholder="Contraseñia"
            >
            </TextInput>
            {touched.contrasenia && errors.contrasenia &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.contrasenia}</Text>
            }

            <ButtonGroup
              buttons={['ALUMNO', 'MAESTRO']}
              selectedIndex={rol}
              onPress={(value) => {
                setRol(value)
              }}
              containerStyle={{ marginBottom: 20 }}
            />

            <Pressable onPress={handleSubmit} style={EstilosGlobales.boton}>
              <Text style={EstilosGlobales.textoBoton}>Agregar</Text>
            </Pressable>
          </Fragment>
        )}
      </Formik>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})