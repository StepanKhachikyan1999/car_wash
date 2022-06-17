// styles
import "./DevicePage.scss"
import React from 'react';
import DeviceTable from "../../components/device/device";
import Navbar from "../../components/navbar/Navbar";

const DevicePage = () => {
    return (
        <div className="device_section">
            <Navbar />
            <div className="device_section_table">
                <DeviceTable />
            </div>
        </div>
    );
};

export default DevicePage;