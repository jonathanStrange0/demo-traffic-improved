import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
// import AccountPage from './pages/account/account.component'
import AccountPage from './pages/account/account-class.component'

import {Switch, Route, Redirect} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import {connect} from 'react-redux'
import {setCurrentClient} from './redux/client/client.actions'
import {selectCurrentClient} from './redux/client/client.selector'
import {createStructuredSelector} from 'reselect'

class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentClient} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
         setCurrentClient({
             id:snapShot.id,
             ...snapShot.data()
           })

        //  console.log(this.props);
         
        })
      }
      setCurrentClient(userAuth)
      // this.setState({currentUser:userAuth})
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // cancel the auth listener when the component will unmount
  }

  render() {
    return (
      
      <div>
          <Header />
          <Switch>
            <Route exact   
                  path='/'
                  render={ () => this.props.currentUser ? (
                    <Redirect to='/account' />//currentUser={this.props.currentUser}/>
                  ) :  (
                    <HomePage />
                  )
                } 
            />
            <Route exact path='/account'  component={AccountPage} />
          </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentClient
})

const mapDispatchToProps = dispatch => ({
  setCurrentClient: client => dispatch(setCurrentClient(client))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);