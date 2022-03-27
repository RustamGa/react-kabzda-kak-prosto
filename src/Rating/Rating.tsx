import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingValueType
    onClick: (value:RatingValueType) => void
}
export function Rating(props:RatingPropsType) {

    return (
        <div>
            <Star  selected={props.value > 0} onClick={() => props.onClick(1)} />
            <Star  selected={props.value > 1} onClick={() => props.onClick(2)} />
            <Star  selected={props.value > 2} onClick={() => props.onClick(3)}/>
            <Star  selected={props.value > 3} onClick={() => props.onClick(4)}/>
            <Star  selected={props.value > 4} onClick={() => props.onClick(5)}/>
            {/*<Star  selected={value > 1}/><button onClick = {()=> {setValue(2)}}>1</button>*/}
            {/*<Star  selected={value > 2}/><button onClick = {()=> {setValue(3)}}>2</button>*/}
            {/*<Star  selected={value > 3}/><button onClick = {()=> {setValue(4)}}>3</button>*/}
            {/*<Star  selected={value > 4}/><button onClick = {()=> {setValue(5)}}>4</button>*/}

        </div>
    )
}

type StarPropsType = {
    selected:boolean
    onClick:  () => void

}
function Star(props:StarPropsType) {
    return (
        <span onClick = {() => {props.onClick()}}> {props.selected?<b>star</b>:'star'}</span>
    // props.selected ? <span><b>star </b></span>:
    // <span>star </span>
)
        // if (props.selected) {
        //     return <span ><b>star </b></span>
        // }
        // else {
        //     return <span>star </span>
        // }

}
export default Rating