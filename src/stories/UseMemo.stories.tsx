import {Meta, Story} from "@storybook/react";
import React, {useCallback, useMemo, useState} from "react";

import {Select, SelectPropsType} from "../Select/Select";
import {Button} from "./Button";
import {BooksSecret, BooksType} from "./BooksSecret";


export default {
    title: 'useMemo',
    component: BooksSecret, Button
} as Meta

const Template: Story<BooksType> = (args) => <BooksSecret {...args} />;

const Users = React.memo(BooksSecret)

export const HelpForReactMemoExample: Story<BooksType> = (args) => {
    const [books, setBooks] = useState(["JS", "TS", "React", "CSS"])
    const [count, setCount] = useState(0)
    const AddBooks = () => {
    const newBooks = [...books, "Angular" + new Date().getTime()]
    setBooks(newBooks)
}
    const memoizedAddBooks = useMemo (()=> {
        return AddBooks},
        [])

    const memoizedAddBooks1 = useCallback(AddBooks, [books])

    const newBooks = useMemo(() => {
        return books.filter(u => u.toLocaleLowerCase().indexOf('a') > -1);
    }, [])


    return (
        <div>
            <Button value={"+"} onClick={() => setCount(count + 1)}/>
            <Button value={"+"} onClick={memoizedAddBooks1}/>
            {count}
            <Users {...args}  onClick = {memoizedAddBooks1} books={newBooks}/>
        </div>
    )
}
HelpForReactMemoExample.args= {
    onClick:() =>{}
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    let resultA = 1;
    let resultB = 1;
    resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResult = tempResult * i
        }
        return tempResult
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a:{resultA}
        </div>
        <div>
            Result for b:{resultB}
        </div>

    </>
}


// export const HelpForReactMemoExample = () => {
//     console.log("Memo")
//
//     const [users, setUsers] = useState(["Vova", "Kolya", "Olga", "Nik"])
//     const [count, setCount] = useState(0)
//     const addUsers = () => {
//         const newUsers = [...users, "Sveta" + new Date().getTime()]
//         setUsers(newUsers)
//     }
//     const newUsers = useMemo(() => {
//         console.log("BooksSecret")
//
//        return  users.filter(u => u.toLocaleLowerCase().indexOf('a') > -1);
//     }, [users])
//
//     return (
//         <div>
//             <button onClick={() => setCount(count + 1)}>+</button>
//             <button onClick={addUsers}>+</button>
//             {count}
//             <Users users={newUsers}/>
//         </div>
//     )
// }