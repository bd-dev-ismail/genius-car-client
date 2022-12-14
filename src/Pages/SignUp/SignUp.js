import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { setAuthToken } from '../../api/Auth';
import image from "../../assets/images/login/login.svg";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const SignUp = () => {
    const { createUser, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
      const handalSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setAuthToken(user);
            form.reset();
            navigate('/')
            toast.success('Successfully Create acccount!')
        })
        .catch(error => console.error(error))
      };
      const handalGoogle = ()=>{
        loginWithGoogle()
        .then(result=>{
          const user = result.user;
          //jwt
          setAuthToken(user);
          navigate('/');
          toast.success('SignUp With Google!')
        })
        .catch(error=> toast.error(error.message))
      }
    return (
      <div className="hero w-full my-20">
        <Helmet>
          <title>Sign Up -Genius Car</title>
        </Helmet>
        <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={image} alt="" className="w-3/4" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
            <form onSubmit={handalSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-error mb-3"
                />
              </div>
            </form>
            <div className="form-control px-8">
            <input
                type="submit"
                onClick={handalGoogle}
                value="Sign Up With Google"
                className="btn btn-error btn-outline"
              />
            </div>
            <div className="py-4 text-center">
              <p>
                Already have an account ?{" "}
                <Link className="text-orange-600 font-semibold" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;