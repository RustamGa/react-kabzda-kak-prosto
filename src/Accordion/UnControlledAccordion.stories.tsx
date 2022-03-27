import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from './Accordion'
import {action} from "@storybook/addon-actions";
import {Meta} from '@storybook/react';
import {UnControlledAccordion, UnControlledAccordionPropsType} from "./UnControlledAccordion";

export default {
    title: 'UnControlledAccordion stories',
    component: UnControlledAccordion,
} as Meta

const callBack = action("accordion mode change event fired");

const Template: Story< UnControlledAccordionPropsType> = (args) => <UnControlledAccordion{...args} />;
export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    titleValue: "Menu",

};

export const UnCollapsedMode = Template.bind({});
UnCollapsedMode.args = {
    titleValue: "Menu",

}

export const CollapsedChangingMode = () => {

    return (
        <UnControlledAccordion titleValue={"Users"}  />
    )
}
