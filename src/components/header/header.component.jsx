import React from 'react'
import './header.styles.scss';

import {
    Link
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
              <div className='option' onClick={() => auth.signOut()}>SIGNOUT</div>
            :
              <Link className='option' to='/'>
                SIGNIN
              </Link>
          }
          
        </div>
    </div>
)

export default Header