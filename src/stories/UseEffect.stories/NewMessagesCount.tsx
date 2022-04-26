import React from "react";


export type PropsType = {
message:string
    count:number
    fake:number
}

export const NewMessagesCounter = ({...props}:PropsType) => {
    return <div>
        {props.message}
        {props.count}
        {props.fake}
    </div>
}
