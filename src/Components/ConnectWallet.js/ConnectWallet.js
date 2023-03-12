import "./ConnectWallet.css";
import { BsFillCollectionFill } from 'react-icons/bs';
import { FaDog } from 'react-icons/fa';
import { MdCases } from 'react-icons/md';
import { MdOutlineCases } from 'react-icons/md';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import { MdOutlinePlagiarism } from 'react-icons/md';
import { DiCodeigniter } from 'react-icons/di';
import { FiBarChart } from 'react-icons/fi';

export default function ConnectWallet() {
  return (
    <>
      <div className="connectw_allet">
        <div className="ctn">
          <h1>
            Connect Your Wallet
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a lacinia dolor, in pretium nunc. Morbi mollis arcu eget.
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="ctn">
          <div className="card">
            <div className="ab-icons">
              <FaDog />
            </div>
            <h1>
              Meta Mask
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur smit.
            </p>
          </div>
          <div className="card">
            <div className="ab-icons">
              <MdOutlineCases />
            </div>
            <h1>
              Bitski
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur smit.
            </p>
          </div>
          <div className="card">
            <div className="ab-icons">
              <MdCases />
            </div>
            <h1>
              Fortmatic
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur smit.
            </p>
          </div>
          <div className="card">
            <div className="ab-icons">
              <GiPlagueDoctorProfile />
            </div>
            <h1>
              Wallet Connect
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur smit.
            </p>
          </div>
          <div className="card">
            <div className="ab-icons">
              <MdOutlinePlagiarism />
            </div>
            <h1>
              Coinbase Wallet
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur smit.
            </p>
          </div>
          <div className="card">
            <div className="ab-icons">
              <BsFillCollectionFill />
            </div>
            <h1>
              Authereum
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur smit. 
            </p>
          </div>
          <div className="card">
            <div className="ab-icons">
              <DiCodeigniter />
            </div>
            <h1>
              Kaikas
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur smit.
            </p>
          </div>
          <div className="card">
            <div className="ab-icons">
              <FiBarChart />
            </div>
            <h1>
              Torus
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur smit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};