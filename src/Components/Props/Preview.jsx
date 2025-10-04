import React, { useState, useRef } from "react";
import './Preview.css'

const Preview = (props) => {

    const [size, setsize] = useState(50);
    const barRef = useRef(null);

    // To keep track if the controller is being dragged
    const isDragging = useRef(false);

    const handleMouseMove = (e) => {

        if(!isDragging.current) return

        const bar = barRef.current;
        const rect = bar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        let newSize = (clickX / rect.width) * 100;
        newSize = Math.max(0, Math.min(100, newSize));
        setsize(Math.round(newSize));
    };

    const handleMouseUp = () =>{
        isDragging.current = false;

        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseDown = () =>{
        isDragging.current = true;

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp)
    };

    return (
        <>

            {/* Icon Properties Props Start */}
            <div className="icon-preview-props">

                <div className="preview">
                    <span id="preview-tag">{props.size}</span>
                    <span id="size-px">{size}px</span>
                </div>

                <div className="bar" ref={barRef}>
                    <div
                        className="bar-controler"
                        onMouseDown={handleMouseDown}
                        style={{ left: `${size}%` }}
                    ></div>
                </div>
            </div>
            {/* Icon Properties Props End */}
        </>
    )
}

export default Preview;