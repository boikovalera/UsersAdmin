import React from 'react'
import './Users.css'
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import UsersList from './UsersList';
import UserDetails from './UserDetails';

export default function Users() {
    const { url } = useRouteMatch();

    return (
        <div className="users">            
            <Switch>                
                <Route path={`${url}/:id`} render={({match}) => {
                    return <UserDetails userId={match.params.id} type="view"/>
                }} />
                <Route path={`${url}`} render={() => {
                    return <UsersList/>
                }} />                
            </Switch>
        </div>
    )
}