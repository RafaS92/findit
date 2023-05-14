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
              text="Adipisicing do laboris sint ex. Ullamco excepteur officia aute cupidatat. Nulla mollit fugiat mollit eiusmod esse ut. Officia nostrud aliqua et excepteur qui enim cupidatat anim amet. Officia fugiat ex occaecat exercitation irure. Adipisicing adipisicing excepteur do ut dolor qui esse ex occaecat mollit eiusmod."
              label="Directions"
              path="/services"
            />
            <ServicesItem
              src="https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              text="Pariatur ullamco excepteur id quis veniam tempor quis magna nisi ea anim enim culpa. Cillum ipsum voluptate fugiat excepteur ullamco aute commodo consectetur dolor occaecat. Consectetur voluptate ea nostrud enim nulla."
              label="Distance Matrix"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <ServicesItem
              src="https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              text="Tempor ex culpa in ex enim exercitation consequat minim velit incididunt laboris. Tempor sit velit nisi commodo veniam cillum quis sunt dolor ut occaecat. Nisi mollit nulla tempor ea quis qui laborum non sit fugiat."
              label="Geocoding"
              path="/services"
            />
            <ServicesItem
              src="https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              text="elit consequat mollit laboris. Quis amet ad consequat magna reprehenderit esse esse et commodo elit consectetur adipisicing deserunt fugiat. Ullamco ex non velit velit. Anim dolor fugiat reprehenderit nisi enim aliqua esse veniam velit."
              label="Street View"
              path="/services"
            />
           <ServicesItem
              src="https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              text=" Laborum veniam eiusmod cillum laboris dolore et do nisi consectetur sint consequat labore aliqua amet. Ut consequat incididunt voluptate reprehenderit irure minim incididunt tempor adipisicing ad elit eiusmod sint qui."
              label="Real time updates"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
