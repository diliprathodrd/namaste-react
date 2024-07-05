const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img className="res-logo" src={resData.imgURL} />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
