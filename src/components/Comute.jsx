import { useLoadScript } from "@react-google-maps/api";
import { useState } from "react";
import Map from "./Map";
import React from "react";

function Comute() {
  const [place, setPlace] = useState();
  const [businesses, setBusinesses] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAVmLdsY4QISPZDOd39pTsFpyfxuxYPxXk",
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Map
          place={place}
          businesses={businesses}
          setPlace={setPlace}
          setBusinesses={setBusinesses}
        />
      </div>
    );
  }
}

export default Comute;
