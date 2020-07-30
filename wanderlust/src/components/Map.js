import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "500px",
  height: "500px",
};

const center = {
  lat: 25.7617,
  lng: -80.1918,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  // if (loadError) return "Error loading maps";
  return (
    <div>
      <LoadScript
        googleMapsApiKey='AIzaSyCca7zM4LtiL7PygucWbisKSzAFLpp8Be0'
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          options={options}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
