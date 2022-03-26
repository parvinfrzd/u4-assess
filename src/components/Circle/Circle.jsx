import React from "react";
import './Circle.css'

function Circles(props) {
    return (
        <div className="Circles">
            <div className={props.crcl1Selected ? 'selected' : null }>{props.text1}</div>
            <div className={props.crcl2Selected ? 'selected' : null }>{props.text2}</div>
            <div className={props.crcl3Selected ? 'selected' : null }>{props.text3}</div>
            <div className={props.crcl4Selected ? 'selected' : null }>{props.text4}</div>
        </div>
    )
}

export default Circles;