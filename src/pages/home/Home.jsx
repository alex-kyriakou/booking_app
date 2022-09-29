import Favorites from "../../components/navbar/favorites/Favorites";
import Footer from "../../components/navbar/footer/Footer";
import Header from "../../components/navbar/header/Header";
import MailList from "../../components/navbar/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/navbar/propertyList/PropertyList";
import Featured from "./featured/Featured";
import "./home.scss";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <Favorites />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
