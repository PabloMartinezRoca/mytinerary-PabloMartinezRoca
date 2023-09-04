import { createReducer } from "@reduxjs/toolkit";
import addItinerary from '../actions/itinerariesActions' // Importa las acciones que disparan los reductores

// objeto con los estados que serán modificados por las acciones
// por ejemplo: const initialState = { text: '', checks: [], select: '' }

const initialState = {
    itineraries: [],
    total: 0
}

const itinerariesReducer = createReducer( initialState, (builder) => {
    builder.addCase( 
        addItinerary, // acción recibida
        ( store, action ) => { // callback

        // IMPORTANTE
        // El state (en este caso store) no se modifica, SE REEMPLAZA
        // Al ocurrir esto, React va a crear un registro del state
        return {
            ...store, // spread operator -> desestructura el objeto y devuelve sus propiedades
            events: [...store.events, action.payload] 
            // Idem a 
            // events: [...store.events].push( action.payload )
        }

        /* Equivalente a 
        const newStore = { ...store }
        newStore.events = [...store.events, action.payload] 
        return newStore
        */
    })
    // .addMatcher() // opcional
    // .addDefaultCase() //opcional

})

export default itinerariesReducer