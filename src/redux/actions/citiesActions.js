import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import server from "../../utils/axios";

// Middlewares

const getAllCities = createAsyncThunk('getAllCities', async (/* data, */ /* thunkApi */) => {

    try {
        const allCities = await server('/cities/getAllCities') // si se omite el método, por defecto es GET
        // Es lo mismo que server.get('/cities/getAllCities')
        // Reemplaza a axios("http://localhost:3000/api/cities/getAllCities") 
        return allCities.data.response
    } catch (err) {
        console.log(err)
        return []
    }
    // al ser async, return ya devuelve el payload
    // no es necesario la siguiente sintaxis:
    /* 
    return {
        payload: data
    } 
    */
})

const getCityById = createAsyncThunk('getCityById', async (id/* , thunkApi */) => {
    try {
        const city = await server('/cities/findCityById/' + id)
        return city.data.response
    } catch (err) {
        console.log(err)
        return []
    }
})

const getItinerariesByCityId = createAsyncThunk('getItinerariesByCityId', async (id) => {
    
    try {
        const itineraries = await server('/cities/getItinerariesByCityId/' + id)

        return itineraries.data.response
    } catch (err) {
        console.log(err)
        return []
    }
})

const resetCityData = createAction('resetCityData')



// Es posible importar en el reducer que consumirá las acciones, estas acciones por separado
export {
    getAllCities,
    getCityById,
    getItinerariesByCityId,
    resetCityData,
}

/*


const addNewCity = createAction('addNewCity', (event) => {
    return {
        payload: event,
    }
})

const getAllCitiesSync = createAction('getAllCities', (data) => {
    return {
        payload: data
    }
})


const removeCity = createAction('removeCity', (event) => {
    return {
        payload: event,
    }
})

export {
    addNewCity,
    getAllCitiesSync,
    removeCity,
}
*/