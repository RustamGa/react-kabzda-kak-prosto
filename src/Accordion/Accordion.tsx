import React from "react";

export type ItemsType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
    items: Array<ItemsType>
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} collapsed={props.collapsed}/>
            {/*<button onClick={()=> setCollapsed(!collapsed)}>Toggle</button>*/}
            {props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
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

type AccordionBodyType = {
    items: ItemsType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {
                props.onClick(i.value)
            }} key={index}>{i.title}</li>)}
        </ul>
    )
}

export default Accordion