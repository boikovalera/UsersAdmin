import React from 'react'
import PropTypes from '../propTypes';
import {Link, useRouteMatch} from 'react-router-dom';

export default function UsersListItem(props) {

    const { url } = useRouteMatch();
    const user = props.user
    
    return (
        <tr>
            <td>
                <Link to={`${url}/${user.id}`}>
                    {user.id}
                </Link>
            </td>
            <td>
                <Link to={`${url}/${user.id}`}>
                    {user.name}
                </Link>
            </td>
            <td>
                <Link to={`${url}/${user.id}`}>
                    {user.username}
                </Link>
            </td>
            <td>
                <Link to={`${url}/${user.id}`}>
                    {user.email}
                </Link>
            </td>
            <td>
                <Link to={`${url}/${user.id}`}>
                    {user.phone}
                </Link>
            </td>
            <td>
                <Link to={`${url}/${user.id}`}>
                    {user.website}
                </Link>
            </td>
        </tr>
    )
}

UsersListItem.prototype = {
    user: PropTypes.user.isRequired
}