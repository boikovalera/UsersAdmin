import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom';

function UsersListItem({user}) {
    const { url } = useRouteMatch();

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
            {/* <td>{user.address.zipcode} {user.address.city} {user.address.city} {user.address.street} {user.address.suite}</td> */}
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>
                <button className="users-table-btn">edit</button>
                <button className="users-table-btn">remove</button>
            </td>
        </tr>
    )
}

export default UsersListItem