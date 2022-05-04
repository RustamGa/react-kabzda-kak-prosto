import {Meta, Story} from "@storybook/react";
import {useEffect, useMemo, useState} from "react";
import React from "react";
import {NewMessagesCounter} from "./NewMessagesCount";
import {Button} from "./Button";

export default {
    title: 'UseEffect demo',
    component:NewMessagesCounter, Button
} as Meta

type PropsType = {
    // count:number
    value:string
    message:string
    // onClick:()=>void
}


export const SimpleExample:Story<PropsType> = (args) => {

    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample')

    useEffect(()=>{
        console.log("UseEffect every render")
        document.title=count.toString()
    })
    useEffect(()=>{
        console.log("UseEffect only first render")
        document.title=count.toString()
    }, [])
    useEffect(()=>{
        console.log("UseEffect first render and every counter change")
        document.title=count.toString()
    },[count])

        return (
            <div>
                <Button {...args} onClick={() => setCount(count+1)}/>
                <Button {...args} onClick={() => setFake(fake+1)}/>
                {/*<button onClick={()=>setCount(countIncrease)}>+</button>*/}
                <NewMessagesCounter {...args} count={count} fake={fake}/>
            </div>
        )
    }

SimpleExample.args={
    value:'+',
    message:'Hello',

}

export const SetTimeoutExample:Story<PropsType> = (args) => {

    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample')

    ;
    //
    useEffect(()=>{
        setTimeout(()=>{

            console.log('setTimeout')
            document.title=count.toString();
        }, 1000)
    },[count])

    return (
        <div>
            <Button {...args} onClick={() => setCount(count+1)}/>
            <Button {...args} onClick={() => setFake(fake+1)}/>
            {/*<button onClick={()=>setCount(countIncrease)}>+</button>*/}
            <NewMessagesCounter {...args} count={count} fake={fake}/>
        </div>
    )
}

SetTimeoutExample.args={
    value:'+',
    message:'Hello',
}

export const SetIntervalExample:Story<PropsType> = (args) => {

    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample')

    ;
    //
    useEffect(()=>{
        setInterval(()=>{
            console.log('tick'+count)
            setCount((state)=>state+1)
        }, 1000)
    },[])

    return (
        <div>
            {/*<Button {...args} onClick={() => setCount(count+1)}/>*/}
            {/*<Button {...args} onClick={() => setFake(fake+1)}/>*/}
            {/*<button onClick={()=>setCount(countIncrease)}>+</button>*/}
            <NewMessagesCounter {...args} count={count} fake={fake}/>
        </div>
    )
}

SetIntervalExample.args={
    value:'+',
    message:'Hello',
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
