import {useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [resetEmail, setResetEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth);



    if (user || gitUser) {
        navigate(from, { replace: true });
    }
    let errorELement;
    if (error || gitError) {
        errorELement = <p className='text-danger'>Error: {error?.message || gitError?.message}</p>
    }

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleSignInWithGithub = () => {
        signInWithGithub();
    }
  

    return (
        <div>
            <div className='login-form'>
                <h2 style={{ textAlign: 'center' }}>Please Login</h2>
                <form onSubmit={handleSignIn}>
                    <input className='mt-5 mx-auto mb-4 ps-2' type="email" name="email" id="email" placeholder='Your Email' value={resetEmail} onChange={(e) => setResetEmail(e.target.value)}  required />
                    <input className='mx-auto ps-2' type="password" name="password" id="password" placeholder='Password'  required/>
                    <input onClick={signInWithEmailAndPassword} className='btn btn-primary w-50 mx-auto mt-4 mb-3' type="submit" />
                    {errorELement}
                </form>
                <p className='text-center '><small> Have no account ? </small><Link to='/signup' className='text-decoration-none'>Please Sign-up</Link></p>

                <button className='btn btn-light'
                    onClick={async () => {
                        if(resetEmail){
                            await sendPasswordResetEmail(resetEmail);
                            toast('Sent email');
                        }
                        else{
                            toast('please enter your email first')
                        }
                        
                    }}
                >
                    Reset password
                </button>
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
                    <ToastContainer />
            </div>
        </div>
    );
};

export default Login;