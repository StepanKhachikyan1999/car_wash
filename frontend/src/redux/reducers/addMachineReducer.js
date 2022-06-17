import { TECHNICIAN_TOKEN } from "../types"

const initialState = {
    token: [],
}

export const addMachineReducer = (state = initialState, action) => {
    switch (action.type) {
        case TECHNICIAN_TOKEN:
            return {
                ...state,
                token:action.payload
            }

        default:
            return state
    }
}