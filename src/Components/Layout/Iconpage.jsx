import React from "react";
import '../../Styles/IconPage.css'
import Icon_container from "../Props/Icon_container";
import Icon_Info from "../Props/Icon_Info";
import IconCode from "../Props/IconCode";

const IconPage = ({closeIconPage}) => {
    return (
        <>
            {/* Icon page container Start */}

            <div className="icon-page-container" onClick={closeIconPage}>

                {/* Icon Page Content Start */}

                <div className="icon-page-content" onClick={(e) => e.stopPropagation()}>

                    {/* Icon Image Start */}
                    <div className="icon-image-container">
                        <Icon_container icon="ri-ancient-gate-line" />
                    </div>
                    {/* Icon Image End */}


                    {/* Icon information start */}
                    <div className="icon-information-container">

                        {/* Icon Profile content start */}
                        <div className="icon-profile-content">

                            {/* Close Icon */}

                            <button className="icon-panel-button" onClick={() => {
                                closeIconPage();
                                console.log("clicked");
                            }} >
                                <i class="ri-close-line"></i>
                            </button>

                            <Icon_Info
                                icon_name="Ancient House"
                                icon_tags="preview • zoom • expand • fullscreen"
                                icon_use={["Medical", "Business", "Education"]}

                            />

                        </div>
                        {/* Icon Profile content end */}

                        {/* Icon Code Group Start */}
                        <div className="icon-code-group">
                            <IconCode />
                        </div>
                        {/* Icon Code Group End */}
                    </div>
                    {/* Icon information end */}
                </div>
                {/* Icon Page Content Start */}
            </div>
            {/* Icon page container End */}
        </>
    )
}

export default IconPage;