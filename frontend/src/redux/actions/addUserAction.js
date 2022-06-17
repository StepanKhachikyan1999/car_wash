import axios from "axios";
import {API_URI, token} from "../../utils/keys";
import Swal from "sweetalert2";
import {getUsers} from "./getUsersAction";

export const goAddUser = (data) => {
    return (dispatch) => {
        axios
            .post(`${API_URI}/user/create`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            .then((res) => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                dispatch(getUsers())
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


export const goAddEmail = (data) => {
    return (dispatch) => {
        axios
            .post(`${API_URI}/email`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            .then((res) => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                window.location.reload();
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

