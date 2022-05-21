import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, from, navigate])

  if (loading || gLoading) {
    return <Loading />
  }

  // if (user || gUser) {
  //   navigate(from, { replace: true });
  // }

  let signInError;

  if (error || gError) {
    signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
  }

  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className='flex justify-center items-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: 'Email is required'
                  },
                  pattern: {
                    value: /[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Enter a valid email address'
                  }
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: 'Password is required'
                  },
                  minLength: {
                    value: 6,
                    message: 'Password must be 6 characters or higher'
                  }
                })}
              />
              <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>
            {signInError}
            <input className='btn w-full max-w-xs' type="submit" value='Login' />
          </form>
          <p>New to Doctor's portal? <Link className='text-info' to='/register'>Create New Account</Link> </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="mx-auto btn btn-wide btn-outline">Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;