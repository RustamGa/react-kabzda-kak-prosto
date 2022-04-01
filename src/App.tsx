import React, {useState} from 'react';
import "./App.css"
// import {Accordion} from "./Accordion/Accordion";
import OnOff from "./OnOff/OnOff";
import Accordion from "./Accordion/Accordion";
import {RatingValueType} from "./Rating/Rating";
import Rating from './Rating/Rating';
import {UnControlledAccordion} from './Accordion/UnControlledAccordion';
import UnControlledRating from "./Rating/UnControlledRating";
import {UnControlledOnOff} from "./OnOff/UnControlledOnOff";


function App(props: any) {
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [value, setValue] = useState<RatingValueType>(0)
    let [on, setOn] = useState<boolean>(false)
    const items = [{title: 'Sergey', value: 1}, {title: 'Vova', value: 2}, {title: 'John', value: 3}]
    const onClick = (value: any) => {

    }

    return (
        <div className={"App"}>
            <PageTitle title={"This is App component"}/>
            <Accordion titleValue={"Menu"} onChange={() => setCollapsed(!collapsed)} collapsed={collapsed} items={items}
                       onClick={onClick}/>
            <Rating onClick={setValue} value={value}/>
            <UnControlledRating onChange={setValue}/>
            <UnControlledAccordion titleValue={"Users"}/>
            <OnOff on={on} onChange={setOn}/>
            <UnControlledOnOff defaultOn={false} onChange={setOn}/>{on.toString()}
        </div>
    )
}

function PageTitle(props: any) {
    return (
        <div>{props.title}</div>
    )
}


export default App;