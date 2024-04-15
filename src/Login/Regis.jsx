import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Regis = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const on2Submit = data => console.log(data);
    console.log(errors);
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">

<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form onSubmit={handleSubmit(on2Submit)} className="card-body">
        <h2>please login</h2>
        <div className="form-control">

            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" name="name" className="input input-bordered"  {...register("name",{
                required: {
                   value: true,
            message: "You must fill this input"}})} />
        </div>
        <div>{errors.name && <p className='text-red-500'>{errors.name.message}</p>}</div> 
        <div className="form-control">

            <label className="label">
                <span className="label-text">photo url </span>
            </label>
            <input type="text" placeholder="photo url" name="photo" className="input input-bordered"  {...register("photo",{
                required: {
                   value: true,
            message: "You must fill this input"}})} />
            <div>{errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}</div> 
        </div><div className="form-control">

            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" required 
            {...register("email")}/>
        </div>

        <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" 
            {...register("password",{
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
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
        </div>
        <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
        </div>
    </form>
    <p className="text-center mb-5">Already have a account? <Link to="/login">plz login</Link></p>
</div>
</div>
        </div>
    );
};

export default Regis;