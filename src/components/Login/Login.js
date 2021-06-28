import React from 'react';
import loginStyle from './login.module.css';
import logos from '../../images/cta-logo-one.svg';
import logoStudios from '../../images/cta-logo-two.png';

const Login = () => {
    return(
        <div className={loginStyle.loginContainer}>
            <div className={loginStyle.content}>
            <img className={loginStyle.logoOne} src={logos} alt=''/>
            <a>GET ALL THERE</a>
            <p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
                 As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
            <img className={loginStyle.logoTwo} src={logoStudios} alt=''/>
            </div>
        </div>
    )
}

export default Login