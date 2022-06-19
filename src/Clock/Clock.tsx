import React, {useEffect, useState} from "react";
import {setInterval} from "timers";
// import "./AnalogClockView.css";

import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

export type PropsType = {
    value: string
    mode: 'DIGITAL' | 'ANALOG'
}

function Clock(props: PropsType) {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("TICK")
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])


    let view;

    switch (props.mode) {
        case "ANALOG":
            view = <AnalogClockView date={date} value={'ANALOG'} />
            break;
        case "DIGITAL":
        default:
            view = <DigitalClockView date={date} value={'DIGITAL'}/>
    }

    return <div>
        {view}
    </div>
}

export type ClockViewType = {
    date: Date
    value: string
}


export default Clock