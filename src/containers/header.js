import React from 'react';
import {Link} from 'react-router-dom';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Container>
                
                    
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                    
                   
                    <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
                    
            
                
            </Header.Container>
            {children}
            

            

        </Header>
    )
}


