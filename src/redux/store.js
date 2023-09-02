import { configureStore } from '@reduxjs/toolkit'
import itineraryReducer from './reducers/itineraryReducer'

const store = configureStore({
    reducer: {
        itineraryReducer: itineraryReducer
    }
})

export default store