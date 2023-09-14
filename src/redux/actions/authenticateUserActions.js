import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ls } from "../../utils/ls";
import server from "../../utils/axios";

const authenticate = createAsyncThunk('authenticate', async () => {

    const token = ls.getText('token')

    let reducerData = {
        user: '',
        token: '',
        status: 'offline'
    }

    if (token) {

        console.log("Authenticating Token...")

        const { data } = await server.get('/auth/token', {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        reducerData = {
            user: data.userData,
            status: 'online'
        }
    } else {
        console.log("No token found in local storage!")
    }

    // console.log(token);
    // console.log("AuthUserAction authenticate: ");
    // console.log(reducerData);

    return {
        payload: reducerData
    }
})

const login = createAction('login', (credentials) => {
    const reducerData = {
        user: credentials.userData,
        token: credentials.token,
        status: 'online'
    }

    ls.set('token', credentials.token)

    return {
        payload: reducerData
    }
})

const logout = createAction('logout', () => {
    const reducerData = {
        user: '',
        token: '',
        status: 'offline'
    }
    return {
        payload: reducerData
    }
})

const register = createAction('register', (credentials) => {
    const reducerData = {
        user: credentials.userData,
        token: credentials.token,
        status: 'online'
    }

    ls.set('token', credentials.token)

    return {
        payload: reducerData
    }
})

export {
    authenticate, login, logout, register
}