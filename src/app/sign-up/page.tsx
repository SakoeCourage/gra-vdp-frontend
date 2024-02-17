import React from 'react'
import SignUpForm from './partials/signupform'
import LoginNavBar from '../login/partials/LoginNavBar'
function page() {
    return (
        <div className=''>
            <LoginNavBar />
            <div className='container mx-auto   flex items-center justify-center'>
                <SignUpForm />
            </div>
        </div>
    )
}

export default page