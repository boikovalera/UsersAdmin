import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom';

export default function UsersListItem(props) {

    const { url } = useRouteMatch();
    const user = props.user
    
    return (
        
        <tr>
            <td>{user.id}</td>
            <td>            
                <Link to={`${url}/${user.id}`}>
                    {user.name}
                </Link>
            </td>            
            <td>{user.username}</td>
            <td>{user.email}</td>    
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>
                <button className="users-table-btn" 
                    onClick={props.onEditUser.bind(null, props.user)}>
                    edit
                </button>
                <button className="users-table-btn"
                    onClick={props.onRemoveUser.bind(null, props.user)}>
                    remove
                </button>
            </td>
        </tr>
    )
}