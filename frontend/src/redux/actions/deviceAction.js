import axios from "axios";
import Swal from "sweetalert2";
import {API_URI, myUrl, token} from "../../utils/keys";
import cookies from 'js-cookie'
import {GET_COUNTER_USER, GET_DEVICE, GET_DEVICE_USER, GET_DEVICES_COUNTERS, GET_SINGLE_DEVICE_USER} from "../types";


export const goCreateDevice = (data) => {
    return (dispatch) => {
        axios
            .post(`${API_URI}/car-wash/device/create`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            .then((res) => {
                // dispatch({ type: ADD_TECHNICIAN, payload: res.data });
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    showConfirmButton: false,
                    timer: 1500,
                });
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


export function getDevice() {
    return async dispatch => {
        const response = await axios.get(`${API_URI}/car-wash/device`,{
            headers: {'Authorization': `Bearer ${token}`}
        })
        dispatch({
            type: GET_DEVICE,
            payload: response.data.users
        })
    }
}



export function getDevicesCounters(userId) {
    return async dispatch => {
        const response = await axios.get(`${API_URI}/counter`,{
            headers: {'Authorization': `Bearer ${token}`}
        })

        dispatch({
            type: GET_DEVICES_COUNTERS,
            payload: response.data.filter(x => x.id == userId)[0].CarWashDevices,
            userId:userId
        })
    }
}

export function getCounter() {
    return async dispatch => {
        const response = await axios.get(`${API_URI}/counter`,{
            headers: {'Authorization': `Bearer ${token}`}
        })

        dispatch({
            type: GET_COUNTER_USER,
            payload: response.data,
            // userId:userId
        })
    }
}


export function getDeviceUser(deviceUser) {
    return async dispatch => {
        const response = await axios.get(`${API_URI}/car-wash/device/${deviceUser}`,{
            headers: {'Authorization': `Bearer ${token}`}
        })

        dispatch({
            type: GET_DEVICE_USER,
            payload: response.data?.Components
            // userId:userId
        })
    }
}

export function getSingleDeviceUser(deviceUser) {
    return async dispatch => {
        const response = await axios.get(`${API_URI}/car-wash/device/${deviceUser}`,{
            headers: {'Authorization': `Bearer ${token}`}
        })
        dispatch({
            type: GET_SINGLE_DEVICE_USER,
            payload: response.data
        })
    }
}


export const goResetCount = (data) => {
    const lang = cookies.get("i18next")

    return (dispatch) => {
        axios
            .put(`${API_URI}/counters/countersResetConfirm`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            .then((res) => {
                // dispatch({ type: ADD_TECHNICIAN, payload: res.data });
                Swal.fire({
                    icon: 'success',
                    text: `${lang == 'am' ? "ձեր հաշվիչները զրոյացվել են" : lang == 'ru' ? "ваши счетчики были сброшены" : "your counters have been reset"}`,
                })
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


export const goserviceResetConfirm = (data) => {
    const lang = cookies.get("i18next")

    return (dispatch) => {
        axios
            .put(`${API_URI}/counters/serviceResetConfirm`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            .then((res) => {
                // dispatch({ type: ADD_TECHNICIAN, payload: res.data });
                Swal.fire({
                    icon: 'success',
                    text: `${lang == 'am' ? "ձեր կարգավորումները զրոյացվել են" : lang == 'ru' ? "ваши настройки были сброшены" : "your settings have been reset"}`,
                })
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


export const goflagsfreeMode = (data) => {
    const lang = cookies.get("i18next")

    return (dispatch) => {
        axios
            .put(`${API_URI}/flags/freeMode`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            .then((res) => {
                // dispatch({ type: ADD_TECHNICIAN, payload: res.data });
                Swal.fire({
                    icon: 'success',
                    text: `${lang == 'am' ? "ձեր կարգավորումները զրոյացվել են" : lang == 'ru' ? "ваши настройки были сброшены" : "your settings have been reset"}`,
                })
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
