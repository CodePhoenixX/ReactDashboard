import React from 'react'
import '../Dashboard/Dashboard.css'

// Import Link
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Content from '../MainContent/Content';

function Dashboard() {

    return (

        <>
            <Navbar />

            <Sidebar />

            <Content />

        </>

    )
}

export default Dashboard;