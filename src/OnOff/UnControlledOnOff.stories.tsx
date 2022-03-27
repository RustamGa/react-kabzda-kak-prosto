import React, {useState} from 'react';
import { Story} from '@storybook/react';

import {OnOffPropsType, UnControlledOnOff} from './UnControlledOnOff';

import {action} from "@storybook/addon-actions";
const callBack = action("on or off clicked")

export default {
    title: 'UnControlledOnOff stories',
    component: UnControlledOnOff,
}

const Template: Story<OnOffPropsType> = (args) => <UnControlledOnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    defaultOn: true,
    onChange: callBack
}
export const OffMode = Template.bind({});
OffMode.args = {
    defaultOn: false,
    onChange: callBack
}







