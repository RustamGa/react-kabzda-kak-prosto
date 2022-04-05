import React from "react";

export type BooksType = {
    books: Array<string>
    onClick:() => void
}
export const BooksSecret = (props: BooksType) => {
    console.log("BooksSecret")
    return <div>
        {props.books.map((b, i) => <div key={i}>{b}</div>)}
    </div>
}