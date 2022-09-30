import "./singleHotelPage.scss";
import Header from "../components/navbar/header/Header";
import Navbar from "../components/navbar/Navbar";
import MailList from "../components/navbar/mailList/MailList";
import Footer from "../components/navbar/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function SingleHotelPage() {
  const images = [
    {
      src: "https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-7534561.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/7534566/pexels-photo-7534566.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-7534566.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/5733823/pexels-photo-5733823.jpeg?cs=srgb&dl=pexels-dayvison-de-oliveira-silva-5733823.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/6492400/pexels-photo-6492400.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6492400.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/5998040/pexels-photo-5998040.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-5998040.jpg&fm=jpg",
    },
    {
      src: "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6585598.jpg&fm=jpg",
    },
  ];
  return (
    <div className="singleHotelPage">
      <Navbar />
      <Header type="list" />
      <div className="singleHotelPageContainer">
        <div className="singleHotelPageWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $120 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {images.map((image) => (
              <div className="hotelImgWrapper">
                <img src={image.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Athens</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                adipisci totam velit dolore reiciendis architecto fugit
                consequatur? Velit cumque assumenda doloremque magnam
                laboriosam, quisquam quis molestias alias explicabo consequatur
                corporis dolores culpa consectetur! Dolore eius modi, eaque
                mollitia doloremque aspernatur rerum odit animi ratione, atque
                perspiciatis dolores. Esse, illo cupiditate?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae exercitationem nostrum reprehenderit vitae assumenda
                inventore.
              </span>
              <h2>
                <b>$755</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default SingleHotelPage;
