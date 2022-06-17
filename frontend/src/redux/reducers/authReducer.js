import { SIGN_IN_POST,GET_AUTH } from "../types"

const initialState = {
    auth: false,
    token:null,
    getAuth:[],
    role:null,
    info:[]
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_POST:
            return {
                ...state,
                auth:true,
                token:action.payload.token,
                role:action.payload.role,
                info: action.payload
            }
        case GET_AUTH:
            return {
                ...state,
                getAuth:action.payload
            }
        default:
            return state
    }
}