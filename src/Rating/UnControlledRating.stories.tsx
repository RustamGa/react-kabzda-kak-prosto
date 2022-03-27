import React from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import UnControlledRating, {RatingPropsType} from "./UnControlledRating";

import {action} from "@storybook/addon-actions";


export default {
    title: 'UnControlledRating stories',
    component: UnControlledRating,
}
const callBack = action("Rating changed inside the component")

const Template: Story<RatingPropsType> = (args) =><UnControlledRating {...args} />;

export const EmptyStar = Template.bind({});
EmptyStar.args = {
    defaultValue: 0,
    onChange: callBack,
}
export const Rating1 = Template.bind({});
Rating1.args = {
    defaultValue: 1,
    onChange: callBack,
}
export const Rating2 = Template.bind({});
Rating2.args = {
    defaultValue: 2,
    onChange: callBack,
}


