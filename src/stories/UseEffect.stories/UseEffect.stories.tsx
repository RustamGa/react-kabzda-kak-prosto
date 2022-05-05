import {Meta, Story} from "@storybook/react";
import {useEffect, useMemo, useState} from "react";
import React from "react";
import {NewMessagesCounter} from "./NewMessagesCount";
import {Button} from "./Button";
import {NewMessagesClock} from "./NewMessagesClock";
import {log} from "util";

export default {
    title: 'UseEffect demo',
    component: NewMessagesCounter, Button
} as Meta

type PropsType = {
    // count:number
    value: string
    message: string
    // onClick:()=>void
}


export const SimpleExample: Story<PropsType> = (args) => {

    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log("UseEffect every render")
        document.title = count.toString()
    })
    useEffect(() => {
        console.log("UseEffect only first render")
        document.title = count.toString()
    }, [])
    useEffect(() => {
        console.log("UseEffect first render and every counter change")
        document.title = count.toString()
    }, [count])

    return (
        <div>
            <Button {...args} onClick={() => setCount(count + 1)}/>
            <Button {...args} onClick={() => setFake(fake + 1)}/>
            {/*<button onClick={()=>setCount(countIncrease)}>+</button>*/}
            <NewMessagesCounter {...args} count={count} fake={fake}/>
        </div>
    )
}

SimpleExample.args = {
    value: '+',
    message: 'Hello',

}

export const SetTimeoutExample: Story<PropsType> = (args) => {

    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample');
    //
    useEffect(() => {
        setTimeout(() => {

            console.log('setTimeout')
            document.title = count.toString();
        }, 1000)
    }, [count])

    return (
        <div>
            <Button {...args} onClick={() => setCount(count + 1)}/>
            <Button {...args} onClick={() => setFake(fake + 1)}/>
            {/*<button onClick={()=>setCount(countIncrease)}>+</button>*/}
            <NewMessagesCounter {...args} count={count} fake={fake}/>
        </div>
    )
}

SetTimeoutExample.args = {
    value: '+',
    message: 'Hello',
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

export const SetIntervalClockExample: Story<PropsType> = (args) => {
    // var sec = 0, min = 0, hour = 0;
let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()

    const [min, setMin] = useState(m)
    const [hour, setHour] = useState(h)
    const [sec, setSec] = useState(s);
    const timer = () => setSec(sec + 1);

    console.log("SetIntervalClockExample")
    useEffect(
        () => {
            console.log("useEffect")
            if (sec > 60) {
                setSec(0)
                setMin(min+1)
            }
            if (min > 60){
                setMin(0)
                setHour(hour+1)
            }
            if (hour > 24) {
                setHour(0)
            }
            // const id = setInterval(timer, 1000);
            const id = setInterval(timer, 100);
            return () => clearInterval(id);

        },
        [sec]
    );

    return (
        <div>
            {/*<Button {...args} onClick={() => setCount(count+1)}/>*/}
            {/*<Button {...args} onClick={() => setFake(fake+1)}/>*/}
            {/*<button onClick={()=>setCount(countIncrease)}>+</button>*/}
            <NewMessagesClock {...args}
                                sec={sec}
                                min={min}
                                hour={hour}
            />
        </div>
    )
}

SetIntervalClockExample.args = {
    value: '+',
    message: 'Time',
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
