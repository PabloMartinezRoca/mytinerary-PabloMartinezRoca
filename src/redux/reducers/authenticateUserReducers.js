import { createReducer } from "@reduxjs/toolkit";
import { authenticate, login, logout, register } from "../actions/authenticateUserActions";

const initialState = {
    user: {},
    token: null,
    status: 'offline'
}

const authenticateUserReducers = createReducer( initialState,
    (builder) => builder
    .addCase(authenticate.fulfilled, ( state, action ) => {

        console.log("Authentication Type:", action.payload)
        
        const newState = { 
            ...state, 
            ...action.payload.payload // TO DO : por qué tengo que hacer doble payload acá?
        }

        // console.log(newState)
        
        return newState
    })
    .addCase(login, ( state, action ) => {

        const newState = { 
            ...state, 
            ...action.payload 
        }
        return newState
    })
    .addCase(logout, () => {

        return initialState
    })
    .addCase(register, ( state, action ) => {

        const newState = { 
            ...state, 
            ...action.payload 
        }

        // console.log(newState)
        
        return newState
    })
)

export default authenticateUserReducers