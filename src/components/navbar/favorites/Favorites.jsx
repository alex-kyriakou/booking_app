import "./favorites.scss";

function Favorites() {
  return (
    <div className="favorites">
      <div className="favoritesItem">
        <img
          className="favoritesImg"
          src="https://images.pexels.com/photos/7045916/pexels-photo-7045916.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-7045916.jpg&fm=jpg"
          alt=""
        />
        <span className="favoriteName">Sugar Loft Apartments</span>
        <span className="favoriteCity">Rio de Janeiro</span>
        <span className="favoritePrice">Starting from $120</span>
        <div className="favoriteRating">
          <button>9.1</button>
          <span>Superb</span>
        </div>
      </div>
      <div className="favoritesItem">
        <img
          className="favoritesImg"
          src="https://images.pexels.com/photos/7534270/pexels-photo-7534270.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-7534270.jpg&fm=jpg"
          alt=""
        />
        <span className="favoriteName">Zuku Amsterdam</span>
        <span className="favoriteCity">Amsterdam</span>
        <span className="favoritePrice">Starting from $140</span>
        <div className="favoriteRating">
          <button>8.9</button>
          <span>Fabulous</span>
        </div>
      </div>
      <div className="favoritesItem">
        <img
          className="favoritesImg"
          src="https://images.pexels.com/photos/6585762/pexels-photo-6585762.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6585762.jpg&fm=jpg"
          alt=""
        />
        <span className="favoriteName">Casa Portuguesa Prata</span>
        <span className="favoriteCity">Lisbon</span>
        <span className="favoritePrice">Starting from $95</span>
        <div className="favoriteRating">
          <button>8.2</button>
          <span>Very good</span>
        </div>
      </div>
      <div className="favoritesItem">
        <img
          className="favoritesImg"
          src="https://images.pexels.com/photos/6510428/pexels-photo-6510428.jpeg?cs=srgb&dl=pexels-lachlan-ross-6510428.jpg&fm=jpg"
          alt=""
        />
        <span className="favoriteName">Sun Spalato Views</span>
        <span className="favoriteCity">Split</span>
        <span className="favoritePrice">Starting from $165</span>
        <div className="favoriteRating">
          <button>9.2</button>
          <span>Superb</span>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
