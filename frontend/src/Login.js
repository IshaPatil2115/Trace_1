import React, { useState } from 'react' //state change is done
import axios from 'axios'; //axios import is done
import Navbar from './components/Navbar/Navbar';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
        console.log(password);
        axios.post('http://localhost:8082/login', {
            "email": email,
            "password": password
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    return (
        <>
            <Navbar />
            <div className='d-flex vh-100 justify-content-center align-items-center ' style={{ "backgroundImage": "url(https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuJTIwcmVzb3VyY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)", "backgroundSize": "cover" }}>
                <div className='p-3 bg-white w-25'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' placeholder='Enter Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' placeholder='Enter Pasword' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className='btn btn-success' style={{ "fontFamily": "serif", "width": "100%" }}>Login</button>
                        <p style={{ "textAlign": "center", "fontFamily": "serif" }}>New Here? <a href='/'> Register Now</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;

