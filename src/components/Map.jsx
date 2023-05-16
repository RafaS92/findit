import { useState, useMemo, useRef, useCallback } from "react";
import {
  GoogleMap,
  Marker,
  Circle,
  DirectionsRenderer,
  MarkerClusterer,
} from "@react-google-maps/api";
import "../css/map.css";
import Places from "./Places";
import Distance from "./Distantce";
import Chart from "react-apexcharts";

export default function Map() {
  const [place, setPlace] = useState();
  const [businesses, setBusinesses] = useState([]);
  const [directions, setDirections] = useState();
  const [series, setSeries] = useState([]);
  const mapRef = useRef();

  const optionsChart = {
    series: series,
    labels: ["Near", "Medium", "Far"],
    colors: ["#03c900", "#ff9d00", "#FF5252"],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              fontSize: "20px",
              color: "#ffffff",
            },
            value: {
              fontSize: "16px",
              color: "#ffffff",
            },
          },
        },
      },
    },
  };

  //To ensure values will keep the same every re-render.
  const center = useMemo(
    () => ({ lat: parseFloat("43"), lng: parseFloat("-80") }),
    []
  );

  //To optimize re-rendering
  const onLoad = useCallback((map) => (mapRef.current = map), []);
  const options = useMemo(
    () => ({ disabledDefaultUI: true, clickableIcons: false }),
    []
  );

  const generateBusinesses = (position) => {
    const businesses = [];
    for (let i = 0; i < 50; i++) {
      const direction = Math.random() < 0.4 ? -4 : 4;
      businesses.push({
        lat: position.lat + Math.random() / direction,
        lng: position.lng + Math.random() / direction,
      });
    }

    categorizeBusinessesByPosition(position, businesses);
    return businesses;
  };

  // To categorize businesses by position/distance
  const categorizeBusinessesByPosition = (positon, businesses) => {
    let nearbyBusinesses = 0;
    let mediumBusinesses = 0;
    let farBussinesses = 0;

    businesses?.forEach((business) => {
      if (
        Math.abs(business.lat - positon.lat) < 0.07 &&
        Math.abs(business.lng - positon.lng) < 0.07
      ) {
        nearbyBusinesses++;
      } else if (
        Math.abs(business.lat - positon.lat) < 0.17 &&
        Math.abs(business.lng - positon.lng) < 0.17
      ) {
        mediumBusinesses++;
      } else {
        farBussinesses++;
      }

      setSeries([nearbyBusinesses, mediumBusinesses, farBussinesses]);
    });
  };

  const handlePlaceChange = (place) => {
    let businesses = generateBusinesses(place);
    setPlace(place);
    setBusinesses(businesses);
    mapRef.current?.panTo(place);
  };

  const fetchDirections = (business) => {
    if (!place) return;

    const service = new window.google.maps.DirectionsService();
    service.route(
      {
        origin: place,
        destination: business,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  };

  return (
    <div className="container-map">
      <div className="controls">
        <h1>Find Retailers</h1>
        <Places setPlace={(e) => handlePlaceChange(e)} />
        {!place && (
          <p className="address-label">
            Please enter the address of your base.
          </p>
        )}
        {place && (
          <div className="chart-container">
            <h4 className="chart-title">Retailers distance:</h4>
            <Chart
              options={optionsChart}
              series={series}
              type="donut"
              width="100%"
            />
          </div>
        )}
        {place && !directions && (
          <h2 className="select-label">Select a retailer</h2>
        )}
        {/* To access default routes/first leg NOTE: "leg" refers to a segment of a route that occurs between two waypoints*/}
        {directions && (
          <Distance
            directions={directions}
            leg={directions.routes[0].legs[0]}
          />
        )}
      </div>
      <div className="map">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
        >
          {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{
                zIndex: 50,
                strokeColor: "#002aff",
                strokeWeight: 5,
              }}
            />
          )}
          {place && (
            <>
              <Marker
                position={place}
                icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
                size={10}
              />
              <MarkerClusterer>
                {(clusterer) =>
                  businesses.map((business) => (
                    <Marker
                      key={business.lat + business.lng}
                      position={business}
                      clusterer={clusterer}
                      size={10}
                      onClick={() => {
                        fetchDirections(business);
                      }}
                    />
                  ))
                }
              </MarkerClusterer>
              <Circle center={place} radius={5000} options={nearOptions} />
              <Circle center={place} radius={20000} options={farOptions} />
              <Circle center={place} radius={40000} options={lastOptions} />
            </>
          )}
        </GoogleMap>
      </div>
    </div>
  );
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
  fillOpacity: 0.15,
  strokeColor: "#5aff14",
  fillColor: "#5aff14",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.1,
  strokeColor: "#ff9d00",
  fillColor: "#ff9d00",
};
const lastOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.1,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};
