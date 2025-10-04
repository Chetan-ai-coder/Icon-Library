import React, { useState, useRef} from "react";
import './Fill.css'

const Fill = (props) => {

    const fillRef = useRef(null);
    const strokeRef = useRef(null);

    const [clicked, setClicked] = useState(false);

    const fillMove = () => {

        if (clicked) {
            fillRef.current.style.justifyContent = 'flex-end';
            setClicked(false);
        } else {
            fillRef.current.style.justifyContent = 'flex-start';
            setClicked(true);
        };
    };

    const strokeMove = () => {

        if (clicked) {
            strokeRef.current.style.justifyContent = 'flex-end';
            setClicked(false);
        } else {
            strokeRef.current.style.justifyContent = 'flex-start';
            setClicked(true);
        };
    };

return (
    <>
        {/* Icon Properties Props Start */}
        <div className="icon-preview-props">

            <div className="fill">

                <span>{props.btnOne}</span>

                <div className="btn-cover" ref={fillRef} >

                    <div className="btn" onClick={fillMove}></div>
                </div>

            </div>

            <div className="stroke">

                <span>{props.btnTwo}</span>

                <div className="btn-cover" ref={strokeRef}>

                    <div className="btn" onClick={strokeMove} ></div>
                </div>
            </div>

        </div>
        {/* Icon Properties Props End */}
    </>
);
};

export default Fill;