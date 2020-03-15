import React from 'react'
import './account.styles.scss'

import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import { selectCurrentClient, selectIsClientLoaded } from '../../redux/client/client.selector';
import {createClientTrafficAddress} from '../../redux/client/client.actions';
import {fetchClientTrafficStartAsync} from '../../redux/client/client.actions'
import TrafficContainer from '../../components/traffic-container/traffic-container.component.jsx'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {firestore, auth, convertClientTrafficSnapShotToMap} from '../../firebase/firebase.utils'


class AccountPage extends React.Component{

    constructor(){
      super()
      this.state = {
        trafficAddresses: []
      }
    }
    unsubscribeFromSnapshot = null

    componentDidMount(){
        const { currentUser, isUserLoaded } = this.props
        if (isUserLoaded) {
            // console.log(currentUser);

          const collectionRef = firestore.collection('clients').doc(currentUser.uid).collection('traffic')
            collectionRef.onSnapshot( async snapshot => {
                this.setState= {trafficAddresses : convertClientTrafficSnapShotToMap(snapshot)}
            })
        }

    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const {currentUser} = this.props
        // console.log(currentUser.uid);
        const collectionRef = firestore.collection('clients').doc(currentUser.uid).collection('traffic')
        collectionRef.onSnapshot( async snapshot => {
            // console.log(snapshot);
            const mappedSnapshot = await convertClientTrafficSnapShotToMap(snapshot)
            console.log( mappedSnapshot);
        })
    }


    render() {
        const { currentUser, isUserFetching } = this.props
        // console.log(isUserLoaded);
        // console.log(currentUser);

        return(
            <div>
                {
                    isUserFetching ?
                    <span>{
                      <TrafficContainer currentUser={this.state.trafficAddresses} />
                    } </span>
                    :
                    <span>no user</span>

                }
                <Form onSubmit={this.handleSubmit}>
                    <div className='buttons'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({

    currentUser:selectCurrentClient,
    isUserFetching: selectIsClientLoaded,
    // clientTraffic: selectClientTrafficAddresses
  })

const mapDispatchToProps = dispatch => ({
    createClientTrafficAddress: (address) => dispatch(createClientTrafficAddress(address))
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
