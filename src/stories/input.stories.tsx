import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';


export default {
    title: 'Input stories',

}

const Template: Story = (args) => <input {...args} />;

export const inputStories = Template.bind({});
inputStories.args = {
    value: "yo",

}

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState("")

    return (<>
            <input onChange={(event)=> {
                const currentValue = event.currentTarget.value
                setValue(currentValue)
            }} />--{value}--</>
    )
}





