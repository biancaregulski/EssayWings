import { useState } from "react";
import WritingTree from "./writing-tree";
import Hamburger from 'hamburger-react';


const Sidebar = () => {
    const [showSidebarContents, setShowSidebarContents] = useState(false);

    const toggleSidebar = () => setShowSidebarContents(!showSidebarContents);

    return (
        <div className='sidebar'>
            <div className="permanent-sidebar">
                <div className='sidebar-button' onClick={toggleSidebar}>
                    <Hamburger toggled={showSidebarContents} toggle={setShowSidebarContents} />
                </div>
            </div>
            <div className={showSidebarContents ? "open-slide" : "close-slide"}>
                {/* {showSidebarContents ? <WritingTree /> : null} */}
                <WritingTree />
                {/* </div> */}
                {/* {showSidebarContents ? <WritingTree /> : null} */}
            </div>
        </div>
    );
};

export default Sidebar;;