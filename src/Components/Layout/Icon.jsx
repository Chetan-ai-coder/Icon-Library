import React from "react";
import '../../Styles/Icon.css'
import IconChunk from "../Props/Icon-chunk";

const Icon = () => {
    return (
        <>

            {/* This is main Icon container Section Start */}
            <div className="icon-section">

                {/* Icon chunk started */}
                <IconChunk/>
                <IconChunk/>
                <IconChunk/>
                <IconChunk/>
                <IconChunk/>
                <IconChunk/>
                <IconChunk/>
                <IconChunk/>
                <IconChunk/>
                {/* Icon chunk end */}
            </div>

            {/* Icon container Section End */}
        </>
    )
};

export default Icon;