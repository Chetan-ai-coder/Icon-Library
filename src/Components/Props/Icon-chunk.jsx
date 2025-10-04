import React from "react";
import './Icon-chunk.css'
import IconBox from "./IconBox";

const IconChunk = () => {
    return(
        <>
         {/* Icon Chunk Start */}
                <div className="icons-chunk">

                    {/* Icon Box Start */}
                    <IconBox/>
                    <IconBox/>
                    <IconBox/>
                    <IconBox/>
                    <IconBox/>
                    {/* Icon Box End */}

                </div>
                {/* Icon Chunk End */}
        </>
    )
}

export default IconChunk;