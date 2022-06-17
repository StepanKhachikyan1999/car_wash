import {HIDE_LOADER, HIDE_PRELOADER, SHOW_LOADER, SHOW_PRELOADER} from "../types";

const initialState = {
    loading:false,
    loader:false
}


export const appReducer = (state = initialState,action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state,loading:true}
        case HIDE_LOADER:
            return {...state,loading:false}
        case SHOW_PRELOADER:
            return {...state,loader:true}
        case HIDE_PRELOADER:
            return {...state,loader:false}
        default:
            return state
    }
}