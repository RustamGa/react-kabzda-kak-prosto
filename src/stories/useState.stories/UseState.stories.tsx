import {Meta, Story} from "@storybook/react";
import {useMemo, useState} from "react";
import React from "react";
import {NewMessagesCounter} from "./NewMessagesCount";
import {Button} from "./Button";

export default {
    title: 'UseState demo',
    component:NewMessagesCounter, Button
} as Meta

type PropsType = {
    // count:number
    value:string
    // onClick:()=>void
}


export const Example:Story<PropsType> = (args) => {
    console.log('Example1')
    const generateData = () => {
        console.log('generateData')
        return 34522
        // let initialValue = useMemo(generateData, [])
    }
    const [count, setCount] = useState(generateData)

        let countIncrease = (state: number) => {
            return state + 1
        }

        return (
            <div>
                <Button {...args} onClick={() => setCount(countIncrease)}/>
                {/*<button onClick={()=>setCount(countIncrease)}>+</button>*/}
                <NewMessagesCounter count={count}/>
            </div>
        )
    }

Example.args={
    value:'+',

}

//
// export const Example1 = () => {
//     console.log('Example1')
//     // let initialValue = useMemo(generateData, [])
//     const [count, setCount]=useState(generateData)
//
//     let countIncrease = (state:number) => {
//         return state+1
//     }
//
//
//
// return (
//     <div>
//         <button onClick={()=>setCount(countIncrease)}>+</button>
//     <NewMessagesCounter count={count}/>
//
//     </div>
// )
// }
