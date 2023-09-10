import { configureStore } from '@reduxjs/toolkit'
import citiesReducers from './reducers/citiesReducers.js'
import itinerariesReducers from './reducers/itinerariesReducers.js'
import carrouselReducers from './reducers/carrouselReducers.js'

export const store = configureStore({
    reducer: {
        citiesReducers: citiesReducers,
        itinerariesReducers: itinerariesReducers,
        popularMytinerariesCarrouselReducers: carrouselReducers
    }
})