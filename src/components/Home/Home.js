import Shop from "../Shop/Shop";
import Brand from "../Brands/Brand";
import NewArrivalAndOnSale from "../NewArrivalAndOnSale";
import HorizontalLine from "../UI/HorizontalLine";
import BrowseByStyle from "../BrowseByStyle/BrowseByStyle";
import Reviews from "../Reviews/Reviews";
import LatestUpdates from "../LatestUpdates/LatestUpdates";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Shop />
      <Brand />
      <NewArrivalAndOnSale title="NEW ARRIVALS" category="NEW ARRIVALS" />
      <HorizontalLine />
      <NewArrivalAndOnSale title="TOP SELLING" category="TOP SELLING" />
      <BrowseByStyle />
      <Reviews />
      <LatestUpdates />
      <Footer />
    </>
  );
};

export default Home;
