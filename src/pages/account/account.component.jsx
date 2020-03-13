import React from 'react'
import './account.styles.scss'

import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import { selectCurrentClient } from '../../redux/client/client.selector';


import TrafficCard from '../../components/traffic-card/traffic-card.component'
import {firestore} from '../../firebase/firebase.utils'


const AccountPage = ({currentUser}) => (
    <div>
        {
            currentUser ?
            <span>{currentUser.id}</span>
            :
            <span>no user</span>

        }
    </div>
)


const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentClient
  })

  
export default connect(mapStateToProps)(AccountPage)