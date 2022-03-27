import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import Rating, {RatingPropsType, RatingValueType} from './Rating';


export default {
    title: 'Rating stories',
    component: Rating,

}


const Template: Story<RatingPropsType> = (args) =><Rating {...args} />;

export const EmptyStars = Template.bind({});
EmptyStars.args = {
    value: 0,
    onClick: x => x
}

export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating}/>
};

