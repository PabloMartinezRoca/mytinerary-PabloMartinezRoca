import { createReducer } from "@reduxjs/toolkit";
import { setCities, setTotalPages, showNextPageFrom, showPage, showPrevPageFrom } from "../actions/carrouselActions";

const initialState = {
    cities: [],
    citiesPerPage: 4,
    activePage: 1,
    totalPages: 0
}

const popularMytinerariesCarrouselReducers = createReducer(initialState,
    (builder) => builder
        .addCase( setCities, ( state, action ) => {
            // console.log(state)
            return {
                ...state,
                cities: action.payload
            }
        })
        .addCase( setTotalPages, ( state, action ) => {
            // console.log(state)
            return {
                ...state,
                totalPages: action.payload
            }
        })
        .addCase( showPage, ( state, action ) => {
            // console.log("showing Page:", action.payload)
            return {
                ...state,
                activePage: action.payload
            }
        })
        .addCase( showNextPageFrom, ( state, action ) => {
            // console.log("new activePage:", action.payload)
            return {
                ...state,
                activePage: action.payload
            }
        })
        .addCase( showPrevPageFrom, ( state, action ) => {
            // console.log("new activePage:", action.payload)
            return {
                ...state,
                activePage: action.payload
            }
        })
        .addDefaultCase((state) => {
            return state
        })
        
)

export default popularMytinerariesCarrouselReducers
