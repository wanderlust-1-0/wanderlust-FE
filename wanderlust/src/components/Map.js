import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker,
} from "react-google-maps";
import GeoCode from "react-geocode";
GeoCode.setApiKey("AIzaSyCca7zM4LtiL7PygucWbisKSzAFLpp8Be0");
GeoCode.enableDebug();

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      city: "",
      area: "",
      state: "",
      mapPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng,
      },
      markerPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng,
      },
    };
  }
  // End Constructor

  componentDidMount() {
    GeoCode.fromLatLng(this.state.mapPosition.lat, this.state.mapPosition.lng)
      .then((response) => {
        let address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);

        console.log("from the state>>>.", city);
        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : "",
        });
      })
      .catch((error) => {
        console.log("Geocode Error: ", error);
      });
  }

  // Get City
  getCity = (addressArray) => {
    console.log("get city>>>>>>>", addressArray);
    let city = "";
    addressArray.forEach((component) => {
      console.log("address component>>>>>>", component);
      if (
        component.types[0] &&
        "administrative_area_level_2" === component.types[0]
      ) {
        console.log(component.types[0]);
        city = component.long_name;
        console.log("component: city>>>>>>", city);
      }
    });
    return city;
  };

  // Get Area
  getArea = (addressArray) => {
    let area = "";
    addressArray.forEach((address) => {
      if (address.types[0]) {
        address.types.forEach((type) => {
          if ("sublocality_level_1" === type || "locality" === type) {
            area = address.long_name;
          }
        });
      }
    });
    return area;
  };

  // Get State
  getState = (addressArray) => {
    let state = "";
    addressArray.forEach((address) => {
      if (
        address.types[0] &&
        "administrative_area_level_1" === address.types[0]
      ) {
        state = address.long_name;
      }
    });
    return state;
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.markerPosition.lat !== this.props.center.lat ||
      this.state.address !== nextState.address ||
      this.state.city !== nextState.city ||
      this.state.area !== nextState.area ||
      this.state.state !== nextState.state
    ) {
      return true;
    } else if (this.props.center.lat === nextProps.center.lat) {
      return false;
    }
  }

  onMarkerDragEnd = (event) => {
    console.log("event", event);
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();
    GeoCode.fromLatLng(newLat, newLng)
      .then((response) => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getState(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);

        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : "",
          markerPosition: {
            lat: newLat,
            lng: newLng,
          },
        });
      })
      .catch((error) => {
        console.log("on drag end error", error);
      });
  };

  render() {
    console.log("map state: ", this.state);
    const AsyncMap = withScriptjs(
      withGoogleMap(() => (
        <GoogleMap
          google={this.props.google}
          defaultZoom={this.props.zoom}
          defaultCenter={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng,
          }}
        >
          {/*Marker*/}
          <Marker
            google={this.props.google}
            name={"Dolores park"}
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng,
            }}
          />
          <Marker />
        </GoogleMap>
      ))
    );
    let map;
    if (this.props.center.lat !== undefined) {
      map = (
        <div>
          <AsyncMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCca7zM4LtiL7PygucWbisKSzAFLpp8Be0&libraries=places`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={
              <div style={{ height: this.props.height, width: "500px" }} />
            }
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
      );
    } else {
      map = <div style={{ height: this.props.height }} />;
    }
    return map;
  }
}

export default Map;
