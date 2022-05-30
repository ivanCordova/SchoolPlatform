import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { EstilosGlobales, EstilosMateria } from '../styles/Estilos';
import { Image } from '@rneui/base';
import { _url } from '../global/variables';
import { IMateria } from '../models/IMateria';
import axios from 'axios';
import { contexto } from '../utils/AppContext';

const MateriaComponent = (materia: IMateria) => {
  const context = useContext(contexto)


  const addMateria = (materia: IMateria) => {

    axios.post(_url + 'alumno_materia', {
      calificacion: 0.00,
      id_alumno: context.user.id,
      id_materia: materia.id
    })
      .then((response) => {
        Alert.alert("Correcto", "Alumno registrado correctamente");
      })
      .catch((error) => {
        console.log("Error_ " + error);
      });
  }
  return (
    <View style={EstilosMateria.container}>
      <View style={EstilosMateria.imagenContainer}>
        <Image style={EstilosMateria.imagen} source={{ uri: `${_url}imagenes/materias.jpg` }} />
      </View>
      <View style={EstilosMateria.infoContainer}>
        <Text style={[EstilosGlobales.textoDescrip, { marginVertical: 20 }]}>{materia.nombre}</Text>
        <Text style={[EstilosGlobales.textoDescrip, { fontSize: 22, alignSelf: "center" }]}>{materia.descripcion}</Text>
        <Pressable onPress={() => addMateria(materia)} style={EstilosMateria.botonAdd}>
          <Icon name="plus" size={30} color="#03A64A" />
        </Pressable>
      </View>

    </View>
  )
}

export default MateriaComponent

