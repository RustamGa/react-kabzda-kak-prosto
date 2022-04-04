import React from "react";

export type UsersType = {
    users: Array<string>
}
export const UsersSecret = (props: UsersType) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}