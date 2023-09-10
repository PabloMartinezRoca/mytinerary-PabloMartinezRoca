import { createAction } from "@reduxjs/toolkit";

const setCities = createAction('setCities', (cities) => {
    return {
        payload: cities
    }
})

const setTotalPages = createAction('setTotalPages', (totalPages) => {
    console.log("num. of pages in carousel:", totalPages)
    return { payload: totalPages }
})

const showPage = createAction('showPage', (page) => {
    // console.log("showing Page: ", activePage)
    return ({
        payload: page
    })
})

const showNextPageFrom = createAction('showNextPage', (activePage, totalPages) => {
    // console.log("NextPage from", activePage)
    // console.log("new activePage:", activePage < totalPages ? activePage + 1 : 1, "of", totalPages)
    return ({
        payload: activePage < totalPages ? activePage + 1 : 1
    })
})

const showPrevPageFrom = createAction('showPrevPage', (activePage, totalPages) => {
    // console.log("PrevPage from", activePage)
    // console.log("new activePage:", activePage < totalPages ? activePage + 1 : 1, "of", totalPages)
    return ({
        payload: activePage > 1 ? activePage - 1 : totalPages
    })
})

export {
    setCities,
    setTotalPages,
    showPage,
    showNextPageFrom,
    showPrevPageFrom
}
