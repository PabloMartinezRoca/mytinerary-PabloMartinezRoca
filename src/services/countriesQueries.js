import server from "../utils/axios"

const URL_BASE = "http://localhost:3000/api/countries/"

export const getAllCountries = async (queryParam = "") => { // por defecto, vacío si no se envían parámetros
    try {
        const response = await server(URL_BASE + "getAllCountries" + queryParam) // si se omite el método, por defecto es GET
        return response.data.response // Si la respuesta es exitosa, devuelve el array con los elementos
    } catch (err) {
        return [] // Si la respuesta es fallida, devuelve un array vacío
    }
}

export const getCountriesByCountryName = async (queryParam = "") => { // por defecto, vacío si no se envían parámetros
    try {
        const response = await server(URL_BASE + "findCountriesByName" + queryParam) // si se omite el método, por defecto es GET
        return response.data.response // Si la respuesta es exitosa, devuelve el array con los elementos
    } catch (err) {
        return [] // Si la respuesta es fallida, devuelve un array vacío
    }
}