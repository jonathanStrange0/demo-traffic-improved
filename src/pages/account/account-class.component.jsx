import React from 'react'
import './account.styles.scss'

import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import { selectCurrentClient, selectIsClientLoaded , } from '../../redux/client/client.selector';
import {fetchClientTrafficStartAsync} from '../../redux/client/client.actions'


import {firestore, auth, convertClientTrafficSnapShotToMap} from '../../firebase/firebase.utils'


class AccountPage extends React.Component{
    unsubscribeFromSnapshot = null
     
    componentDidMount(){
        const { fetchClientTrafficStartAsync } = this.props
        fetchClientTrafficStartAsync()
         
    }

    // componentWillUpdate() {
    //     const { currentUser, isUserLoaded } = this.props
    //     if (isUserLoaded) {
    //         // const userId = currentUser.id
    //         console.log(currentUser);
            
    //         const collectionRef = firestore.collection('clients').doc(currentUser.uid).collection('traffic')
    //         collectionRef.onSnapshot( async snapshot => {
    //             // console.log(snapshot);
                
    //             console.log(convertClientTrafficSnapShotToMap(snapshot));
    //         })
    //     }   
    // }    
    
    render() {
        const { currentUser, isUserFetching } = this.props
        // console.log(isUserLoaded);
        console.log(currentUser);
                
        return(
            <div>
                {
                    isUserFetching ?
                    <span>{currentUser.id} </span>
                    :
                    <span>no user</span>

                }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    
    currentUser:selectCurrentClient,
    isUserFetching: selectIsClientLoaded
  })

const mapDispatchToProps = dispatch => ({
    fetchClientTrafficStartAsync: () => dispatch(fetchClientTrafficStartAsync)
})
   
export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)