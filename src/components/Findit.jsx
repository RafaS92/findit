import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import React from "react";

function FindIt() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAVmLdsY4QISPZDOd39pTsFpyfxuxYPxXk",
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="">
        <Map />
      </div>
    );
  }
}

export default FindIt;
