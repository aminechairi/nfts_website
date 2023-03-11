import "./CreateItem.css";
import { BsImage } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function CreateItem() {
  return (
    <div className="createI_tem">
      <div className="ctn">
        <form>
          <div className="upload">
            <div className="upload_img">
              <label htmlFor="file-upload" className="custom-file-upload">
                <BsImage className="i" />
                <h1>
                  Drop files here
                </h1>
                <p>
                  PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                </p>
                <p>
                  Or choose a file
                </p>
                <div
                  className="button">
                    Wallet Connect
                </div>
              </label>
              <input id="file-upload" type="file"/>
            </div>

            <div className="ab_banner_design">
              <div className="banner_design">
                banner-design.png
                <AiFillCloseCircle className="i" />
              </div>
              <div className="banner_design">
                banner-design.jpg
                <AiFillCloseCircle className="i" />
              </div>
            </div>

          </div>
          <div className="data">

            <label htmlFor="title">
              Title
            </label>
            <input 
              id="title" 
              type="text" 
              placeholder="Enter Item Title" />

            <label htmlFor="description">
              Description (optional)
            </label>
            <textarea 
              id="description" 
              placeholder="Type Item Description" />

            <label htmlFor="price">
              Price
            </label>
            <input 
              id="price" 
              type="text" 
              placeholder="10 ETH" />

              <div className="i_g">
                <div className="gs">
                  <label htmlFor="royalties">
                    Royalties
                  </label>
                  <input 
                    id="royalties" 
                    type="text" 
                    placeholder="5%" />
                </div>
                <div className="gs">
                  <label htmlFor="size">
                    Price
                  </label>
                  <input 
                    id="size" 
                    type="text" 
                    placeholder="e.g. 'size'" />
                </div>
              </div>

              <h1>
                Time Auctions <span>(optional)</span>
              </h1>

              <div className="i_g">
                <div className="gs">
                  <label htmlFor="starting_date">
                    Starting date
                  </label>
                  <input 
                    id="starting_date" 
                    type="date" />
                </div>
                <div className="gs">
                  <label htmlFor="expiration_date">
                    Expiration date
                  </label>
                  <input 
                    id="expiration_date" 
                    type="time" />
                </div>
              </div>
              <button
                type="submit"
                className="button_1">
                  Wallet Connect
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};