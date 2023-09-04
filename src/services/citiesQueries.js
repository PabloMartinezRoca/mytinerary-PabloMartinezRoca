import axios from "axios"

const URL_BASE = "http://localhost:3000/api/cities/"

export const getAllCities = async (queryParam = "") => { // por defecto, vacío si no se envían parámetros
    try {
        const response = await axios(URL_BASE + "getAllCities" + queryParam) // si se omite el método, por defecto es GET
        return response.data.response // Si la respuesta es exitosa, devuelve el array con los elementos
    } catch (err) {
        return [] // Si la respuesta es fallida, devuelve un array vacío
    }
}

export const getCitiesByCityName = async (queryParam = "") => { // por defecto, vacío si no se envían parámetros
    try {
        const response = await axios(URL_BASE + "findCitiesByName" + queryParam) // si se omite el método, por defecto es GET
        return response.data.response // Si la respuesta es exitosa, devuelve el array con los elementos
    } catch (err) {
        return [] // Si la respuesta es fallida, devuelve un array vacío
    }
}