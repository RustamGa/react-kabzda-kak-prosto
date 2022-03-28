import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import OnOff, {OnOffPropsType} from './OnOff';
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff stories',
    component: OnOff,
} as ComponentMeta<typeof OnOff>

const callBack = action("on or off clicked")

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />; // функция для удобстава прокидывания
// пропсов

export const OnMode = Template.bind({});
//
OnMode.args = {
    on: true,
    onChange: callBack
}
export const OffMode = Template.bind({});
OffMode.args = {
    on: false,
    onChange: callBack
}
export const OnOffModeChanging = () => {
    const [on, setOn] = useState<boolean>(false)
    return (
        <OnOff on={on} onChange={setOn}/>
    )

}






