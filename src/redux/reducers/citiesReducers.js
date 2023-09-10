import { createReducer } from "@reduxjs/toolkit";
import { getAllCities, getCityById } from "../actions/citiesActions";

// objeto con los estados que serán modificados por las acciones
// por ejemplo: const initialState = { text: '', checks: [], select: '' }
const initialState = {
    cities: [],
    cityInfo: {},
    loadingMainInterfase: false,
    loadingCityInfoData: false
}

const citiesReducers = createReducer(initialState,
    (builder) => builder
        .addCase(getAllCities.fulfilled, (state, action) => {
            console.log("fulfilled")
            const newState = {
                ...state,
                cities: action.payload,
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
        .addCase(getAllCities.pending, (state) => {
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
        .addCase(getAllCities.rejected, (state, action) => {
            console.log("rejected")
            const newState = {
                ...state,
                cities: action.payload,
                loadingMainInterfase: false
            }
            return newState
        })
        .addCase(getCityById.fulfilled, (state, action) => {
            console.log("fulfilled")
            const newState = {
                ...state,
                cityInfo: action.payload,
                loadingCityInfoData: false
            }
            return newState
        })
        .addCase(getCityById.pending, (state) => {
            console.log("pending")
            const newState = {
                ...state,
                loadingCityInfoData: true
            }
            return newState
        })
        .addCase(getCityById.rejected, (state, action) => {
            console.log("rejected")
            const newState = {
                ...state,
                cityInfo: action.payload,
                loadingCityInfoData: false
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

export default citiesReducers


/*

.addCase(
            addNewCity, // acción recibida
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