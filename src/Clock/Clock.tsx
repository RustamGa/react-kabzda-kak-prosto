import React, {useEffect, useState} from "react";
import {setInterval} from "timers";
import s from "./Clock.module.css";

export type PropsType = {
    value: string
}

function Clock(props: PropsType) {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("TICK")
            setDate(new Date())
        }, 1000)
        return () =>
        {
            clearInterval(intervalID)
        }
    }, [])

    const getTwoDigitsString = (date: number) => date < 10 ? '0' + date : date


    const seconds = getTwoDigitsString(date.getSeconds())
    const minutes = getTwoDigitsString(date.getMinutes())
    const hours = getTwoDigitsString(date.getHours())

    return <div>
        <div>{props.value}</div>
        <span>{hours}
        </span>:
        <span>{minutes}
        </span>:
        <span>{seconds}
        </span>
    </div>
}

export default Clock