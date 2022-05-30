import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { EstilosGlobales, EstilosMateria } from '../../styles/Estilos'
import MateriaComponent from '../../components/MateriaComponent'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'
import { _url } from '../../global/variables'
import { contexto } from '../../utils/AppContext'
import { IMateria } from '../../models/IMateria'
import MateriaComponentCopy from '../../components/MateriaComponent copy'

const OfertadasAlumno = () => {
  const context = useContext(contexto)
  const [materias, setMaterias] = useState<IMateria[]>([])

  useEffect(() => {
    getMaterias()
  }, [])


  async function getMaterias() {
    axios.get(`${_url}materias/alumno/${context.user.id}`)
      .then(res => {
        const materiasData = res.data as IMateria[];
        setMaterias(materiasData)
      })
  }


  return (
    <View style={EstilosGlobales.fondo}>
      <FlatList data={materias} renderItem={({item,index}) => (
          <MateriaComponent key={index} {... item}></MateriaComponent>
      )}>
      </FlatList>
    </View>
  )
}

export default OfertadasAlumno

const styles = StyleSheet.create({})