import React from 'react'
import './header.styles.scss';

import {
    Link,
    Redirect
  }
  from 'react-router-dom'

import {auth} from '../../firebase/firebase.utils'

import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import { selectCurrentClient } from '../../redux/client/client.selector';
import {setCurrentClient} from '../../redux/client/client.actions'


const Header = ({currentUser}) => (
    <div className='header'>
       {
            currentUser ?
              <div className='name-option'>{currentUser.displayName}</div>
            :

              <div />
            }
        <div className='options'>
       
          <Link className='option' to='/'>
            HOME
          </Link>
          {
            currentUser ?
              <div className='option' onClick={() => auth.signOut()}>SIGNOUT</div>
            :

              <div />
            }
          
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentClient
})

export default connect(mapStateToProps)(Header)