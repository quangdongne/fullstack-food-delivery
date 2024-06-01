/* eslint-disable react/prop-types */
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";
import { useContext } from "react";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  let foundItems = false;

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            foundItems = true;
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            );
          }
          return null;
        })}

        {!foundItems && (
          <div className="none-display">
            <h2>Đéo có gì cả...</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
