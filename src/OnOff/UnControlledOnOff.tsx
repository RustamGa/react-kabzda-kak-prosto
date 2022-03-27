import React, {useState} from "react";
export type OnOffPropsType = {
    defaultOn?: boolean
    onChange: (on:boolean) => void
}

export function UnControlledOnOff (props:OnOffPropsType) {
    let [on, setOn] =useState(props.defaultOn?props.defaultOn:false)

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        padding: "2px",
        backgroundColor: on ? "green": "white",
        display: "inline-block"
    }

    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        padding: "2px",
        backgroundColor: on ? "white": "red",
        display: "inline-block"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        padding: "3px",
        backgroundColor: on ? "green" : "red",
        display: "inline-block",
        borderRadius: "20px"
    }
const onClicked = () => {
   setOn(true)
    props.onChange(true)
}
const offClicked = () => {
    setOn(false)
    props.onChange(false)
}


    return <div>
    <div style={onStyle} onClick={onClicked}>On</div>
    <div style={offStyle} onClick={offClicked}>Off</div>
    <div style={indicatorStyle}></div>
        </div>
}
