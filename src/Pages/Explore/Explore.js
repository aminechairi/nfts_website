import NavBar from "../../Components/NavBar/NavBar";
import TodaysPicks from "../../Components/TodaysPicks/TodaysPicks";
import Footer from "../../Components/Footer/Footer";

export default function Explore() {
  return (
    <>
      <NavBar />
      <TodaysPicks headerComponent={false} />
      <Footer />
    </>
  );
};