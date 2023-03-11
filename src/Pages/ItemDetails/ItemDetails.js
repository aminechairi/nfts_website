import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import ItemDetails from "../../Components/ItemDetails/ItemDetails";
import TodaysPicks from "../../Components/TodaysPicks/TodaysPicks";

export default function ItemDetailsPage() {
  return (
    <>
      <NavBar />
      <ItemDetails />
      <TodaysPicks headerComponent={true} />
      <Footer />
    </>
  )
}