import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function FoodCard({ food }) {
  return (
    <div className="food-card" key={food.id}>
      <div className="texts">
        <div className="title-and-price">
          <h1>{food.name}</h1>
          <p className="des price">{food.price}</p>
        </div>
        <p className="des">{food.des}</p>
        <div className="btns">
          <Button className="order-btn">
            <Link to="/contact-page" className="nav-item" aria-label="On Click">
              Order Now
            </Link>
          </Button>
          <Button className="add-btn">
            <Link to="/login" className="nav-item" aria-label="On Click">
              Add To Cart
            </Link>
          </Button>
        </div>
      </div>
      <img src={food.src} alt={food.name} />
    </div>
  );
}

export default FoodCard;
