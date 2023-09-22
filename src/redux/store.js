import { configureStore } from '@reduxjs/toolkit'
import citiesReducers from './reducers/citiesReducers.js'
import carrouselReducers from './reducers/carrouselReducers.js'
import authenticateUserReducers from './reducers/authenticateUserReducers.js'

export const store = configureStore({
    reducer: {
        authenticateUserReducers: authenticateUserReducers,
        citiesReducers: citiesReducers,
        popularMytinerariesCarrouselReducers: carrouselReducers
    }
})