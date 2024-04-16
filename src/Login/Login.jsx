import  { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthFile/Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    console.log('show',location)
    const navi = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data);
    console.log(errors);
    
signIn(data.email, data.password)
.then(result=>{
    console.log(result.user)
    if(user){toast('Login successful!');}
    
    navi(location?.state ? location.state:'/')
})
.catch(error=>{console.error(error)})
}
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2>please login</h2>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required {...register("email")} />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" {...register("password",{
     required: {
        value: true,
 message: "You must fill this input"},
minLength:{
    value:6, message:"This inputs value must be at least 6 characters"
},
pattern:{
    value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
    message: " must be use lower case and uppercae"
} })}
 />
                            <div>{errors.password && <p className='text-red-500'>{errors.password.message}</p>}</div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center mb-5">don't have a account? <Link to="/register">plz register</Link></p>
                </div>
            </div>
                         <ToastContainer />

        </div>
    );
};

export default Login;