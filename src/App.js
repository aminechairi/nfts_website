import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import TopArtists from "./Components/TopArtists/TopArtists";
import LiveAuctions from "./Components/LiveAuctions/LiveAuctions";
import TodaysPicks from "./Components/TodaysPicks/TodaysPicks";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <TopArtists />
      <LiveAuctions />
      <TodaysPicks />
    </>
  );
}
export default App;