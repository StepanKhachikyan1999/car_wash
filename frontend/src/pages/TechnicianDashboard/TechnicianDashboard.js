// styles
import "./TechnicianDashboard.scss"

import React from 'react';
import Navbar from "../../components/navbar/Navbar";

// custom imports
import BarChart from "../../components/chart/BarChart"
import AnaliticsStatistic from "../../components/chart/AnaliticsStatistic";
import AnaliticsUserDashboard from "../../components/chart/AnaliticsUserDashboard";
import AnaliticsUserDashboardExpenses from "../../components/chart/AnaliticsUserDashboardExpenses";

const TechnicianDashboard = () => {
    return (
        <>
            <Navbar/>

            <section className="alaliics_section_user">


                <div className="total_info_income">
                    <AnaliticsUserDashboard />
                </div>

                <div className="total_info_expenses">
                    <AnaliticsUserDashboardExpenses />
                </div>

            </section>
        </>
    );
};

export default TechnicianDashboard;