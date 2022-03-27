import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
export type RatingPropsType = {
    defaultValue?:RatingValueType
    onChange:(value:RatingValueType) => void
}

export function UnControlledRating (props:RatingPropsType) {
    const [value, setValue] = useState<RatingValueType>(props.defaultValue?props.defaultValue:0)
    return (
        <div>
            <Star  selected={value > 0} onClick={() => {setValue(1); props.onChange(1)}} />
            <Star  selected={value > 1} onClick={() => {setValue(2); props.onChange(2)}} />
            <Star  selected={value > 2} onClick={() => {setValue(3); props.onChange(3)}}/>
            <Star  selected={value > 3} onClick={() => {setValue(4); props.onChange(4)}}/>
            <Star  selected={value > 4} onClick={() => {setValue(5); props.onChange(5)}}/>
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
export default UnControlledRating