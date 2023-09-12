import { createAction } from "@reduxjs/toolkit";

const setCities = createAction('setCities', (cities) => {
    return {
        payload: cities
    }
})

const setTotalPages = createAction('setTotalPages', (totalPages) => {
    return { 
        payload: totalPages 
    }
})

const showPage = createAction('showPage', (page) => {
    return {
        payload: page
    }
})

const showNextPageFrom = createAction('showNextPage', (activePage, totalPages) => {
    return {
        payload: { activePage, totalPages }
    }
})

const showPrevPageFrom = createAction('showPrevPage', (activePage, totalPages) => {
    return {
        payload: { activePage, totalPages }
    }
})

export {
    setCities,
    setTotalPages,
    showPage,
    showNextPageFrom,
    showPrevPageFrom
}
