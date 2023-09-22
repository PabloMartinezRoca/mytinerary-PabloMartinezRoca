import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ls } from "../../utils/ls";
import server from "../../utils/axios";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

const authenticate = createAsyncThunk('authenticate', async (pathname) => {

    const token = ls.getText('token')

    let reducerData = {
        user: {},
        token: '',
        status: 'offline'
    }

    if (token) {

        // console.log("Authenticating Token... in", pathname)

        try {
            const { data } = await server.get('/auth/token', {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            reducerData = {
                user: data.userData,
                status: 'online'
            }

            const msg = pathname === '/logOut' ? ('We hope to see you soon. Bye ' + data.userData.firstName + '!') : ('Welcome back ' + data.userData.firstName + '!')
            toast(msg, {
                autoClose: 2000,
                delay: 1500
            });
        } catch (err) {
            console.log(err)
        }

    } else {
        console.log("No token found in local storage at ", pathname, "!")
    }

    // console.log(token);
    // console.log("AuthUserAction authenticate: ");
    // console.log(reducerData);

    return {
        payload: reducerData
    }
})

const login = createAction('login', (credentials) => {

    let reducerData = {
        user: {},
        token: '',
        status: 'offline'
    }

    if ( Object.keys(credentials).length === 0 ) {

        toast.error(`User not found! Please, register!`, {
            autoClose: 2000,
        });
    } else {
        reducerData = {
            user: credentials.userData,
            token: credentials.token,
            status: 'online'
        }

        ls.set('token', credentials.token)

        toast(`Welcome back ${reducerData.user.firstName}!`, {
            autoClose: 1500,
        });
    }
    return {
        payload: reducerData
    }
})

const logout = createAsyncThunk('logout', async () => {

    const token = ls.getText('token')

    if (token) {

        console.log("Removing token... logging out...")

        try {
            const { data } = await server.get('/auth/token', {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            const msg = 'We hope to see you soon. Bye ' + data.userData.firstName + '!'
            toast(msg, {
                autoClose: 1500,
            });
        } catch (err) {
            console.log(err)
        }
    }

    ls.rm('token')

    return {
        payload: {}
    }

})

const register = createAction('register', (credentials) => {

    const reducerData = {
        user: credentials.userData,
        token: credentials.token,
        status: 'online'
    }

    console.log(reducerData.user)
    ls.set('token', credentials.token)

    const msg = 'Your ' + (reducerData.user.googleAccount ? 'Google' : '') + ' account has been successfully created!'

    toast(`Welcome ${reducerData.user.firstName}!`, {
        autoClose: 4000,
    });
    toast(msg, {
        autoClose: 4000,
    });

    return {
        payload: reducerData
    }
})

export {
    authenticate, login, logout, register
}