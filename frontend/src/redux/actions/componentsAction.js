import {CHANGE_SINGLE_DEVICE, GET_COMPONENTS, GET_COUNTER, GET_SINGLE_DEVICE} from "../types";
import axios from "axios";
import {API_URI, token} from "../../utils/keys";
import Swal from "sweetalert2";
import {getUsers} from "./getUsersAction";


export function getComponents() {
    return async dispatch => {
        const response = await axios.get(`${API_URI}/total-components/`,
            {
                headers: {'Authorization': `Bearer ${token}`}
            })
        dispatch({
            type: GET_COMPONENTS,
            payload: response.data
        })
    }
}

export function getSingleDeviceTest(deviceId) {
    return async dispatch => {
        const response = await axios.get(`${API_URI}/car-wash/device/${deviceId}`,
            {headers: {'Authorization': `Bearer ${token}`}})
        dispatch({
            type: GET_SINGLE_DEVICE,
            payload: response.data
        })
    }
}

export const goAddComponent = (data) => {
    return (dispatch) => {
        axios
            .post(`${API_URI}/car-wash/device/components`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            .then((res) => {
                // dispatch({ type: ADD_TECHNICIAN, payload: res.data });
                if(res.data.success === false) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        timer: 1500,
                    });
                    return
                }
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                dispatch(getSingleDeviceTest())
            })
            .catch((e) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    timer: 1500,
                });
            });
    };
};



export function getCounter(device_id) {

    return async dispatch => {
        const response = await axios.get(`${API_URI}/counters`,{params:{device_id:device_id}},
            {headers: {'Authorization': `Bearer ${token}`}})
        dispatch({
            type: GET_COUNTER,
            payload: response.data
        })
    }
}