import React from "react";
import './Icon_Info.css'
import Contributors from "./Contributors";

const Icon_Info = (props) => {

    return (
        <>
            <div className="icon-info">

                <div className="icon-name-wrapper">
                    <h1>{props.icon_name}</h1>
                </div>

                <div className="tags-scroller">
                    <p>
                        {props.icon_tags}
                    </p>
                </div>

                <div className="icon-use-category">
                    {Array.isArray(props.icon_use)
                        ? props.icon_use.map((use, idx) => (
                            <a
                                href=""
                                key={idx}
                                style={{ marginRight: "8px" }}
                                className="badge use"
                            >
                                {use}
                            </a>
                        ))
                        : <a href="">{props.icon_use}</a>
                    }
                </div>

                <div className="icon-action-buttons ">
                    <a href="" id="icon-action-btn">See in action</a>

                    <div className="button-wrapper">
                        <button className="copy-btn">Copy SVG</button>
                        <button className="button-wrapper-icon"><i class="ri-arrow-up-s-line"></i></button>
                    </div>

                    <div className="button-wrapper">
                        <button className="copy-btn">Copy JSX</button>
                        <button className="button-wrapper-icon"><i class="ri-arrow-up-s-line"></i></button>
                    </div>
                </div>

                <div className="contributors">

                    <h2 id="label">Contributors:</h2>

                    <div className="avatar-group">
                        <Contributors
                            image="https://avatars.githubusercontent.com/u/11825403?v=4"
                        />
                        <Contributors
                            image="https://avatars.githubusercontent.com/u/11825403?v=4"
                        />
                        <Contributors
                            image="https://avatars.githubusercontent.com/u/11825403?v=4"
                        />
                    </div>

                </div>


            </div>
        </>
    )
}

export default Icon_Info;