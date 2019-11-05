import React, {useState, useEffect} from 'react'
import './Users.css'
import config from '../config';
import {Route, useRouteMatch, BrowserRouter as Router } from 'react-router-dom';
import UsersListItem from './UsersListItem';
import UserDetails from './UserDetails';

export default function UsersList() {
    const { url } = useRouteMatch();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(config.userUrl)
            .then(res => res.json())
            .then(setUsers)
    }, [])
    
    function onAddUser() {        
        console.log("add")
        /* return (            
            <Route path={`${url}/add`} render={({match}) => {
                return <UserDetails userId={match.params.id} type="add"/>
            }} />
        );                           */
    }

    function onEditUser(user) {
        console.log("edit", user)  
    }

    function onRemoveUser(user) {
        console.log("remove", user)  
    }

    return (
        <React.Fragment>
            <div style={{position: 'relative'}}> 
                <h2 style={{textAlign: 'left'}}>Users Module</h2>
                <button className="users-table-btn" 
                        style={{position: 'absolute', right: '5px', top: '0'}}
                        onClick={onAddUser}>Add</button>
            </div>

            <table className="users-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>                    
                        <th>Username</th>
                        <th>Email</th>                    
                        <th>Phone</th>
                        <th>Website</th>                    
                        <th style={{width: '150px'}}></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <UsersListItem 
                                key={user.id}  
                                user={user} 
                                onEditUser={onEditUser}
                                onRemoveUser={onRemoveUser}/>
                        ))        
                    }
                </tbody>
            </table>        
        </React.Fragment>
    )
}