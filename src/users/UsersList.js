import React, {useState, useEffect} from 'react'
import './Users.css'
import config from '../config';
import UsersListItem from './UsersListItem';

export default function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(config.userUrl)
            .then(res => res.json())
            .then(setUsers)
    }, [])
        
    return (
        <table className="users-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>                    
                    <th>Username</th>
                    <th>Email</th>
                    {/* <th>Address</th> */}
                    <th>Phone</th>
                    <th>Website</th>
                    {/* <th>Company</th> */}
                    <th style={{width: '150px'}}></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <UsersListItem 
                            key={user.id} 
                            user={user} />
                    ))        
                }
            </tbody>
        </table>        
    )
}