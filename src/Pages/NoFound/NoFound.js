import NavBar from "../../Components/NavBar/NavBar";
import "./NoFound.css";
import NoFound from "../../Components/NoFound/NoFound";
import Footer from "../../Components/Footer/Footer";

export default function NoFoundPage() {
  return (
    <>
      <NavBar />
      <div className="ab_no_found_page">
        <div className="bg">
          <NoFound />
        </div>
      </div>
      <Footer />
    </>
  );
};