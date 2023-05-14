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

const generateBusinesses = (position) => {
  const businesses = [];
  for (let i = 0; i < 50; i++) {
    const direction = Math.random() < 0.2 ? -2 : 2;
    businesses.push({
      lat: position.lat + Math.random() / direction,
      lng: position.lng + Math.random() / direction,
    });
  }
  return businesses;
};


export default function Map() {
  
  const [place,setPlace] = useState()
  const [businesses,setBusinesses] = useState([])
  const mapRef = useRef()

  //To ensure values will keep the same every re-render.
  const center = useMemo(()=>({lat:parseFloat("43"),lng:parseFloat("-80") }),[]) 

  //To optimize re-rendering
  const onLoad = useCallback((map) => (mapRef.current = map), [])
  const options = useMemo(()=> ({disabledDefaultUI: true,clickableIcons: false,}),[])

  const handlePlaceChange = (place) => {
  let businesses = generateBusinesses(place)
  setPlace(place);
  setBusinesses(businesses);
  mapRef.current?.panTo(place)
    console.log(businesses)
  }

  return (
    <div className="container-map">
        <div className="controls">
            <h1>Commute</h1>
            <Places setPlace={(e) => handlePlaceChange(e)}/>
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
                  <Marker position={place} icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"} />
                  {businesses.length > 0 && businesses.map(business => <Marker key={business.lat + business.lng} position={business} />)}
                  <Circle center={place} radius={5000} options={nearOptions} />
                  <Circle center={place} radius={20000} options={farOptions} />
                  <Circle center={place} radius={40000} options={lastOptions} />
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
const lastOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};
