import React from 'react'

function Register() {
    return (
        <div className='d-flex vh-100 justify-content-center align-items-center ' style={{ "backgroundImage": "url(https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuJTIwcmVzb3VyY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)", "backgroundSize": "cover" }}>

            <div className='p-4 bg-white w-25'>

                <form>
                    <div className='mb-3'>
                        <input type='text' placeholder='First Name' className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <input type='text' placeholder='Last Name' className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <input type='email' placeholder='Enter Email' className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <input type='password' placeholder='Enter Pasword' className='form-control' />
                    </div>
                    <button className='btn btn-success' style={{ "fontFamily": "serif", "width": "100%" }}>Register Now</button>
                    <p style={{ "textAlign": "center", "fontFamily": "serif" }}>Existing User? <a href='/login'> Login Now</a></p>
                </form>
            </div>
        </div>
    )
}

export default Register