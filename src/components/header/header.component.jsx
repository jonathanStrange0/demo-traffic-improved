import React from 'react'
import './header.styles.scss';

import {
    Link,
    Redirect
  }
  from 'react-router-dom'

import {auth} from '../../firebase/firebase.utils'




const Header = ({currentUser}) => (
    <div className='header'>
        <div className='options'>
          <Link className='option' to='/'>
            CONTACT
          </Link>
          {
            currentUser ?
              <div className='option' onClick={() => {auth.signOut()}}>SIGNOUT</div>
            :

              <div />
            }
          
        </div>
    </div>
)

export default Header