import { StyleSheet } from 'react-native'
export const EstilosGlobales = StyleSheet.create({
    contenedor: {
        flex: 1
    },
    textinput: {
        marginVertical: 15,
        borderWidth: 2,
        borderColor: 'black',
        marginHorizontal: 15,
        borderRadius: 15,
        paddingLeft: 20,
        fontSize: 15,
        backgroundColor: 'white'
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    boton: {
        width: 100,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#D83F1E',
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2
    },
    textoBoton: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
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
    }
})

export const EstilosLogin = StyleSheet.create({
    fondo: {
        backgroundColor: "#025928",
        width: "100%",
        height: "100%"
    }
})