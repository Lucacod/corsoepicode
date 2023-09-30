import React from "react";
import LatestRelease from "../LatestRelease/LatestRelease";
import Navigation from "../navbar/Navigation";
import Jumbotron from "../welcome/Jumbotron";


const MainLayouts = () => {
    return (
        <>
            <Navigation />
            <Jumbotron/>
            <LatestRelease />
        </>
    )
}

export default MainLayouts;