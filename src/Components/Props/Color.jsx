import React from "react";
import './Color.css'

const Color = () => {
    return(
        <>
        
        <div className="icon-color-props">

            <div className="background">

                <span>Background:</span>

                <div className="bg-color">
                    <span>#FFFFFF</span>
                </div>

            </div>

            <div className="icon">

                <span>Icon Color:</span>

                <div className="icon-color">
                    <span>#10182B</span>
                </div>
            </div>

        </div>
        </>
    );
};

export default Color;