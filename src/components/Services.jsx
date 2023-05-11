import React from "react";
import ServicesItem from "./ServicesItem";

function Cards() {
  return (
    <div className="cards" id="services" >
      <strong>Our Services!</strong>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ServicesItem
              src="https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              text="text"
              label="Label"
              path="/services"
            />
            <ServicesItem
              src="https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              text="text"
              label="Label"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <ServicesItem
              src="https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              text="text"
              label="Label"
              path="/services"
            />
            <ServicesItem
              src="https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              text="text"
              label="Label"
              path="/services"
            />
           <ServicesItem
              src="https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              text="text"
              label="Label"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
