import axios from "axios";
import Swal from "sweetalert2";
import {API_URI, myUrl, token} from "../../utils/keys";
import {CHANGE_PASSWORD_SEND, CHANGE_PASSWORD} from "../types";
import {useTranslation} from "react-i18next";


// change password

export const goChangePassword = (data) => {
    return (dispatch) => {
        axios
            .post(`${API_URI}/change-password`, data,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                if(res.data.success == false) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        timer: 1500,
                    })
                    return
                }
                dispatch({ type: CHANGE_PASSWORD, payload: res.data });
                Swal.fire({
                    icon: "success",
                    title: "password changed successfully",
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

// email sender
export const goSendEmail = (data) => {

    return (dispatch) => {
        axios
            .post(`${API_URI}/forgot-password/email`, data)
            .then((res) => {
                dispatch({ type: CHANGE_PASSWORD_SEND, payload: res.data });
                if(res.data.msg == "user not found") {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "\n" +
                            "There is no such email address",
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

                // window.location.href = `${myUrl}/change/changeCode/enterCode/finishChange`;
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


// change technician password

export const changePasswordTechnican = (data) => {
    return (dispatch) => {
        axios
            .post(`${API_URI}/technician/change-password`, data,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                // dispatch({ type: CHANGE_PASSWORD, payload: res.data });
                if(res.data.success == "false") {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "\n" +
                            "There is no such email address",
                        timer: 1500,
                    });
                    return
                }
                Swal.fire({
                    icon: "success",
                    title: "password changed",
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