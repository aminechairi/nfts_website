import "./CoreFeatures.css";
import { AiOutlineWallet } from 'react-icons/ai';
import { BsFillCollectionFill } from 'react-icons/bs';


export default function CoreFeatures() {
  return (
    <>
    <div className="core_features">
      <div className="ctn">
        <h1>
          Core Features
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a lacinia dolor, in pretium nunc. Morbi mollis arcu eget.
        </p>
      </div>
    </div>
    <div className="boxs">
      <div className="ctn">
        <div className="box">
          <div className="ab-icons">
            <AiOutlineWallet />
          </div>
          <h1>
            Set Up Your Wallet
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur smit.
          </p>
        </div>
        <div className="box">
          <div className="ab-icons">
            <BsFillCollectionFill />
          </div>
          <h1>
            Make Your Collection
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur smit.
          </p>
        </div>
        <div className="box">
          <div className="ab-icons">
            <BsFillCollectionFill />
          </div>
          <h1>
            Add Your NFTs
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur smit.
          </p>
        </div>
        <div className="box">
          <div className="ab-icons">
            <BsFillCollectionFill />
          </div>
          <h1>
            List Them For Sale
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