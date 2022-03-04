import React from 'react';
import {NavLink} from 'react-router-dom';

const Links = () => {
    return (
        <div>
            <button><NavLink to={'/'}
                             style={{textDecoration: 'none'}}>Profile</NavLink></button>
            <button><NavLink to={'registration'}
                             style={{textDecoration: 'none'}}>Registration</NavLink></button>
            <button><NavLink to={'login'}
                             style={{textDecoration: 'none'}}>Login</NavLink></button>
            <button><NavLink to={'newPassword'}
                             style={{textDecoration: 'none'}}>NewPassword</NavLink></button>
            <button><NavLink to={'passwordRecovery'}
                             style={{textDecoration: 'none'}}>PasswordRecovery</NavLink></button>
            <button><NavLink to={'test'}
                             style={{textDecoration: 'none'}}>Test</NavLink></button>
        </div>
    );
};

export default Links;