import React, { useState } from "react";
import './IconBox.css'
import IconPanel from "../Layout/IconPanel";

const IconBox = () => {

    const [isPanelOpen, setIsPanelOpen] = useState(false);
    console.log(isPanelOpen)

    return (
        <>

            {/* Icon Box Section Start */}
            <div className="icon-box">

                {/* Main Icon Box Start */}
                {/* <div className="icon-box-main" onClick={() => setIsPanelOpen(true)}>
                    <i class="ri-ancient-pavilion-line" ></i>
                </div> */}

                <div className="icon-box-main" onClick={() => {
                    if (isPanelOpen === true) {
                        setIsPanelOpen(false);
                        console.log("phele se khula tha band kar diya");
                    } else {
                        setIsPanelOpen(true);
                    }
                }}>
                    <i class="ri-ancient-pavilion-line" ></i>
                </div>
                {/* {isPanelOpen && <IconPanel closePanel={() => setIsPanelOpen(false)} />} */}
                {isPanelOpen && <IconPanel closePanel={() => setIsPanelOpen(false)} />}
                {/* Main Icon Box End */}

                {/* Name of the icon */}
                <div className="icon-name">
                    <span>arrow-circle down</span>
                </div>

            </div>
            {/* Icon Box Section End */}

        </>
    )
}



export default IconBox;