import React from "react";

import Sidebar from "../Components/Layout/Sidebar";
import Header from "../Components/Layout/Header";
import Icon from "../Components/Layout/Icon"
import IconPanel from "../Components/Layout/IconPanel";
import Contributors from "../Components/Props/Contributors";
import IconPage from "../Components/Layout/Iconpage";
import IconCode from "../Components/Props/IconCode";

const Home = () => {
    return(
        <>
        <Sidebar/>
        <Header/>
        <Icon/>
        {/* <IconPage/> */}
        </>
    )
}

export default Home;