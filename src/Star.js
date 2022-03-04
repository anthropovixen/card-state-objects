import React from "react";
import starimage from "./images/star-empty.png";
import starimageyellow from "./images/star-filled.png";

export default function star(props) {

    const starIcon = props.isFilled ? starimageyellow : starimage;
    
    return <img src={starIcon} className="card--favorite" onClick={props.handleClick}/>;
}
