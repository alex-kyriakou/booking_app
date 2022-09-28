import "./featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/3264723/pexels-photo-3264723.jpeg?cs=srgb&dl=pexels-alex-azabache-3264723.jpg&fm=jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Greece</h1>
          <h2>Santorini</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/1963082/pexels-photo-1963082.jpeg?cs=srgb&dl=pexels-abdel-rahman-abu-baker-1963082.jpg&fm=jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Germany</h1>
          <h2>Berlin</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/326807/pexels-photo-326807.jpeg?cs=srgb&dl=pexels-pixabay-326807.jpg&fm=jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>United Kingdom</h1>
          <h2>London</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/6580702/pexels-photo-6580702.jpeg?cs=srgb&dl=pexels-athena-6580702.jpg&fm=jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Brazil</h1>
          <h2>Rio</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;
