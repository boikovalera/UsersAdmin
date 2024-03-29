import React, {useState, useEffect} from 'react'
import propTypes from 'prop-types'
import './Users.css'
import config from '../config';

export default function UserDetails(props) {

    const userId = props.userId;
    const [user, setUser] = useState(config.getEmptyObject);
    const disabled = true;
    
    useEffect(() => {
        fetch(`${config.userUrl}/${userId}`)
            .then(res => res.json())
            .then(setUser)
    }, [])
        
    return (                           
        <div className="form-style-2">            
            <form action="" method="post">
                <div className="form-style-2-heading">Main information</div>
                <label>
                    <span>Name: </span>
                    <input type="text" className="input-field" name="name" 
                        value={user.name} disabled={disabled}/>
                </label>
                <label>
                    <span>Username: </span>
                    <input type="text" className="input-field" name="username" 
                        value={user.username} disabled={disabled}/>
                </label>
                <label>
                    <span>Email: </span>
                    <input type="text" className="input-field" name="email" 
                        value={user.email} disabled={disabled}/>
                </label>
                <label>
                    <span>Phone: </span>
                    <input type="text" className="input-field" name="phone" 
                        value={user.phone} disabled={disabled}/>
                </label>
                <label>
                    <span>Website: </span>
                    <input type="text" className="input-field" name="website" 
                        value={user.website} disabled={disabled}/>
                </label> 
                <div className="form-style-2-heading">Address information</div>
                <label>
                    <span>Zipcode: </span>
                    <input type="text" className="input-field" name="field6" 
                        value={user.address.zipcode} disabled={disabled}/>
                </label>                 
                <label>
                    <span>City: </span>
                    <input type="text" className="input-field" name="field7" 
                        value={user.address.city} disabled={disabled}/>
                </label> 
                <label>
                    <span>Street: </span>
                    <input type="text" className="input-field" name="field8" 
                        value={user.address.street} disabled={disabled}/>
                </label> 
                <label>
                    <span>Suit: </span>
                    <input type="text" className="input-field" name="field9" 
                        value={user.address.suite} disabled={disabled}/>
                </label> 
                <label>
                    <span>Geo: </span>                        
                        lat: <input type="text" className="geo-number-field" name="tel_no_1" 
                            value={user.address.geo.lat} disabled={disabled}/> 
                        lng:  <input type="text" className="geo-number-field" name="tel_no_2" 
                            value={user.address.geo.lng} disabled={disabled}/>
                </label> 
                <div className="form-style-2-heading">Company information</div>
                <label>
                    <span>Name: </span>
                    <input type="text" className="input-field" name="field11" 
                        value={user.company.name} disabled={disabled}/>
                </label> 
                <label>
                    <span>CatchPhrase: </span>
                    <input type="text" className="input-field" name="field12" 
                        value={user.company.catchPhrase} disabled={disabled}/>
                </label> 
                <label>
                    <span>bs: </span>
                    <input type="text" className="input-field" name="field13" 
                        value={user.company.bs} disabled={disabled}/>
                </label>                
            </form>            
        </div>            
    )
}

UserDetails.propTypes = {
    userId: propTypes.number.isRequired
}