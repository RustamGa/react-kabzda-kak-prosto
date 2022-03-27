import React from "react";

export type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} collapsed={props.collapsed}/>
            {/*<button onClick={()=> setCollapsed(!collapsed)}>Toggle</button>*/}
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <div>
            <h3 onClick={(e) => props.onChange()}>---{props.title}---</h3>
        </div>
    )
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

export default Accordion