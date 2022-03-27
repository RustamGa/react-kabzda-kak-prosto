import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





let a = {
    name: "rustam",
    age: 10,
    address: {
        city: "Moscow",
        country: "Russia",
    }
};
let users = [
    {
    name: "dimich",
    age: 14,
    address: {
        city: "velsk",
        country: "Russia",
    }
},
{
    name: "dim",
        age: 14,
    address: {
    city: "velsk",
        country: "Russia",
}
}
]
console.log (users[0].address.country);
