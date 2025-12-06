import { Link, NavLink, useNavigate } from 'react-router-dom';
import pic1 from '../../../assets/Picture1.png';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../../Firebase/firebase.init';

const SignUp = () => {
    const navigate = useNavigate()

    const handleRegister = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.pass.value;

        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user)
            navigate('/')
        })
        console.log(email, password) 
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={pic1} class="w-2/3 object-cover" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className='text-center'>
                                <h2 className='Alex font-semibold text-base text-[#6C0443]'><i class="fa-solid fa-arrow-up text-[#6C0443] font-bold mb-4"></i> WiztecBD</h2>
                                <h1 className='GSans text-xl font-semibold'>Wellcome Back</h1>
                                <p className='GSans text-xs font-medium'>Let’s login to grab amazing deal</p>
                            </div>
                            <div className="form-control GSans text-xs font-medium">
                                <Link
                                    className='btn border border-1 w-full mx-auto my-2'><i class="fa-brands fa-google"></i> Continue with Google</Link>

                                <Link
                                    className='btn border border-1 w-full mx-auto my-2'><i class="fa-brands fa-apple"></i> Continue with Apple</Link>

                            </div>
                            <div className="form-control GSans">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control GSans font-normal">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" 
                                name='pass'
                                placeholder="password" className="input input-bordered" required />
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <div className='w-4 h-4 border '></div>
                                        <h3>Remember me</h3>
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn w-full bg-[#6C0443] text-white">Login</button>
                            </div>
                        </form>
                        <div className='text-center mb-4 text-sm'>
                            <p>Don't have an account? <NavLink to={'/login'} className="text-[#6C0443] font-semibold">Sign Up</NavLink></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;