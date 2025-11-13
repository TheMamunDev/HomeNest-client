import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthContext';
import { handleFirebaseError } from '../../../utilis/firebaseErrorHandle';
import Spinner from '../../common/SpinnerMain';
import { FaLock } from 'react-icons/fa';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

const Register = () => {
  const navigate = useNavigate();
  const { user, handleGoogleLogin, loading, updateUserProfile, signUp } =
    useContext(AuthContext);
  const from = location.state?.from?.pathname || '/';
  const [errorPass, setErrorPass] = useState('');
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);
  if (loading) {
    return <Spinner></Spinner>;
  }

  const showPassHandle = e => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const validatePassword = password => {
    if (!/[A-Z]/.test(password))
      return 'Password must contain at least one uppercase letter.';
    if (!/[a-z]/.test(password))
      return 'Password must contain at least one lowercase letter.';
    if (password.length < 6)
      return 'Password must be at least 6 characters long.';
    return '';
  };

  const handleRegister = e => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const errorPassMsg = validatePassword(password);
    if (errorPassMsg) {
      setErrorPass(errorPassMsg);
      return;
    }
    signUp(email, password)
      .then(() => {
        setErrorPass('');
        updateUserProfile(name, photo)
          .then(() => {
            toast.success(
              `Welcome to HomeNest, ${name}! Your account is ready.`
            );
            navigate(from, { replace: true });
          })
          .catch(error => {
            toast.error(error.message);
          });
      })
      .catch(error => {
        handleFirebaseError(error);
      });
  };

  const handleGoogleBtn = e => {
    e.preventDefault();
    handleGoogleLogin()
      .then(() => {
        navigate(from, { replace: true });
        toast.success('Successfully Logged in');
      })
      .catch(error => {
        handleFirebaseError(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-10 bg-base-200">
      <div
        className="w-full max-w-lg bg-base-100 p-8 rounded-lg shadow-2xl border border-gray-200"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-3xl font-extrabold text-secondary md:text-4xl text-center mb-2">
          Register for <span className="text-primary">HomeNest</span>
        </h2>
        <p className="text-center text-base-300 mb-8">
          Create your account to start listing and finding properties.
        </p>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-secondary">
                Full Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input-field input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-secondary">
                Email Address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="input-field input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-secondary">
                Password
              </span>
            </label>
            <label className="input validator border border-gray-200 w-full">
              <FaLock size={18} className="text-gray-500" />
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                required
                className="input-field input-bordered"
                placeholder="Password"
              />
              <button className="text-base-300" onClick={showPassHandle}>
                {showPass ? <IoIosEyeOff /> : <IoIosEye />}
              </button>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-secondary">
                Photo Url
              </span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Enter Your Photo URL"
              className="input-field input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                required
              />
              <span className="label-text text-base-300">
                I agree to the{' '}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms & Conditions
                </Link>
              </span>
            </label>
          </div>

          <div className="form-control pt-4">
            <button
              type="submit"
              className="btn btn-primary w-full text-lg font-semibold transition duration-300"
            >
              Register Account
            </button>
            <div className="flex items-center justify-center gap-2 my-3.5">
              <div className="h-px w-full bg-[#059669]"></div>
              <span className="text-sm text-neutral opacity-50">or</span>
              <div className="h-px w-full bg-[#059669]"></div>
            </div>
            <button
              onClick={handleGoogleBtn}
              className="btn btn-lg w-full bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            {errorPass && (
              <label className="text-red-500 flex my-2.5">{errorPass}</label>
            )}
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-base-300">
            Already have an account?
            <Link
              to="/login"
              className="text-primary font-semibold ml-1 hover:underline"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
