// styles
import "./PageNotFound.scss"


import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";

// custom imports
import PagePreLoader from "../../components/PagePreLoader/PagePreLoader";
import foam from "../../images/foam.png"
import foam_foam from "../../images/blue-g602dd8e3a_640.png"


const PageNotFound = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }

        // return () => {
        //     setLoading({})
        // }
    }, [loading]);



    if (loading) return <PagePreLoader />

    const pageNotFound = () => {
        return (
            <div className="container">
                <div className="big_text text">
                    <h1>4<span className="color_blue">0</span>4</h1>
                    <p>Page not found <Link to="/">Home</Link></p>
                </div>
                <div className="small_texts">

                    <p><img src={foam} alt="foam"/></p>

                    <p>
                        <img  src={foam} alt="foam"/>
                    </p>
                    <p className="text_3">
                        <img style={{width:"600px"}} src={foam} alt="foam"/>
                    </p>
                    <p className="text_16">
                        <img src={foam_foam} alt="foam"/>
                    </p>
                    <p className="text_4">
                        <img src={foam} alt="foam"/>
                    </p>
                    <p className="text_18">
                        <img src={foam_foam} alt="foam"/>
                    </p>
                    <p className="text_5">
                        <img  src={foam} alt="foam"/>
                    </p>
                    <p className="text_6">
                        <img style={{width:"900px"}}  src={foam} alt="foam"/>
                    </p>
                    <p className="text_7">
                        <img src={foam} alt="foam"/>
                    </p>
                    <p className="text_8">
                        <img src={foam} alt="foam"/>
                    </p>
                    <p className="text_9">
                        <img  src={foam} alt="foam"/>
                    </p>
                    <p className="text_17">
                        <img src={foam_foam} alt="foam"/>
                    </p>
                    <p className="text_10">
                        <img src={foam} alt="foam"/>
                    </p>
                    <p className="text_11">
                        <img  src={foam} alt="foam"/>
                    </p>
                    <p className="text_19">
                        <img src={foam_foam} alt="foam"/>
                    </p>
                    <p className="text_12">
                        <img src={foam} alt="foam"/>
                    </p>
                    <p className="text_13">
                        <img src={foam_foam} alt="foam"/>
                    </p>

                </div>
            </div>
        )
    }


    return (
        <div className="section_notfound">
            {pageNotFound()}
        </div>
    );
};

export default PageNotFound;