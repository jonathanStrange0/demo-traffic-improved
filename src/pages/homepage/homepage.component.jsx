import React from 'react'

import SignUp from '../../components/sign-up/sign-up.component'
import SignIn from '../../components/sign-in/sign-in.component'

import './homepage.styles.scss'

const HomePage = () => (
    <div className='homepage'>
       <SignIn />
       <SignUp />
    </div>
)

export default HomePage