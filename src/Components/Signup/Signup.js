import "./Signup.css";
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="signup">
      <div className="bg">
        <div className="ctn">
          <div className="form">
            <h1>
              Register Now
            </h1>
            <p>
              Create an account for a faster checkout.
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
              Or, sign up with your email
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

              <label htmlFor="username">
                Username
              </label>
              <input 
                id="username" 
                type="text" 
                placeholder="Enter Your Username" />

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
                  Sign Up
              </button>
            </form>
            <div className="border"></div>
            <p className="sw">
              <span>
                Already have have an account?
              </span>
              &nbsp;
              <Link to="/signin" >
                <span>
                  Sign In
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};