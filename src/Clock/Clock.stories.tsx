import {NewMessagesCounter} from "../stories/UseEffect.stories/NewMessagesCount";
import {Button} from "../stories/UseEffect.stories/Button";
import {Meta, Story} from "@storybook/react";
import React, {useEffect, useState} from "react";
import Clock from "./Clock";
import s from "./Clock.module.css"

export default {
    title: 'Clock demo',
    component: Clock
} as Meta

type PropsType = {
    value: string
    mode: 'DIGITAL' | 'ANALOG'
}

export const BaseDigitalExample: Story<PropsType> = (args) => {

    return (
        <div>
            <Clock {...args} />
        </div>
    )
}


BaseDigitalExample.args = {
    value: 'TIME',
    mode: 'DIGITAL'

}
export const BaseAnalogExample: Story<PropsType> = (args) => {

    return (
        <div>
            <Clock {...args} />
        </div>
    )
}


BaseAnalogExample.args = {
    value: 'TIME',
    mode: 'ANALOG'

}
