import React, {useContext} from 'react'

import Sidebar from '../../Components/Sidebar/Sidebar'
import "./MainPage.css";
import {ToggleSidebarContext} from '../../Helpers/Context'
export default function MainPage() {
    const {showSidebar, setshowSidebar} = useContext(ToggleSidebarContext);
    return (
        <div className="MainPage">
            
            <div className="Sidebar">
                {showSidebar && <Sidebar />}
                
                <div className="VideoView">
                </div>
            </div>
        </div>
    )
}
