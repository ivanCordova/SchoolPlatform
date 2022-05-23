import { IUser } from "../models/IUser"
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value: IUser) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@usuario', jsonValue)
    } catch (e) {
        // saving error
    }
}

export enum OperacionesUsuario {
    Login = "LOGIN",
    Logout = "LOGOUT",
    UpdateUser = "UPDATE"
}

type Action = {
    type: OperacionesUsuario,
    payload: IUser
}

export function reducerUsuario(state: IUser, action: Action): IUser {
    const { type, payload } = action;
    switch (type) {
        case OperacionesUsuario.Login: {
            payload.contrasenia = ""
            storeData(payload)
            return payload
        }
        case OperacionesUsuario.Logout: {
            storeData(payload)
            return payload
        }
        case OperacionesUsuario.UpdateUser: {
            return payload
        }
        default:
            return state
    }
}