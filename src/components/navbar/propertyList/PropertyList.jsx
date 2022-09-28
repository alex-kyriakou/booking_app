import "./propertyList.scss";

function PropertyList() {
  return (
    <div className="propertyList">
      <div className="propertyListItem">
        <img
          className="propertyListImg"
          src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg"
          alt=""
        />
        <div className="propertyListTitles">
          <h1>Hotels</h1>
          <h2>750.000 hotels</h2>
        </div>
      </div>
      <div className="propertyListItem">
        <img
          className="propertyListImg"
          src="https://images.pexels.com/photos/7147291/pexels-photo-7147291.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-7147291.jpg&fm=jpg"
          alt=""
        />
        <div className="propertyListTitles">
          <h1>Apartments</h1>
          <h2>870.000 apartments</h2>
        </div>
      </div>
      <div className="propertyListItem">
        <img
          className="propertyListImg"
          src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?cs=srgb&dl=pexels-michael-block-3225531.jpg&fm=jpg"
          alt=""
        />
        <div className="propertyListTitles">
          <h1>Resorts</h1>
          <h2>15.000 resorts</h2>
        </div>
      </div>
      <div className="propertyListItem">
        <img
          className="propertyListImg"
          src="https://images.pexels.com/photos/9043969/pexels-photo-9043969.jpeg?cs=srgb&dl=pexels-kindel-media-9043969.jpg&fm=jpg"
          alt=""
        />
        <div className="propertyListTitles">
          <h1>Villas</h1>
          <h2>425.000 villas</h2>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
