import React, { useState } from "react";
import '../../Styles/IconPanel.css'
import '../../Styles/Index.css'
import Icon_container from "../Props/Icon_container";
import Icon_Info from "../Props/Icon_Info";
import Contributors from "../Props/Contributors";
import IconPage from "./Iconpage";

const IconPanel = ({ closePanel }) => {

    const [isPageOpen, setIsPageOpen] = useState(false);
    console.log(isPageOpen)

    return (
        <>
            <div className="iconpanel">

                {/* Overlay Menu */}
                <nav className="overlay-menu" onClick={(e) => e.stopPropagation()}>

                    <a href="" className="badge version">v0.301.0</a>

                    {/* Full Screen Icon */}

                    <button className="icon-panel-button">
                        <i class="ri-fullscreen-fill" onClick={() => setIsPageOpen(true)} ></i>
                    </button>

                    {isPageOpen && <IconPage closeIconPage={() => setIsPageOpen(false)} />}

                    {/* Close Icon */}
                    <button className="icon-panel-button" onClick={() => {
                        console.log("clicked")
                    }} >
                        <i class="ri-close-line" onClick={closePanel} ></i>
                    </button>
                </nav>

                {/* Icon Container Start */}
                <Icon_container icon="ri-ancient-gate-line" />
                {/* Icon Container End */}

                {/* Icon Info Start */}
                <Icon_Info
                    icon_name="Ancient House"
                    icon_tags="preview • zoom • expand • fullscreen"
                    icon_use={["Medical", "Business", "Education"]}
                />
                {/* Icon Info End */}

            </div >
        </>
    )
}

export default IconPanel;