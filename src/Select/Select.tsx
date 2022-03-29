import React from "react";

export type ItemsType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    onClick: (value: any) => void
    items: ItemsType[]
}

export function Select (props: SelectPropsType) {

    return (
        <div>
            <div>
                {props.items.filter(i=> i.value===props.value)}
            </div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}


