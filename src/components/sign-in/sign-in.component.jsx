import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {signInWithGoogle} from '../../firebase/firebase.utils'
import './sign-in.styles.scss'


class SignIn extends React.Component {
    constructor(){
        super()
    }

    render(){

        return(
            <div className='sign-in'>
                <h2 className='title'>
                    I already have an account
                </h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='buttons'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={signInWithGoogle}>
                            Sign In With Google
                        </Button>
                    </div>
                    
                </Form>
            </div>
        )
    }
 }

 export default SignIn