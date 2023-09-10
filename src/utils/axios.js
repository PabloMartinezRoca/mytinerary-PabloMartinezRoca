import axios from "axios"

const baseURL = 'http://localhost:3000/api'

const server = axios.create( {
    baseURL: baseURL
})

export default server