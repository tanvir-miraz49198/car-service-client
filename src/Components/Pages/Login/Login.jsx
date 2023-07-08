import { useContext } from 'react';
import loginImg from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';




const Login = () => {

    const {signIn} = useContext(AuthContext)


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const result = {email, password}
        console.log(result)

        signIn(email , password)

        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .then(error => {
            console.log(error)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <div className="mr-8">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-lg shadow-slate-500 bg-base-100 ">
                    <div className="card-body">
                    <h1 className="text-5xl font-bold mb-3">Login!!</h1>
                       <form onSubmit={handleLogin}>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" name='email' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" name='password'/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn bg-orange-600 text-slate-200 hover:bg-orange-700' type="submit" value="Submit" />
                        </div>
                       </form>
                       <p className='text-center my-4'>New to car service ? <Link className='text-red-600 ml-2' to='/register'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;