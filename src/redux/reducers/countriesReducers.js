import { createReducer } from "@reduxjs/toolkit";
import { getAllCountries, getCountryById } from "../actions/countriesActions";

// objeto con los estados que serán modificados por las acciones
// por ejemplo: const initialState = { text: '', checks: [], select: '' }
const initialState = {
    countries: [],
    countryInfo: {},
    loadingMainInterfase: false,
    loadingCountryInfoData: false
}

const countriesReducers = createReducer(initialState,
    (builder) => builder
        .addCase(getAllCountries.fulfilled, (state, action) => {
            console.log("fulfilled")
            const newState = {
                ...state,
                countries: action.payload,
                loadingMainInterfase: false
            }
            return newState

            // En lugar de:
            /*
            return {
                ...state, 
                events: [...state.events, action.payload]
            }
            */
        })
        .addCase(getAllCountries.pending, (state) => {
            console.log("pending")
            const newState = {
                ...state,
                loadingMainInterfase: true
            }
            return newState

            // En lugar de:
            /*
            return {
                ...state, 
                events: [...state.events, action.payload]
            }
            */
        })
        .addCase(getAllCountries.rejected, (state, action) => {
            console.log("rejected")
            const newState = {
                ...state,
                countries: action.payload,
                loadingMainInterfase: false
            }
            return newState
        })
        .addCase(getCountryById.fulfilled, (state, action) => {
            console.log("fulfilled")
            const newState = {
                ...state,
                countryInfo: action.payload,
                loadingCountryInfoData: false
            }
            return newState
        })
        .addCase(getCountryById.pending, (state) => {
            console.log("pending")
            const newState = {
                ...state,
                loadingCountryInfoData: true
            }
            return newState
        })
        .addCase(getCountryById.rejected, (state, action) => {
            console.log("rejected")
            const newState = {
                ...state,
                countryInfo: action.payload,
                loadingCountryInfoData: false
            }
            return newState
        })
        .addDefaultCase((state) => {
            return state // con initialState retea las propiedades
        })
    // .addMatcher() // opcional
    // .addDefaultCase() //opcional
    //
)

export default countriesReducers


/*

.addCase(
            addNewCountry, // acción recibida
            (state, action) => { // callback

                // IMPORTANTE
                // El state (en este caso state) no se modifica, SE REEMPLAZA
                // Al ocurrir esto, React va a crear un registro del state
                return {
                    ...state, // spread operator -> desestructura el objeto y devuelve sus propiedades
                    events: [...state.events, action.payload]
                    // Idem a 
                    // events: [...state.events].push( action.payload )
                }

                // Equivalente a 
                // const newState = { ...state }
                // newState.events = [...state.events, action.payload] 
                // return newState

            })

*/