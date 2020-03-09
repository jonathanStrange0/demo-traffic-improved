import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './sign-up.styles.scss'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'


class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserProfileDocument(user, { displayName });
    
          this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
        } catch (error) {
          console.error(error);
        }
      };
    
    

    handleChange = event => {
        const {name, value} = event.target

        this.setState({[name] : value})
        // console.log(this.state);
        
    }


    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>
                    I do not have an account
                </h2>
                <span>Sign up with your email and password</span>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicInput">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            name='displayName' 
                            type="text" 
                            placeholder="Your Name Here" 
                            defaultValue={displayName} 
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name='email' 
                            type="email"
                            placeholder="Enter email"
                            defaultValue={email} 
                            onChange={this.handleChange}
                            />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" defaultValue={password} onChange={this.handleChange}/>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password"  defaultValue={confirmPassword} onChange={this.handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
 }

 export default SignUp