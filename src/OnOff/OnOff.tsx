import React, {useState} from "react";
export type OnOffPropsType = {
    on: boolean
    onChange: (on:boolean) => void
}
function OnOff (props:OnOffPropsType) {
   // let [on, setOn] =useState(false)

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        padding: "2px",
        backgroundColor: props.on ? "green": "white",
        display: "inline-block"
    }

    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        padding: "2px",
        backgroundColor: props.on ? "white": "red",
        display: "inline-block"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        padding: "3px",
        backgroundColor: props.on ? "green" : "red",
        display: "inline-block",
        borderRadius: "20px"
    }
const onClicked = () => {
    props.onChange(true)
}
const offClicked = () => {
    props.onChange(false)
}


    return <div>
    <div style={onStyle} onClick={onClicked}>On</div>
    <div style={offStyle} onClick={offClicked}>Off</div>
    <div style={indicatorStyle}></div>
        </div>
}
export default OnOff