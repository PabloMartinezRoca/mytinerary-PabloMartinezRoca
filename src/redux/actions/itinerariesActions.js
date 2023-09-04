import { createAction } from "@reduxjs/toolkit";

const addItinerary = createAction( 'addItinerary', (event) => {
    return {
        payload: event,
    }
})
const removeItinerary = createAction( 'removeItinerary', (event) => {
    return {
        payload: event,
    }
})

// Es posible importar en el reducer que consumirá las acciones, estas acciones por separado
export default {
    addItinerary,
    removeItinerary,
}