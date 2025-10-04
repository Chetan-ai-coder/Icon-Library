import React from "react";
import './Contributors.css'

const Contributors = (props) => {

    // const [imageUrl, setImageUrl] = useState("");

    return (
        <>
            {/* Image in these <a> */}
            <a 
            href={props.image} 
            className="avatar">
             <img src={props.image} alt="" className="avatar-image" />
            </a>
        </>
    )
}

export default Contributors;