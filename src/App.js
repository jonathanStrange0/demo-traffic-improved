import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route, Redirect} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
      }
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // cancel the auth listenr when the component will unmount
  }

  render() {
    return (
      <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
      </div>
    );
  }
  
}

export default App;
