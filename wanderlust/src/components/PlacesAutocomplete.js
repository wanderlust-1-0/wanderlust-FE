// import React from "react";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import useOnclickOutside from "react-cool-onclickoutside";
// import { MDBAutocomplete } from "mdbreact";

// const PlacesAutocomplete = () => {
//   const {
//     ready,
//     value,
//     suggestions,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   console.log("this is ac value: ", value);
//   console.log("suggestion: ", suggestions);
//   const ref = useOnclickOutside(() => {
//     clearSuggestions();
//   });

//   const handleInput = (value) => {
//     setValue(value);
//   };

//   const handleSelect = ({ description }) => () => {
//     setValue(description, false);
//     clearSuggestions();

//     getGeocode({ address: description })
//       .then((results) => getLatLng(results[0]))
//       .then(({ lat, lng }) => {
//         console.log("Coordinates: ", { lat, lng });
//       })
//       .catch((error) => {
//         console.log("Error: ", error);
//       });
//   };

//   const renderSuggestions = () =>
//     data.map((suggestion) => {
//       const {
//         id,
//         structured_formatting: { main_text, secondary_text },
//       } = suggestion;
//       return (
//         <li key={id} onClick={handleSelect(suggestion)}>
//           <strong>{main_text}</strong> <small>{secondary_text}</small>
//         </li>
//       );
//     });

//   console.log("data: ", data);
//   return (
//     <div ref={ref}>
//       {/* <label htmlFor='address'>Address</label>
//       <input
//         value={value}
//         onChange={handleInput}
//         disabled={!ready}
//         placeholder='Address'
//         id='address'
//       /> */}
//       <MDBAutocomplete
//         data={data}
//         label='Address'
//         clear
//         id='input'
//         value={value}
//         getValue={handleInput}
//         disabled={!ready}
//       />
//       {/* {status === "OK" && <ul>{renderSuggestions()}</ul>} */}
//     </div>
//   );
// };

// export default PlacesAutocomplete;
