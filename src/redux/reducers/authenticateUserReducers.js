import { createReducer } from "@reduxjs/toolkit";
import { authenticate, login, register } from "../actions/authenticateUserActions";

const initialState = {
    user: {},
    token: null,
    status: 'offline'
}

const authenticateUserReducers = createReducer( initialState,
    (builder) => builder
    .addCase(authenticate.fulfilled, ( state, action ) => {

        console.log(action.payload)
        
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
    .addCase(register, ( state, action ) => {

        const newState = { 
            ...state, 
            ...action.payload 
        }
        return newState
    })
)

export default authenticateUserReducers