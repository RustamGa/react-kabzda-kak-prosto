import React from "react";


export type PropsType = {
message:string
    sec:number
    min:number
    hour:number
}

export const NewMessagesClock = ({...props}:PropsType) => {
    return <div>
        {props.message}:
        {props.hour}:
        {props.min}:
        {props.sec}
    </div>
}
