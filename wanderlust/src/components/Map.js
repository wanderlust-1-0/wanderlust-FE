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

const Map = ({ lat, lng }) => {
  // if (loadError) return "Error loading maps";
  console.log("lat, lng from map", lat, lng);
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
      ></GoogleMap>
    </div>
  );
};

export default Map;
