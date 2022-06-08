import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { EstilosGlobales, EstilosMateria } from '../../styles/Estilos'
import MateriaComponent from '../../components/MateriaComponent'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'
import { _url } from '../../global/variables'
import { contexto } from '../../utils/AppContext'
import { IMateria } from '../../models/IMateria'
import Icon from 'react-native-vector-icons/FontAwesome';




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
      {materias.length != 0 ? (
        <Fragment>
          <FlatList data={materias} renderItem={({ item, index }) => (
            <MateriaComponent key={index} {...item}></MateriaComponent>
          )}>
          </FlatList>
        </Fragment>
      ) : (
        <Fragment>
          <View style={{alignItems: "center", height: "100%", width: "100%", justifyContent: "center"}}>
            <Icon style={{ marginRight: 10 }} name="hourglass-end" size={150} color="white" />
            <Text style={[EstilosGlobales.textoDescrip,{fontSize: 80}]}>Sin materias</Text>
          </View>
        </Fragment>
      )}

    </View>
  )
}

export default OfertadasAlumno

const styles = StyleSheet.create({})