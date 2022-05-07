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
value:string
}

export const BaseExample: Story<PropsType> = (args) => {

    return (
        <div >
            <Clock {...args} />
        </div>
    )
}

BaseExample.args = {
    value: 'TIME'

}