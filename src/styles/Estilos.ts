import { StyleSheet } from 'react-native'
export const EstilosGlobales = StyleSheet.create({
    fondo: {
        backgroundColor: "#025928",
        width: "100%",
        height: "100%",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 15
    },
    contenedor: {
        flex: 1
    },
    textinput: {
        marginVertical: 15,
        borderWidth: 2,
        borderColor: 'white',
        marginHorizontal: 15,
        borderRadius: 15,
        paddingLeft: 20,
        fontSize: 20,
        backgroundColor: '#037014',
        fontFamily: "Schoolbell-Regular",
        color: "white"
    },
    textinputError: {
        marginVertical: 15,
        borderWidth: 2,
        borderColor: 'white',
        marginHorizontal: 15,
        borderRadius: 15,
        paddingLeft: 20,
        fontSize: 20,
        backgroundColor: 'red',
        fontFamily: "Schoolbell-Regular",
        color: "white"
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    boton: {
        height: 50,
        borderRadius: 10,
        backgroundColor: '#03A64A',
        borderColor: '#01401C',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,
        width: "80%", marginTop: 30, marginBottom: 15, alignSelf: "center"
    },
    textoBoton: {
        fontSize: 25,
        color: 'white',
        fontFamily: "Schoolbell-Regular"
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
    },
    separador: {
        borderBottomColor: '#D5D8DC',
        width: '90%',
        borderBottomWidth: 1,
        alignSelf: 'center'
    },
    textoDescrip: {
        fontSize: 30,
        fontFamily: "Schoolbell-Regular",
        color: "white"
    },
    selectRol: {
        backgroundColor: "#025928",
        marginBottom: 20,
        fontFamily: "Schoolbell-Regular"
    }
})

export const EstilosLogin = StyleSheet.create({
    titulo: {
        fontSize: 80,
        fontFamily: "Schoolbell-Regular",
        alignSelf: "center",
        marginVertical: 80,
        color: "white",
        textAlign: "center"
    }
})

export const EstilosRegistro = StyleSheet.create({
    selectorGrupo: {
        borderColor: "white",
        color: "white"
    }
})

export const EstilosTipo = StyleSheet.create({
    titulo:{
        fontSize: 40,
        fontFamily: "Schoolbell-Regular",
        alignSelf: "center",
        marginVertical: 30,
        color: "white",
        textAlign: "center"
    },
    textoTipo:{
        fontSize: 50,
        fontFamily: "Schoolbell-Regular",
        alignSelf: "center",
        marginVertical: 30,
        color: "white",
        textAlign: "center"
    },
    boton: {
        height: "25%",
        borderRadius: 10,
        backgroundColor: '#03A64A',
        borderColor: '#01401C',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,
        width: "80%", marginTop: 30, marginBottom: 15, alignSelf: "center"
    }
})


export const EstilosMateria = StyleSheet.create({
    container: {
      backgroundColor: "#03A64A",
      width: "95%",
      height: 250,
      margin: 10,
      borderRadius: 15,
      flexDirection: "row"
    },
    imagenContainer: {
      height: "100%",
      width: "50%",
      justifyContent: "center",
      alignItems: "center"
    },
    imagen: {
      height: 230,
      width: 170,
      borderRadius: 10,
    },infoContainer: {
      height: "100%",
      width: "50%",
      justifyContent: "center",
      alignItems: "center"
    },
    botonAdd:{
      backgroundColor: "white",
      height: 50,
      width: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
      marginTop: 20
  }
  })


export const EstilosMateriaHome = StyleSheet.create({
    container:{
        height: 100,
        width: 100,
        backgroundColor: "red"
    }
})
