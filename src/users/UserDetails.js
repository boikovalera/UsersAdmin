import React, {useState, useEffect} from 'react'
import config from '../config';

export default function UserDetails({userId}) {
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        fetch(`${config.userUrl}/${userId}`)
            .then(res => res.json())
            .then(setUser)
    }, [])
    
    return (
        <div>
            <h3>Users Details</h3>
            <h4>Name: {user.name}</h4>
            <h4>User name: {user.username}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Phone: {user.phone}</h4>
            <h4>Website: {user.website}</h4>
        </div>
    )
}