import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthFile/Auth';
import { Helmet } from 'react-helmet';

const Login = () => {
    const [logError, setLog] = useState("")
    const { signIn, signInGoogle, gitHub } = useContext(AuthContext)
    const location = useLocation();
    console.log('show', location)
    const navi = useNavigate()


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        console.log(errors);

        setLog();
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user)
                alert("logged in successfully")



                navi(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.log(error.message)
                setLog(alert(error.message))
            })

    }

    const handelGulu = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user)
                alert("logged in successfully")

                navi(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handelGit = () => {
        gitHub()
            .then(result => {
                console.log(result.user)
                alert("logged in successfully")

                navi(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='mt-16 mb-10'>
            <Helmet>
                <title>
                    Login
                </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className='text-3xl font-bold bg-cyan-100 rounded-lg p-3'>Please Login</h2>
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
                            <input type="password" placeholder="password" name="password" className="input input-bordered" {...register("password", {
                                required: {
                                    value: true,
                                    message: "You must fill this input"
                                },
                                minLength: {
                                    value: 6, message: "This inputs value must be at least 6 characters"
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                    message: " must be use lower case and uppercae"
                                }
                            })}
                            />
                            <div>{errors.password && <p className='text-red-500'>{errors.password.message}</p>}</div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info btn-outline">Login</button>
                        </div>
                    </form>
                    {
                        logError &&
                        <p className='p-5 text-red-600'>{logError}</p>}
                    <p className="text-center mb-5">don't have a account? <Link className='link text-cyan-400' to="/register">plz register</Link></p>
                    <p className="text-center mb-5"><button onClick={handelGulu} className='btn btn-info btn-outline'>sign with GOOGLE</button></p>
                    <p className="text-center mb-5"><button onClick={handelGit} className='btn btn-info btn-outline'>sign with GitHub</button></p>

                </div>

            </div>


        </div>
    );
};

export default Login;