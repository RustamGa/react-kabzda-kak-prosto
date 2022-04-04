import {Meta} from "@storybook/react";
import React, {useMemo, useState} from "react";
import {UsersSecret} from "./UsersSecret";


export default {
    title: 'useMemo',
} as Meta

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

const Users = React.memo(UsersSecret)


export const HelpForReactMemoExample = () => {
    console.log("Memo")

    const [users, setUsers] = useState(["Vova", "Kolya", "Olga", "Nik"])
    const [count, setCount] = useState(0)
    const addUsers = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()]
        setUsers(newUsers)
    }
    const newUsers = useMemo(() => {
        console.log("UsersSecret")

       return  users.filter(u => u.toLocaleLowerCase().indexOf('a') > -1);
    }, [users])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={addUsers}>+</button>
            {count}
            <Users users={newUsers}/>
        </div>
    )
}