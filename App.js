import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delivery, etc
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

const resList = [
  {
    id: 1,
    resName: "Gargi Snacks",
    cuisines: ["Maharashtrian", "Snacks", "Fast Food"],
    avgRating: 4.7,
    imgURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f08a16270917a66c846c90ad03042930",
  },
  {
    id: 2,
    resName: "Anna's Vada",
    cuisines: ["South Indian", "Snacks"],
    avgRating: 4,
    imgURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pmo1gjvof1miot3fhmyr",
  },
  {
    id: 3,
    resName: "Anna idli and snacks",
    cuisines: ["South Indian", "Snacks"],
    avgRating: 4.2,
    imgURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fxiledwuzqhp3cxo5prg",
  },
  {
    id: 4,
    resName: "Gagan Sweets",
    cuisines: ["Sweets", "Snacks", "Desserts"],
    avgRating: 4.5,
    imgURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yg7prev26oxdjzx2uly5",
  },
  {
    id: 5,
    resName: "Shinde Dairy",
    cuisines: [
      "Sweets",
      "Beverages",
      "Chaat",
      "Snacks",
      "South Indian",
      "Fast Food",
      "Ice Cream",
    ],
    avgRating: 4.4,
    imgURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/252e17dd4965730b59950623e87d4f80",
  },
  {
    id: 6,
    resName: "Katakirrr Misal",
    cuisines: ["Maharashtrian", "Snacks"],
    avgRating: 4.2,
    imgURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7523ae9127a183ed3f5881dc7944afb9",
  },
  {
    id: 7,
    resName: "Chaayos Chai+Snacks=Relax",
    cuisines: [
      "Bakery",
      "Beverages",
      "Chaat",
      "Desserts",
      "Home Food",
      "Italian",
      "Maharashtrian",
      "Snacks",
      "Street Food",
      "Sweets",
    ],
    avgRating: 4.4,
    imgURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_427775.JPG",
  },
  {
    id: 8,
    resName: "McDonald's",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.5,
    imgURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fedaee6f-c5e9-4f19-8188-93627e6d6776_74379.JPG",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
