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

const onClickCallBack = action("some item was clicked");

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    titleValue: "Menu",
    collapsed: false,
    onChange: callBack,
    items: [],
};

export const UnCollapsedMode = Template.bind({});
UnCollapsedMode.args = {
    titleValue: "Menu",
    collapsed: true,
    onChange: callBack,
    items: [{title: 'Sergey', value: 1}, {title: 'Vova', value: 2}, {title: 'John', value: 3}],
    onClick: onClickCallBack
}

export const CollapsedChangingMode: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <Accordion {...args} collapsed={value} onChange={() => setValue(!value)} />
    )
}

CollapsedChangingMode.args = {
    collapsed: true,
    titleValue: "Menu",
    items: [{title: 'Sergey', value: 1}, {title: 'Vova', value: 2}, {title: 'John', value: 3}],
    onClick: (value) =>{alert(`user with ID ${value} should be happy`)}}