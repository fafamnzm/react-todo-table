import React from 'react'
import { Link } from 'react-router-dom'

export default function Head() {
    return (
        <header className="headHeader">
            <h1>Fafa Todo List</h1>
            <Link to="/">Index</Link>
            {' '} | {' '}
            <Link to="/about">About Us</Link>
        </header>
    )
}
