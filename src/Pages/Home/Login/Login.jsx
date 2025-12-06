import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import pic1 from '../../../assets/Picture1.png';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';

const Login = () => {

    const provider = new GoogleAuthProvider;
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) =>{
            const user = result.user;
            console.log(user)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                        <div class="overflow-hidden 
">
        
    <img src={pic1} class="w-2/3 object-cover" />
</div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className='text-center'>
                                <h2 className='Alex font-semibold text-base text-[#6C0443]'><i class="fa-solid fa-arrow-up text-[#6C0443] font-bold mb-4"></i> WiztecBD</h2>
                                <h1 className='GSans text-2xl font-semibold'>Create New Account</h1>
                                <p className='GSans text-xs font-medium'>Let’s login to grab amazing deal</p>
                            </div>
                            <div className="form-control GSans text-xs font-medium">
                                <Link onClick={handleGoogleSignIn}
                                    className='btn border border-1 w-full mx-auto my-2'><i class="fa-brands fa-google"></i> Continue with Google</Link>

                                <Link
                                    className='btn border border-1 w-full mx-auto my-2'><i class="fa-brands fa-apple"></i> Continue with Apple</Link>

                                <NavLink to={'/sign-up'}
                                    className='btn border border-1 w-full mx-auto my-2'><i class="fa-solid fa-phone"></i> Continue with Email/Phone</NavLink>

                            </div>
                            <div className="form-control mt-6 GSans">
                                <p className="text-center font-semibold mb-4">
                                    Don't Have An Account ?{" "}
                                    <NavLink to={'/sign-up'} className="text-red-800">
                Sign Up
                                    </NavLink>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;