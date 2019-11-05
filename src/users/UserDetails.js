import React, {useState, useEffect} from 'react'
import './Users.css'
import config from '../config';

export default function UserDetails(props) {

    const userId = props.userId;
    const type = props.type;

    const [user, setUser] = useState(config.getEmptyObject);
    
    //const disabled = true;  //НЕ доступны для редактирования
    //const disabled = false;   //Доступны для редактирования
    const disabled = type === 'view' ? true : false;
    const visibleButton = type === 'view' ? {display: 'none'} : {};

    useEffect(() => {
        fetch(`${config.userUrl}/${userId}`)
            .then(res => res.json())
            .then(setUser)
    }, [])
    
    function onChangeData(e) {     
        console.log(e.target.name + " -> " + e.target.value)
        
        //[e.target.name] = e.target.value;
    }

    return (                           
        <div className="form-style-2">            
            <form action="" method="post">
                <div className="form-style-2-heading">Main information</div>
                <label>
                    <span>Name: </span>
                    <input type="text" className="input-field" name="name" 
                        value={user.name} onChange={onChangeData} disabled={disabled}/>
                </label>
                <label>
                    <span>Username: </span>
                    <input type="text" className="input-field" name="username" 
                        value={user.username} onChange={onChangeData} disabled={disabled}/>
                </label>
                <label>
                    <span>Email: </span>
                    <input type="text" className="input-field" name="email" 
                        value={user.email} onChange={onChangeData} disabled={disabled}/>
                </label>
                <label>
                    <span>Phone: </span>
                    <input type="text" className="input-field" name="phone" 
                        value={user.phone} onChange={onChangeData} disabled={disabled}/>
                </label>
                <label>
                    <span>Website: </span>
                    <input type="text" className="input-field" name="website" 
                        value={user.website} onChange={onChangeData} disabled={disabled}/>
                </label> 
                <div className="form-style-2-heading">Address information</div>
                <label>
                    <span>Zipcode: </span>
                    <input type="text" className="input-field" name="field6" 
                        value={user.address.zipcode} onChange={onChangeData} disabled={disabled}/>
                </label>                 
                <label>
                    <span>City: </span>
                    <input type="text" className="input-field" name="field7" 
                        value={user.address.city} onChange={onChangeData} disabled={disabled}/>
                </label> 
                <label>
                    <span>Street: </span>
                    <input type="text" className="input-field" name="field8" 
                        value={user.address.street} onChange={onChangeData} disabled={disabled}/>
                </label> 
                <label>
                    <span>Suit: </span>
                    <input type="text" className="input-field" name="field9" 
                        value={user.address.suite} onChange={onChangeData} disabled={disabled}/>
                </label> 
                <label>
                    <span>Geo: </span>                        
                        lat: <input type="text" className="geo-number-field" name="tel_no_1" 
                            value={user.address.geo.lat} onChange={onChangeData} disabled={disabled}/> 
                        lng:  <input type="text" className="geo-number-field" name="tel_no_2" 
                            value={user.address.geo.lng} onChange={onChangeData} disabled={disabled}/>
                </label> 
                <div className="form-style-2-heading">Company information</div>
                <label>
                    <span>Name: </span>
                    <input type="text" className="input-field" name="field11" 
                        value={user.company.name} onChange={onChangeData} disabled={disabled}/>
                </label> 
                <label>
                    <span>CatchPhrase: </span>
                    <input type="text" className="input-field" name="field12" 
                        value={user.company.catchPhrase} onChange={onChangeData} disabled={disabled}/>
                </label> 
                <label>
                    <span>bs: </span>
                    <input type="text" className="input-field" name="field13" 
                        value={user.company.bs} onChange={onChangeData} disabled={disabled}/>
                </label> 
                <label style={visibleButton}>
                    <span> </span>
                    <input type="submit" value="Submit" />
                </label>
            </form>            
        </div>            
    )
}