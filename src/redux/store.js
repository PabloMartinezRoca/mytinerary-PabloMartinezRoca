import { configureStore } from '@reduxjs/toolkit'
import itinerariesReducer from './reducers/itinerariesReducer'

const store = configureStore({
    reducer: {
        
        itinerariesReducer: itinerariesReducer
    }
})

export default store