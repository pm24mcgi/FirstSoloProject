// const getCoordinates = (address, GMapKey) => {

//   fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GMapKey}`)
//     .then(response => response.json())
//     .then(data => {
//       const lat = data.results[0].geometry.location.lat;
//       const lng = data.results[0].geometry.location.lng;
//       const center = [lat, lng]
//       return center
//     })
// };

// export default getCoordinates;
