import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from './Accordion'
import {action} from "@storybook/addon-actions";
import {Meta} from '@storybook/react';

export default {
    title: 'components/Accordion stories',
    component: Accordion,
} as Meta

const callBack = action("accordion mode change event fired");

const Template: Story<AccordionPropsType> = (args) => <Accordion{...args} />;
export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    titleValue: "Menu",
    collapsed: false,
    onChange: callBack
};

export const UnCollapsedMode = Template.bind({});
UnCollapsedMode.args = {
    titleValue: "Menu",
    collapsed: true,
    onChange: callBack
}

export const CollapsedChangingMode = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <Accordion titleValue={"Menu"} onChange={() => setValue(!value)} collapsed={value}/>
    )
}
