import React from "react";
import {ClockViewType} from "./Clock";

export const DigitalClockView: React.FC<ClockViewType> = ({date, value}) => {
    const getTwoDigitsString = (date: number) => date < 10 ? '0' + date : date
    const seconds = getTwoDigitsString(date.getSeconds())
    const minutes = getTwoDigitsString(date.getMinutes())
    const hours = getTwoDigitsString(date.getHours())
    return <div>
        <div>{value}</div>
        <span>{hours}
        </span>:
        <span>{minutes}
        </span>:
        <span>{seconds}
        </span>
    </div>
}