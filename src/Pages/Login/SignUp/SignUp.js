import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SIgnUp.css'
import auth from '../../../firebase.init';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const handleSignUp = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    


    return (
        <div>
            <div className='signup-form'>
                <h2 style={{ textAlign: 'center' }}>Please Sign-Up</h2>
                <form onSubmit={handleSignUp}>
                    <input className='mt-4 mx-auto ps-2' type="text" name="name" id="name" placeholder='Your Name' />
                    <input className='mx-auto ps-2' type="email" name="email" id="email" placeholder='Your Email' />
                    <input className='mx-auto ps-2' type="password" name="password" id="password" placeholder='Password' />
                    <input className='btn btn-primary w-50 mx-auto mt-3 mb-4' type="submit" />
                    <p className='text-danger'><small></small></p>
                </form>
                <p className='text-center'><small> Already have an account ?</small> <Link to='/login' className='text-decoration-none'>Login </Link></p>
            </div>
        </div>
    );
};

export default SignUp;