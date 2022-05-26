import { Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { IUser } from '../../models/IUser';
import { EstilosGlobales, EstilosRegistro } from '../../styles/Estilos';
import { contexto } from '../../utils/AppContext';
import axios from 'axios';
import { _url } from '../../global/variables';
import { IAlumno } from '../../models/IAlumno';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/RootStackParam';
import DatePicker from 'react-native-date-picker'
import { CameraOptions, ImageLibraryOptions, ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { IGrupo } from '../../models/IGrupo';
import { Avatar } from "@rneui/themed";
import AvatarComponent from '../../components/AvatarComponent';
import { color } from '@rneui/base';


type Props = StackScreenProps<RootStackParamList, "Login">;
interface item {
  label: string,
  value: number
}


const RegistroAlumno = ({ route, navigation }: Props) => {

  const [date, setDate] = useState(new Date())

  const context = useContext(contexto)
  const [imagen, setImagen] = useState<string>(`${_url}imagenes/default.png`)
  const [uploading, setUploading] = useState<boolean>(false)
  const [itemGrupo, setItemGrupo] = useState<item[]>([])

  const alumnoInicial: IAlumno = {
    nombre: "",
    fecha_nacimiento: new Date(),
    correo: "",
    id_grupo: 1,
    contrasenia: ""
  }

  const selectedItem = {
    title: 'Selected item title',
    description: 'Secondary long descriptive text ...',
  };

  useEffect(() => {
    getGrupos()
  }, [])


  async function getGrupos() {
    axios.get(`${_url}grupos`)
      .then(res => {
        const grupos = res.data as IGrupo[];
        const ll: item[] = grupos.map((grup) => {
          return {
            label: `${grup.nombre} : Aula ${grup.aula}`,
            value: grup.id
          }
        }) as item[]
        setItemGrupo(ll)
      })
  }

  async function selectImage() {
    let options: ImageLibraryOptions = {
      mediaType: 'photo'
    };
    const result: ImagePickerResponse = await launchImageLibrary(options);
    if (result.assets) {
      const uri = result.assets[0].uri
      setImagen(result.assets[0].uri!)
    }
  };

  async function takePhoto() {
    let options: CameraOptions = {
      mediaType: 'photo'
    };
    const result = await launchCamera(options);
    if (result.assets) {
      const uri = result.assets[0].uri
      setImagen(result.assets[0].uri!)
    }
  }

  const registro = (alumno: IAlumno) => {
    alumno.fecha_nacimiento = date
    setUploading(true);
    const artTemp = new FormData();
    artTemp.append("datos", JSON.stringify(alumno));
    artTemp.append('fotoAlumno', {
      uri: imagen,
      type: 'image/jpeg',
      name: 'Imagen.jpg'
    });

    axios.post(_url + 'Alumnos', artTemp, {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
      .then((response) => {
        Alert.alert("Correcto", "Alumno registrado correctamente");
        setUploading(false);
        navigation.navigate("Login")
      })
      .catch((error) => {
        console.log("Error_ " + error);
      });
  }

  const validaciones = Yup.object({
    nombre: Yup.string().required("El nombre es requerido"),
    fecha_nacimiento: Yup.date().required("El nombre es requerido"),
    imagen: Yup.string(),
    correo: Yup.string().required("El correo es requerido"),
    id_grupo: Yup.number(),
    contrasenia: Yup.string().required("El contraseña es requerida")
  })




  return (
    <View style={EstilosGlobales.fondo}>
      <ScrollView>
        <Formik
          initialValues={alumnoInicial}
          onSubmit={async alumno => registro(alumno)}
          validationSchema={validaciones}>
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <Fragment>
              <AvatarComponent imagen={imagen} folder={() => selectImage()} camara={() => takePhoto()}></AvatarComponent>
              <Text style={[EstilosGlobales.textoDescrip, { marginLeft: 20 }]}>Nombre</Text>
              <TextInput style={EstilosGlobales.textinput}
                onChangeText={handleChange('nombre')}
                onBlur={() => setFieldTouched('nombre')}
                placeholder="Nombre"
              >
              </TextInput>
              {touched.nombre && errors.nombre &&
                <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.nombre}</Text>
              }


              <Text style={[EstilosGlobales.textoDescrip, { marginLeft: 20 }]}>Grupo</Text>


              <View style={EstilosGlobales.textinput}>

                <RNPickerSelect
                  onValueChange={(value) => values.id_grupo = value}
                  items={itemGrupo}
                  placeholder={{}}
                />
              </View>

              <Text style={[EstilosGlobales.textoDescrip, { marginLeft: 20 }]}>Fecha de nacimiento</Text>
              <DatePicker textColor='white' fadeToColor='none' style={{ alignSelf: "center", marginVertical: 10 }} timeZoneOffsetInMinutes={60} mode='date' date={date} onDateChange={setDate} />
              <Text style={[EstilosGlobales.textoDescrip, { marginLeft: 20 }]}>Correo</Text>
              <TextInput style={EstilosGlobales.textinput}
                onChangeText={handleChange('correo')}
                onBlur={() => setFieldTouched('correo')}
                placeholder="Correo"
              >
              </TextInput>
              {touched.correo && errors.correo &&
                <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.correo}</Text>
              }


              <Text style={[EstilosGlobales.textoDescrip, { marginLeft: 20 }]}>Contraseña</Text>
              <TextInput style={EstilosGlobales.textinput}
                onChangeText={handleChange('contrasenia')}
                onBlur={() => setFieldTouched('contrasenia')}
                placeholder="Contraseñia"
              >
              </TextInput>
              {touched.contrasenia && errors.contrasenia &&
                <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.contrasenia}</Text>
              }
              {/*               <Button title='Seleccionar una imagen' onPress={selectImage}></Button>
              <View style={{ marginVertical: 20 }}></View>
              <Button title='Tomar una foto' onPress={takePhoto}></Button>
              <View style={{ marginVertical: 20 }}></View>
              <Image style={{ alignSelf: 'center', height: 200, width: 200 }} source={{ uri: imagen }} />
              <View style={{ marginVertical: 20 }}></View> */}

              <Pressable onPress={handleSubmit} style={EstilosGlobales.boton}>
                <Text style={EstilosGlobales.textoBoton}>Registrar</Text>
              </Pressable>
            </Fragment>
          )}
        </Formik>
      </ScrollView>
    </View>
  )
}

export default RegistroAlumno

const styles = StyleSheet.create({})