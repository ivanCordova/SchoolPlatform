import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { contexto } from '../../utils/AppContext'
import { EstilosGlobales } from '../../styles/Estilos'
import { _url } from '../../global/variables'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import MateriasHome from '../../components/MateriasHome'
import { IMateria } from '../../models/IMateria'
import axios from 'axios'
import NavBarAlumno from '../../components/NavBarAlumno'
import { IAlumno } from '../../models/IAlumno'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../utils/RootStackParam'


type Props = StackScreenProps<RootStackParamList, "HomeAlumno">;

const HomeAlumno = ({ route, navigation }: Props) => {
  const context = useContext(contexto)
  const [materias, setMaterias] = useState<IMateria[]>([])

  useEffect(() => {
    getMaterias()
  }, [])

  async function getMaterias() {
    axios.get(`${_url}Alumnos/${context.user.id}?extra=all`)
      .then(res => {
        const materiasAlumno = res.data[0].materia as IMateria[]
        setMaterias(materiasAlumno)
      })
  }

  return (
    <View style={EstilosGlobales.fondo}>
      <NavBarAlumno {...(context.user.datos as IAlumno)}></NavBarAlumno>
        <Text style={[EstilosGlobales.textoDescrip,{marginLeft: 15, marginVertical: 10}]}>Mis materias</Text>
        <FlatList data={materias} renderItem={({item,index}) => (
            <MateriasHome key={index} {... item} info={() => navigation.navigate("TareasMateria")} ></MateriasHome>
        )}></FlatList>
    </View>
  )
}

export default HomeAlumno

const styles = StyleSheet.create({})