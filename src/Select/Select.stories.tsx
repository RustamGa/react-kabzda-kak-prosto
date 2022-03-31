import React, {useState} from 'react';
import {Story} from '@storybook/react';

import {Meta} from '@storybook/react';
import {Select, SelectPropsType} from "./Select";
import {Accordion, AccordionPropsType} from "../Accordion/Accordion";
//
export default {
    title: 'Select',
    component: Select,

} as Meta

const Template: Story<SelectPropsType> = (args) => <Select {...args} />;


export const WithValue: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState("3")
    return (
        <Select {...args} value={value} onChange={(value) => setValue(value)}/>
    )
}
WithValue.args = {

    items: [
        {value: '1', title: 'Kiev'},
        {value: '2', title: 'Chernigov'},
        {value: '3', title: 'Barvenkovo'}
    ]
};

// export const WithoutValue = Template.bind({});
//
// WithoutValue.args = {
//     items:[
//         {value:'1', title:'Kiev'},
//         {value:'2', title:'Chernigov'},
//         {value:'3', title:'Barvenkovo'}
//     ]
// };
export const WithoutValue: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState('')
    return (
        <Select {...args} value={value} onChange={(value) => setValue(value)}/>
    )
}
WithoutValue.args = {
    items: [
        {title: 'Sergey', value: '1'},
        {title: 'Vova', value: '2'},
        {title: 'John', value: '3'}],
}
