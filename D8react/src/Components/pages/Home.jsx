import React from 'react'
import LatestRelease from '../LatestRelease/LatestRelease';
import Navigation from '../navbar/Navigation';
import MainLayouts from '../layouts/MainLayouts';


const Home = () => {
    return (

        <MainLayouts>
            <LatestRelease />
            <Navigation />
        </MainLayouts>

    )
}

export default Home;