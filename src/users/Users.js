import React from 'react'
import './Users.css'
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import UsersList from './UsersList';
import UserDetails from './UserDetails';

export default function Users() {
    const { url } = useRouteMatch();

    return (
        <div className="users">
            <div style={{position: 'relative'}}> 
                <h2 style={{textAlign: 'left'}}>Users Module</h2>
                <button className="users-table-btn" style={{position: 'absolute', right: '5px', top: '0'}}>Add</button>
            </div>
            <Switch>
                <Route path={`${url}/:id`} render={({match}) => {
                    return <UserDetails userId={match.params.id} />
                }} />
                <Route path={`${url}`} render={() => {
                    return <UsersList />
                }} />                
            </Switch>
        </div>
    )
}