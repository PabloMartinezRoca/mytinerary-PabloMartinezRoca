import { createReducer } from "@reduxjs/toolkit";
import getAllCitiesRedux from "../actions/citiesActions"
// objeto con los estados que serán modificados por las acciones
// por ejemplo: const initialState = { text: '', checks: [], select: '' }

const initialState = {
    cities: []
}

const citiesReducer = createReducer(initialState,
    (builder) => builder
        .addCase(
            getAllCitiesRedux,
            (store, action) => {
                const newStore = {
                    ...store,
                    cities: action.payload
                }
                return newStore
                // En lugar de:
                /*
                return {
                    ...store, 
                    events: [...store.events, action.payload]
                }
                */
            }
        )
    /* .addCase(
        addNewCity, // acción recibida
        (store, action) => { // callback

            // IMPORTANTE
            // El state (en este caso store) no se modifica, SE REEMPLAZA
            // Al ocurrir esto, React va a crear un registro del state
            return {
                ...store, // spread operator -> desestructura el objeto y devuelve sus propiedades
                events: [...store.events, action.payload]
                // Idem a 
                // events: [...store.events].push( action.payload )
            }

            // Equivalente a 
            // const newStore = { ...store }
            // newStore.events = [...store.events, action.payload] 
            // return newStore
            
        }) */
    // .addMatcher() // opcional
    // .addDefaultCase() //opcional
)

export default citiesReducer