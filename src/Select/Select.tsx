import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'

export type ItemsType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    items: ItemsType[]
    onChange: (value: string) => void
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredItem, setHoveredItem] = useState(props.value)
    useEffect(() => {
        setHoveredItem(props.value)
    }, [props.value])
    const selectItem = props.items.find(i => i.value === props.value)
    const hovered = props.items.find(i => i.value === hoveredItem)
    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) { // пробегаемся по items от нуля до длины items,
                if (props.items[i].value === hoveredItem) {// если у текущего items его value равно value hovered то
                    // setHoveredItem(props.items[i + 1].value)// устанавливаем значение value следующего items в hovered
                    const pretendent = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendent) {
                        props.onChange(pretendent.value);
                        return;// прерываем цикл
                    }
                }
            }
            if (!selectItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }
    return (
        <>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}> {selectItem && selectItem.title} </span>
                {active && <div className={styles.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => setHoveredItem(i.value)}
                        className={hovered === i ? styles.selected : ''}
                        key={i.value}
                        onClick={() => onItemClick(i.value)}>
                        {i.title}
                    </div>)}
                </div>
                }

            </div>
        </>
    )
}


