import React from "react";


export type PropsType = {

}
export const NewMessagesCounter = (props:{count:number}) => {
    return <div>
        {props.count}
    </div>
}
