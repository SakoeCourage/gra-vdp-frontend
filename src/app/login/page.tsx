import React from 'react'
import LoginForm from './partials/LoginForm'
import LoginNavBar from './partials/LoginNavBar'

function page() {
    return (
        <div className=''>
            <LoginNavBar />
            <div className='container mx-auto h-screen flex items-center justify-center'>
                <LoginForm />
            </div>
        </div>

    )
}

export default page