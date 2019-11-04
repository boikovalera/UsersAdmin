import React from 'react'
import './App.css'
import { NavLink, } from 'react-router-dom';

export default function Header() {
    return (        
        <header className="header">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/users" activeClassName="active">Users</NavLink>
                </li>
                <li>
                    <NavLink to="/albums" activeClassName="active">Albums</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
            </ul>
            <h1>
                Users Admin
            </h1>
        </header>
    )
}