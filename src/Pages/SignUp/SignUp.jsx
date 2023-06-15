import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";



const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {createUser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            
            updateUserProfile(data.name,data.photoURL)
            .then(() =>{
                console.log('user profile info updated');
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Created Successful',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate("/");

            })
            .catch(error => console.log(error))
        })
    };
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                   
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" {...register("name")} placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="URL" name="photoURL"  {...register("photoURL")} placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" {...register("email",{ required: true })} placeholder="Email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500" >This field is required</span>}
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" {...register("password",{ required: true,minLength:6, maxLength: 20 })} placeholder="password" className="input input-bordered" />
                            {/* {errors.email && <span className="text-red-500" >This field is required</span>} */}
                            {errors.password?.type === 'minLength' && <p className="text-red-500" >Password Must Be 6 Character</p>}
                           
                        </div>
                        <div className="form-control mt-6">
                            
                            <input className="btn btn-primary" type="submit" value='Sign Up' />
                        </div>
                    </form>
                    <p><small>Already Have an Account please <Link to='/login'><u>Login</u></Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;