import {combineReducers} from "redux";
// import {postReducer} from "./reducers/postReducer";
import {authReducer} from "./reducers/authReducer"
import {sendEmail} from "./reducers/changeReducer";
import {appReducer} from "./reducers/loaderReducer";
import {getUsers} from "./reducers/getUsersReducer";
import {deviceReducer} from "./reducers/deviceReducer";
import {componentsReducer} from "./reducers/componentsReducer";
import {addMachineReducer} from "./reducers/addMachineReducer";
// import {addTechnicianReducer} from "./reducers/addTechnicianReducer";
// import {addUserReducer} from "./reducers/addUserReducer";



export const rootReducer = combineReducers({
    // posts: postReducer,
    authReducer,
    sendEmail,
    appReducer,
    getUsers,
    deviceReducer,
    componentsReducer,
    addMachineReducer
    // addTechnicianReducer,
    // addUserReducer
});