import { GoogleAuthProvider } from 'firebase/auth';
import pic1 from '../../../assets/Picture1.png';
import { Link } from 'react-router-dom';

const Login = () => {

    const provider = new GoogleAuthProvider;
    const handleGoogleSignIn = () => {
        console.log("heeheee")
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
                                <Link
                                    className='btn border border-1 w-full mx-auto my-2'><i class="fa-brands fa-google"></i> Continue with Google</Link>

                                <Link
                                    className='btn border border-1 w-full mx-auto my-2'><i class="fa-brands fa-apple"></i> Continue with Apple</Link>

                                <Link
                                    className='btn border border-1 w-full mx-auto my-2'><i class="fa-solid fa-phone"></i> Continue with Email/Phone</Link>

                            </div>
                            <div className="form-control mt-6 GSans">
                                <p className="text-center font-semibold mb-4">
                                    Don't Have An Account ?{" "}
                                    <Link className="text-red-800" to="/login">
                                        Sign Up
                                    </Link>
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