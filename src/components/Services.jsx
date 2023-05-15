import React from "react";
import ServicesItem from "./ServicesItem";


function Cards() {
      const data = [{
        id:1,
        src:"https://developers.google.com/static/maps/images/landing/hero_directions_api.png",
        text:"Adipisicing do laboris sint ex. Ullamco excepteur officia aute cupidatat. Nulla mollit fugiat mollit eiusmod esse ut. Officia nostrud aliqua et excepteur qui enim cupidatat anim amet. Officia fugiat ex occaecat exercitation irure. Adipisicing adipisicing excepteur do ut dolor qui esse ex occaecat mollit eiusmod.",
        label:"Directions"},
        {
        id:2,
        src:"https://storage.googleapis.com/gweb-cloudblog-publish/images/matrix-city-map.max-1300x1300.png",
        text:"Adipisicing do laboris sint ex. Ullamco excepteur officia aute cupidatat. Nulla mollit fugiat mollit eiusmod esse ut. Officia nostrud aliqua et excepteur qui enim cupidatat anim amet. Officia fugiat ex occaecat exercitation irure. Adipisicing adipisicing excepteur do ut dolor qui esse ex occaecat mollit eiusmod.",
        label:"Distance Matrix"},
        {
        id:3,
        src:"https://images.squarespace-cdn.com/content/v1/5640e86be4b031347f7c7b81/1588933206251-94XDI23TOKAFYJLNBZLC/image-asset.jpeg",
        text:"Adipisicing do laboris sint ex. Ullamco excepteur officia aute cupidatat. Nulla mollit fugiat mollit eiusmod esse ut. Officia nostrud aliqua et excepteur qui enim cupidatat anim amet. Officia fugiat ex occaecat exercitation irure. Adipisicing adipisicing excepteur do ut dolor qui esse ex occaecat mollit eiusmod.",
        label:"Geocoding"}
    ]

    const data2 = [{
        id:4,
        src:"https://searchengineland.com/wp-content/seloads/2016/06/Screen-Shot-2016-06-09-at-7.23.43-AM.png",
        text:"Adipisicing do laboris sint ex. Ullamco excepteur officia aute cupidatat. Nulla mollit fugiat mollit eiusmod esse ut. Officia nostrud aliqua et excepteur qui enim cupidatat anim amet. Officia fugiat ex occaecat exercitation irure. Adipisicing adipisicing excepteur do ut dolor qui esse ex occaecat mollit eiusmod.",
        label:"Street View"},
        {
        id:5,
        src:"https://static1.srcdn.com/wordpress/wp-content/uploads/2022/04/Google-Maps-Live-Traffic-Data.jpg",
        text:"Adipisicing do laboris sint ex. Ullamco excepteur officia aute cupidatat. Nulla mollit fugiat mollit eiusmod esse ut. Officia nostrud aliqua et excepteur qui enim cupidatat anim amet. Officia fugiat ex occaecat exercitation irure. Adipisicing adipisicing excepteur do ut dolor qui esse ex occaecat mollit eiusmod.",
        label:"Real time updates"},
    ]


  return (
    <div className="cards" id="services" >
      <h1>Our Services!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {data.map((item) => (
              <ServicesItem key={item.id} 
              src={item.src}
              text={item.text}
              label={item.label}
              />
            ))}
          </ul>
           <ul className="cards__items">
            {data2.map((item) => (
              <ServicesItem key={item.id} 
              src={item.src}
              text={item.text}
              label={item.label}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
