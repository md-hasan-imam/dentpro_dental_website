import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [signInWithGithub ] = useSignInWithGithub(auth);
      const navigate =useNavigate();
      const location =useLocation();
      const from = location.state?.from?.pathname || '/';
      
    if(user){
        navigate( from , {replace:true});
    }
      
    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    
    const handleSignInWithGithub =()=>{
        signInWithGithub();
    }

    


    return (
        <div>
            <div className='login-form'>
                <h2 style={{ textAlign: 'center' }}>Please Login</h2>
                <form onSubmit={handleSignIn}>
                    <input className='mt-5 mx-auto mb-4 ps-2' type="email" name="email" id="email" placeholder='Your Email' />
                    <input className='mx-auto ps-2' type="password" name="password" id="password" placeholder='Password' />
                    <input onClick={signInWithEmailAndPassword} className='btn btn-primary w-50 mx-auto mt-4 mb-3' type="submit" />
                    <p className='text-danger'><small></small></p>
                </form>
                <p className='text-center '><small> Have no account ? </small><Link to='/signup' className='text-decoration-none'>Please Sign-up</Link></p>
                <div>
                    <div className='d-flex align-items-center'>
                        <div className='line'></div>
                        <p className='or'>or</p>
                        <div className='line'></div>
                    </div>
                    <div className='others-signup'>
                        <button onClick={handleSignInWithGithub} className=''>Login with Github</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;