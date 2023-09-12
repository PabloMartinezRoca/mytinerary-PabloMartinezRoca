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
        .addCase( setCities, ( store, action ) => {
            // console.log(store)
            return {
                ...store,
                cities: action.payload
            }
        })
        .addCase( setTotalPages, ( store, action ) => {
            // console.log("num. of pages in carousel:", action.payload) // totalPages desde la acción
            return {
                ...store,
                totalPages: action.payload
            }
        })
        .addCase( showPage, ( store, action ) => {
            // console.log("showing Page:", action.payload) // activePage desde la acción
            return {
                ...store,
                activePage: action.payload
            }
        })
        .addCase( showNextPageFrom, ( store, action ) => {

            const activePage = action.payload.activePage
            const totalPages = action.payload.totalPages
            const newActivePage = activePage < totalPages ? activePage + 1 : 1
            
            // console.log("NextPage from", activePage)
            // console.log("new activePage:", newActivePage, "of", totalPages)
    
            return {
                ...store,
                activePage: newActivePage
            }
        })
        .addCase( showPrevPageFrom, ( store, action ) => {
            
            const activePage = action.payload.activePage
            const totalPages = action.payload.totalPages
            const newActivePage = activePage > 1 ? activePage - 1 : totalPages
            
            // console.log("PrevPage from", activePage)
            // console.log("new activePage:", newActivePage, "of", totalPages)

            return {
                ...store,
                activePage: newActivePage
            }
        })
        .addDefaultCase((store) => {
            return store
        })
        
)

export default popularMytinerariesCarrouselReducers
