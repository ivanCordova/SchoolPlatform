import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'

interface Props {
    folder(): void
    camara(): void
    imagen: string
}

const AvatarComponent = (props: Props) => {
    return (
        <View style={styles.container}>
            <Avatar
                size={150}
                rounded
                source={{ uri: props.imagen }}
                containerStyle={{ backgroundColor: '#eb1561' }}
            />
            <Avatar
                size={45}
                rounded
                icon={{ name: 'camera' }}
                containerStyle={styles.camara}
                onPress={() => props.camara()}
            />
            <Avatar
                size={45}
                rounded
                icon={{ name: 'folder' }}
                containerStyle={styles.carpeta}
                onPress={() => props.folder()}
            />
        </View>
    )
}

export default AvatarComponent

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical: 20
    },
    camara: {
        backgroundColor: '#00a7f7',
        position: "absolute",
        top: "70%",
        left: "30%"
    },
    carpeta: {
        backgroundColor: '#00a7f7',
        position: "absolute",
        top: "70%",
        left: "58%"
    }
})