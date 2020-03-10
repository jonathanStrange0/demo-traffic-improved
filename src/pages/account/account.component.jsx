import React from 'react'
import './account.styles.scss'

import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import { selectCurrentClient } from '../../redux/client/client.selector';


import TrafficCard from '../../components/traffic-card/traffic-card.component'
import {firestore} from '../../firebase/firebase.utils'

class AccountPage extends React.Component {
    unsubscribeFromSnapshot = null;
    
    componentDidMount() {
        const {currentUser} = this.props 
        console.log(this.props);
        
        const userRef = firestore.collection('clients').doc()
        userRef.onSnapshot(async snapShot =>{
            console.log("This is a snapshot: ");
            console.log(snapShot.docs);
                        
        })        
    }

    render() {
        return(<span>Something should have happened</span>)
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentClient
  })

  
export default connect(mapStateToProps)(AccountPage)