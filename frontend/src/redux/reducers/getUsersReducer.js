import {GET_ONE_USER, GET_USERS} from "../types"

const initialState = {
    users:[],
    getOneUser:[]
}

export const getUsers = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case GET_ONE_USER:
            return {
                ...state,
                getOneUser: action.payload,
            }
        default:
            return state
    }
}