import axios from "axios";
import Swal from "sweetalert2";
import {API_URI, token} from "../../utils/keys";



export const goEditSettings = (data) => {
    return (dispatch) => {
        axios
            .put(`${API_URI}/counters`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }         )
            .then((res) => {
                // dispatch({ type: TECHNICIAN_TOKEN, payload: res.data });
                if(res.data.success == false) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        timer: 1000,
                    });
                    return
                }
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    showConfirmButton: false,
                    timer: 200,
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
