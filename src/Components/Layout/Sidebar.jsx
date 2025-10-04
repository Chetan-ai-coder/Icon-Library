import React from 'react'
import '../../Styles/Sidebar.css'

const Sidebar = () => {
    return (
        <>

            {/* Sidebar Section Start */}
            <div className="sidebar-01">

                {/* Logo Section Start */}
                <h2 id='logo' >Adi Tech Icons</h2>
                {/* Logo Section End */}

                {/* Categories Section Start */}
                <div className="categories-section">

                    <h2>Categories</h2>

                    {/* Searchbar Section Start */}
                    <div className="searchbar">
                        <i class="ri-search-line"></i>
                    <input 
                        type="text" 
                        name="" 
                        id="searchbox" 
                        placeholder='Search'
                        />
                    </div>
                    {/* Searchbar Section End */}

                    {/* Categories Start */}
                    <div className="categories">

                        <ul>
                            <li>
                                <i class="ri-gallery-view-2"></i>
                                All
                                <span>1200</span>
                            </li>
                            
                            <li>
                                <i class="ri-arrow-left-right-fill"></i>
                                Arrow
                                <span>10</span>
                            </li>
                            <li>
                                <i class="ri-line-chart-line"></i>
                                Business
                                <span>50</span>
                            </li>
                            <li>
                                <i class="ri-shirt-line"></i>
                                Clothing
                                <span>234</span>
                            </li>
                            <li>
                                <i class="ri-chat-3-line"></i>
                                Communication
                                <span>457</span>
                            </li>
                            <li>
                                <i class="ri-creative-commons-nd-line"></i>
                                Content
                                <span>986</span>
                            </li>
                            <li>
                                <i class="ri-btc-line"></i>
                                Crypto
                                <span>26</span>
                            </li>
                        </ul>

                    </div>

                </div>
                {/* Categories End */}

                {/* Team Sidebar Section Start */}

                <div className="sidebar-02">

                    {/* Team Section Start */}
                    <div className="team-section">

                        {/* Team Categorie */}
                        <ul>
                            <li id='teams' >
                                Teams
                                <span><i class="ri-add-line"></i>Create Team</span>
                            </li>
                        </ul>
                        {/* Team Categorie End */}

                        <i class="ri-team-fill"></i>

                        <h2 id='team-heading' >No Teams Created Yet</h2>

                        <span id='team-desc' >Create your team and save icon styles </span>

                        <button id='create-team'><i class="ri-add-line"></i>Create team</button>
                    </div>
                    {/* Team Section End */}

                </div>

                {/* Team Sidebar Section End */}
            </div>
        </>
    )
}

export default Sidebar;