import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { _url } from '../global/variables'
import { IMateria } from '../models/IMateria'
import { EstilosGlobales, EstilosMateriaHome } from '../styles/Estilos'
import Icon from 'react-native-vector-icons/FontAwesome';


const MateriasHome = (materia: IMateria) => {
  return (
    <Pressable onPress={materia.info}>
      <View style={EstilosMateriaHome.container}>
        <View style={EstilosMateriaHome.containerImagen}>
          <Image style={EstilosMateriaHome.imagen} source={{ uri: `${_url}imagenes/${materia.imagen}` }} />
        </View>
        <View style={EstilosMateriaHome.containerInfo}>
            <Icon style={{marginLeft: 20}} name="book" size={45} color="white" />
            <Text style={[EstilosGlobales.textoDescrip,{marginRight: 20}]}>{materia.nombre}</Text>
            <Icon style={{marginRight: 10}} name="angle-right" size={50} color="white" />
        </View>
      </View>
    </Pressable>

  )
}

export default MateriasHome

const styles = StyleSheet.create({})