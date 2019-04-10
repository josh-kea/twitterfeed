import React from 'react'


export default function User (props) {
    return (
        <header className="user">
            <h2>@{props.username}</h2>
        </header>
    )
}