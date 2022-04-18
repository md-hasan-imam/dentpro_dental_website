import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);
    }


    return (
        <div>
            <div className='login-form'>
                <h2 style={{ textAlign: 'center' }}>Please Login</h2>
                <form onSubmit={handleSignIn}>
                    <input className='mt-5 mx-auto mb-4 ps-2' type="email" name="email" id="email" placeholder='Your Email' />
                    <input className='mx-auto ps-2' type="password" name="password" id="password" placeholder='Password' />
                    <input className='btn btn-primary w-50 mx-auto mt-4 mb-4' type="submit" />
                </form>
                <p className='text-center fs-5 '>Have no account ? <Link to='/signup' className='text-decoration-none'>Please Sign-up</Link></p>

            </div>
        </div>
    );
};

export default Login;