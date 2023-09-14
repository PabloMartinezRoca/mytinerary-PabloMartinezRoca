import { createAsyncThunk } from "@reduxjs/toolkit";
import server from "../../utils/axios";

// Middlewares

const getAllCountries = createAsyncThunk('getAllCountries', async (data, thunkApi) => {

    try {
        const allCountries = await server('/countries/getAllCountries') // si se omite el método, por defecto es GET
        // Es lo mismo que server.get('/countries/getAllCountries')
        // Reemplaza a axios("http://localhost:3000/api/countries/getAllCountries") 
        return allCountries.data.response
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

const getCountryById = createAsyncThunk('getCountryById', async (id) => {
    try {
        const country = await server('/countries/findCountryById/' + id)
        return country.data.response
    } catch (err) {
        console.log(err)
        return []
    }
})



// Es posible importar en el reducer que consumirá las acciones, estas acciones por separado
export {
    getAllCountries,
    getCountryById,
}

/*


const addNewCountry = createAction('addNewCountry', (event) => {
    return {
        payload: event,
    }
})

const getAllCountriesSync = createAction('getAllCountries', (data) => {
    return {
        payload: data
    }
})


const removeCountry = createAction('removeCountry', (event) => {
    return {
        payload: event,
    }
})

export {
    addNewCountry,
    getAllCountriesSync,
    removeCountry,
}
*/