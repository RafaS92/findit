import { useMemo} from "react";
import {
  GoogleMap
} from "@react-google-maps/api";
import "../css/map.css"




export default function Map() {
    const center = useMemo(()=>({lat:parseFloat("43"),lng:parseFloat("-80") }),[]) 
  return (
    <div className="container-map">
        <div className="controls">
            <h1>Commute</h1>
        </div>
        <div className="map">
            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container"></GoogleMap>
        </div>
    </div>
  )
 
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};

