// styles
import './DevicePage.scss'

import React, {useEffect, useState} from 'react';

// custom imports
import Navbar from "../../components/navbar/Navbar";
import SingleDeviceBlock from "../../components/device/singleDevice";
import DeviceTableCounter from "../../components/device/deviceTableCounter";
import DeviceTableSettings from "../../components/device/deviceTableSettings";

const SingleDevice = () => {

    return (
        <div className="single_device_page">
            <Navbar />
            <div className="single_device_slice">
                <SingleDeviceBlock />
            </div>
            <div className="device_counter">
                <DeviceTableCounter />
            </div><br/>
            <div className="device_counter">
                <DeviceTableSettings />
            </div><br/>
        </div>
    );
};

export default SingleDevice;