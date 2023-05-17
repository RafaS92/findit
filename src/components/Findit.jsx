import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
function FindIt() {
  let MapsApi = process.env.REACT_APP_MAPS_API_KEY;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: MapsApi,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Map />
      </div>
    );
  }
}

export default FindIt;
