import NavBar from "../../Components/NavBar/NavBar";
import Header from "../../Components/Header/Header";
import TopArtists from "../../Components/TopArtists/TopArtists";
import LiveAuctions from "../../Components/LiveAuctions/LiveAuctions";
import TodaysPicks from "../../Components/TodaysPicks/TodaysPicks";
import CoreFeatures from "../../Components/CoreFeatures/CoreFeatures";
import PopularCollection from "../../Components/PopularCollection/PopularCollection";
import Footer from "../../Components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Header />
      <TopArtists />
      <LiveAuctions />
      <TodaysPicks />
      <CoreFeatures />
      <PopularCollection />
      <Footer />
    </>
  );
};