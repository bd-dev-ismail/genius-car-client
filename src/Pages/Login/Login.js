import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import image from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const Login = () => {
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
    const handalLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          form.reset();
          navigate('/')
          toast.success('Successfully Login!')
        })
        .catch(error=> toast.error(error.message))
    }
    const handalGoogle = ()=>{
      loginWithGoogle()
      .then(result=>{
        const user = result.user;
        console.log(user);
        navigate('/')
        toast.success('Login With Google')

      })
      .catch(error=> toast.error(error))
    }
    return (
      <div className="hero w-full my-20">
        <Helmet>
          <title>Login -Genius Car</title>
        </Helmet>
        <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={image} alt="" className="w-3/4" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center">Login!</h1>
            <form onSubmit={handalLogin} className="card-body">
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
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-error mb-3"
                />
             
              </div>
            </form>
            <div className="form-control px-8">
              <input
                type="submit"
                onClick={handalGoogle}
                value="Login With Google"
                className="btn btn-error btn-outline"
              />
            </div>
            <div className="py-4 text-center">
              <p>
                New in Genius Car ?{" "}
                <Link className="text-orange-600 font-semibold" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;