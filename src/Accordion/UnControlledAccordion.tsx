import React, {useReducer} from "react";
import {reducer} from "./Reducer";

export type UnControlledAccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    const [state, dispatch] = useReducer(reducer, {collapsed: true});
    // const [collapsed, setCollapsed] = useState(true)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={() => dispatch({type: "TOGGLE-CONSTANT"})}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>---{props.title}---</h3>

}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}