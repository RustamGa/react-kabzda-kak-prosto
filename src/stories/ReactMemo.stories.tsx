import {Meta} from "@storybook/react";
import {useState} from "react";
import React from "react";

export default {
    title: 'React.memo demo',
} as Meta

export const NewMessagesCounter = (props:{count:number}) => {

    return <div>
        {props.count}
    </div>
}

type UsersType ={
    users:Array<string>
}

export const UsersSecret = (props:UsersType ) => {
    console.log(props.users)
    return <div>
        {props.users.map((u,i)=> <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)
export const Example1 = () => {

    const [users, setUsers]= useState(["Vova", "Kolya", "Olga"])
    const [count, setCount]=useState(0)
    const addUsers = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()]
        setUsers(newUsers)
    }

return (
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={addUsers}>+</button>
    <NewMessagesCounter count={count}/>
    <Users users={users}/>
    </div>
)
}
