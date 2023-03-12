import "./Support.css";
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

export default function Support() {
  return (
    <div className="support">
      <div className="ctn">
        <div className="info">
          <h1>
            Contact Info
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur. In non dui aliquet, pellentesque
          </p>
          <ul className="li_a">
            <li>
              info@yourmail.com
            </li>
            <li>
              +24 968 0572
            </li>
            <li>
              Open from Mo. Till Fri.
            </li>
            <li>
              09.00 - 17.00
            </li>
          </ul>
          <h2>
            Follow us on
          </h2>
          <ul className="li_b">
            <li>
              <a href="www.ex.com" target="_blank">
                <BsFacebook className="i" />
              </a>
              <a href="www.ex.com" target="_blank">
                <BsTwitter className="i" />
              </a>
              <a href="www.ex.com" target="_blank">
                <BsInstagram className="i" />
              </a>
              <a href="www.ex.com" target="_blank">
                <BsLinkedin className="i" />
              </a>
            </li>
          </ul>
        </div>
        <div className="form">
          <h1>
            Get in touch
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dui aliquet, pellentesque tellus ac, faucibus ex.
          </p>
          <form>

            <div className="i_g">
              <div className="gs">
                <label htmlFor="name">
                  Your Name
                </label>
                <input 
                  id="name" 
                  type="text" 
                  placeholder="Enter Your Name" />
              </div>
              <div className="gs">
                <label htmlFor="email">
                  Your Email
                </label>
                <input 
                  id="email" 
                  type="text" 
                  placeholder="Enter Your Email" />
              </div>
            </div>

            <label htmlFor="messege">
              Your Message
            </label>
            <textarea 
              id="messege" 
              placeholder="Enter Your Email" />

            <button
              type="submit"
              className="button_1">
                Wallet Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};