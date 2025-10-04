import React from "react";
import Preview from "../Props/Preview";
import Fill from "../Props/Fill"
import '../../Styles/Header.css'
import Color from "../Props/Color";
import Team from "../Props/Team";
import Icon from "./Icon";

const Header = () => {
    return (
        <>

            {/* Header Section Start */}

            <div className="header-section">

                {/* Searchbar Section Start */}

                <div className="searchbar-section">

                    {/* Searchbar Start */}
                    <div className="searchbar">

                        <div className="search">
                            <i class="ri-search-line"></i>
                            <input
                                type="text"
                                placeholder="Search here..."
                            />
                        </div>

                        <div className="saved-icons">
                            <i class="ri-folder-line"></i>
                        </div>
                    </div>
                    {/* Searchbar End */}

                    {/* Personal Info Start */}
                    <div className="personal-info">

                        <button id="upgrade-btn" ><i class="ri-flashlight-line"></i>Upgrade now</button>

                        <i id="notification" class="ri-notification-3-line"></i>

                        <img id="profile-img" src="https://i.pinimg.com/736x/0c/91/d1/0c91d1281586b5b213ee7280c36ee9e0.jpg" alt="" />

                    </div>
                    {/* Personal Info End */}
                </div>

                {/* Searchbar Section End */}

                {/* Icons Properties Section Start */}

                <div className="icon-properties">

                    <Preview size="Preview Size:"/>
                    <Fill btnOne="Fill" btnTwo="Stroke"/>
                    <Preview size="Stroke Size:"/>
                    <Fill btnOne = "Duotone:" btnTwo="Animated:"/>
                    <Color/>
                    <Team/>

                </div>

                {/* Icons Properties Section End */}
            </div>

            {/* Header Section End */}
        </>
    )
}

export default Header;