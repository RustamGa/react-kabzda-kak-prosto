import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

export default {
    title: 'Input stories',

}
export type InputPropsType = {
    value:string
    onClick:()=>void
}

const Template: Story = (args) => <input {...args} />;

export const inputStories = Template.bind({});
inputStories.args = {
    value: "yo",
}

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const trackValue = (event: ChangeEvent<HTMLInputElement>) => {
        {
            const currentValue = event.currentTarget.value
            setValue(currentValue)
        }
    }

    return (<>
            <input onChange={trackValue}/>--{value}--</>
    )
}
// создаем ссылку ref и импортируем из реакта useRef, изначально когда компонента только отрисовывается ссылки у нас
// нет и задаем ей начальное значение null

export const GetTrackValueUncontrolledInput = () => {
    const [value, setValue] = useState("")
    //внутри компоненты с помощью хука useRef создаем ссылку, дальше эту ссылку привязываем к элементу инпунт,
    // а дальше можем обратиться к этой ссылке
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
            {/*делаем привязку элемента input с помощью ссылки ref */}
            <input ref={inputRef}/>
            <button onClick={save}>save
            </button>
            -actual value: {value}--</>
}

export const ControlledInput:Story<InputPropsType> = (args) => {
    const [parentValue, setValue] = useState("")
    const onChange=(e:ChangeEvent<HTMLInputElement>)=> {
        setValue(e.currentTarget.value)
    }

    return (
    <input {...args}
        value = {parentValue}
        onChange={onChange}
    />
    )
}
ControlledInput.args={

}

export const ControlledCheckBox = () => {

    const [parentValue, setValue] = useState(true)
    const onChange=(e:ChangeEvent<HTMLInputElement>)=> {
        setValue (e.currentTarget.checked)
    }
    return (
        <input type={"checkBox"} checked={parentValue} onChange={onChange}/>
    )
}
export const ControlledSelected = () => {

    const [parentValue, setValue] = useState<string | undefined >("3")
    const onChange=(e:ChangeEvent<HTMLSelectElement>)=> {
        setValue (e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value ={"1"}> Minsk</option>
            <option value ={"2"}> Kiev</option>
            <option value ={"3"}> Moscow</option>
        </select>
    )
}







