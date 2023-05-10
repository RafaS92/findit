import {useState,useMemo,useRef,useCallback} from "react";
import {
  GoogleMap,
  Marker,
  Circle,
  DirectionsRenderer,
  MarkerClusterer
} from "@react-google-maps/api";
import "../css/map.css"
import Places from "./Places";




export default function Map() {
  const [place,setPlace] = useState()
  const mapRef = useRef()
  //To ensure values will keep the same every re-render.
  const center = useMemo(()=>({lat:parseFloat("43"),lng:parseFloat("-80") }),[]) 
  //To optimize re-rendering
  const onLoad = useCallback((map) => (mapRef.current = map), [])
  const options = useMemo(()=> ({disabledDefaultUI: true,clickableIcons: false,}),[])
  return (
    <div className="container-map">
        <div className="controls">
            <h1>Commute</h1>
            <Places setPlace={(position) => {
              setPlace(position);
              mapRef.current?.panTo(position)
            }}/>
        </div>
        <div className="map">
            <GoogleMap zoom={10}
              center={center}
              mapContainerClassName="map-container"
              options={options}
              onLoad={onLoad}
            >
              {place && (
                <>
                  <Marker position={place} />
                  <Circle center={place} radius={5000} options={nearOptions} />
                  <Circle center={place} radius={20000} options={farOptions} />
                  <Circle center={place} radius={40000} options={notRecomendedOptions} />
                </>
              )}
            </GoogleMap>
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
const nearOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#5aff14",
  fillColor: "#5aff14",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#ff9d00",
  fillColor: "#ff9d00",
};
const notRecomendedOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};

