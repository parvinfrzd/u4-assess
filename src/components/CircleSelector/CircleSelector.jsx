import React from "react";
import './CircleSelector.css'

function CircleSelector(props) {
    return (
        <div className="CircleSelector">
            <button onClick={()=>{props.updateBtn1()}} className={props.btn1Selected ? 'selected' : null }>{props.text1}</button>
            <button onClick={()=>{props.updateBtn2()}} className={props.btn2Selected ? 'selected' : null }>{props.text2}</button>
            <button onClick={()=>{props.updateBtn3()}} className={props.btn3Selected ? 'selected' : null }>{props.text3}</button>
            <button onClick={()=>{props.updateBtn4()}} className={props.btn4Selected ? 'selected' : null }>{props.text4}</button>
        </div>
    )
}

export default CircleSelector;