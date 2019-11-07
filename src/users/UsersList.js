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
        <React.Fragment>
            <div style={{position: 'relative'}}> 
                <h2 style={{textAlign: 'left'}}>Users Module</h2>                
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
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <UsersListItem 
                                key={user.id}  
                                user={user}/>
                        ))        
                    }
                </tbody>
            </table>        
        </React.Fragment>
    )
}