import React from 'react';
import ReactDOM from 'react-dom';
function formatName(user){
    return user.firstName + ' ' + user.lastName;
}
function greetingUser(user){
    if(user){
        return <h1>Hello, {formatName(user)}!</h1>
    }else{
        return <h1>Hello, Strager!</h1>
    }
}

const user = {
    firstName:'Jagan',
    lastName:'Bravo'
};
const element = 
    <div>
        <h1>{greetingUser(user)}</h1>
        <h2>Content is available</h2>
    </div>

ReactDOM.render(
    element,
    document.getElementById('root')
  );
