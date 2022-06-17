// styles
import './LoadingPage.scss'

import React from 'react';
import { useNavigate } from "react-router-dom";


const LoadingPage = () => {
    let navigate = useNavigate();

    setTimeout(() => {
        navigate(-1)
    },3000)

    return (
        <div className="container_loader">
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default LoadingPage;