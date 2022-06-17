// styles
import "./WashingMachines.scss"

import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import ActionAreaCard from "../../components/washingMachines/washing";


// custom imports

const WashingMachines = () => {
    return (
        <div className="washing_machines_section">
            <div className="washing_machines_container">
                <Navbar/>
                <div className="washing_machines_slice">
                <ActionAreaCard />
                </div>
            </div>
        </div>
    );
};

export default WashingMachines;