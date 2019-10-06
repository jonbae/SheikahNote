import React from 'react';

import SidebarContainer from "./sidebar/sidebar_container";
import MainSection from "./main_section"


const MainPage = props => {
    // fullscreen mode 

    // normal mode
    return (
        <main className="main-page-frame"> 

            <SidebarContainer /> 
            <MainSection /> 
        
        </main>
    );
};

export default MainPage; 