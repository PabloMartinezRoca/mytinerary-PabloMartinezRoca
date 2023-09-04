import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addNewCity = createAction( 'addNewCity', (event) => {
    return {
        payload: event,
    }
})

const getAllCitiesSync = createAction( 'getAllCities', (data) => {
    return {
        payload: data
    }
})

const getAllCitiesRedux = createAsyncThunk( 'getAllCitiesRedux', async () => {

    try {
        const response = await axios("http://localhost:3000/api/cities/getAllCities") // si se omite el método, por defecto es GET
        return response.data.response
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

const getCityById = createAction( 'getCityById', (event) => {
    return {
        payload: event
    }
})

const removeCity = createAction( 'removeCity', (event) => {
    return {
        payload: event,
    }
})

// Es posible importar en el reducer que consumirá las acciones, estas acciones por separado
export default {
    addNewCity,
    getAllCitiesRedux,
    getAllCitiesSync,
    getCityById,
    removeCity,
}