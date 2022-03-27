import React, {useState} from "react";

export type UnControlledAccordionPropsType = {
    titleValue: string


}

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

//         if (props.collapsed === true) {
//             return (
//                 <div>
//                     <AccordionTitle title= {props.titleValue}/>
//                     <ul>
//                         <AccordionBody/>
//                     </ul>
//                 </div>
//             )
//         }
//         else {
//             return (
//             <div>
//                 <AccordionTitle title= {props.titleValue}/>
//             </div>
//             )
//         }
// }
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