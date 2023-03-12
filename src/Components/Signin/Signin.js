import "./Signin.css";
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

export default function Signin() {
  return (
    <div className="signin">
      <div className="bg">
        <div className="ctn">
          <div className="form">
            <h1>
              Sign In Now
            </h1>
            <p>
              Login to your account for a faster checkout.
            </p>
            <ul className="big_comp">
              <li>
                <FcGoogle className="i" />
              </li>
              <li>
                <BsFacebook className="i" />
              </li>
              <li>
                <BsTwitter className="i" />
              </li>
            </ul>
            <p>
              Or, sign in with your email
            </p>
            <div className="border"></div>
            <form>
              <label htmlFor="email">
                Email
              </label>
              <input 
                id="email" 
                type="text" 
                placeholder="Enter Your Email" />

              <label htmlFor="password">
                Password
              </label>
              <input 
                id="password" 
                type="text" 
                placeholder="Enter Your Password" />

              <button
                type="submit"
                className="button_1">
                  Signin
              </button>
            </form>
            <div className="border"></div>
            <p className="sw">
              <span>
                't you have an account?
              </span>
              &nbsp;
              <span>
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};