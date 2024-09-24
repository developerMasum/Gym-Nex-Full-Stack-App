// import dynamic from "next/dynamic";

// import L from "leaflet";

// // Dynamically load the MapContainer, Marker, Popup, and TileLayer from react-leaflet
// const MapContainer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.MapContainer),
//   { ssr: false }
// );
// const Marker = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Marker),
//   { ssr: false }
// );
// const TileLayer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.TileLayer),
//   { ssr: false }
// );
// const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
//   ssr: false,
// });

// // Leaflet icon setup
// const customIcon = new L.Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// interface GeoData {
//   _id: string;
//   totalCustomers: number;
// }

// const Map = () => {
//   // Check if we're in the browser before accessing window-related functions
//   if (typeof window === "undefined") {
//     return null; // Return null if running on the server
//   }

//   // Example data for a single location and its total customers
//   const singleLocation: GeoData = {
//     _id: "Dhaka",
//     totalCustomers: 1500,
//   };

//   // Define coordinates for a specific location
//   const coordinates = {
//     lat: 23.8103,
//     lng: 90.4125,
//   };

//   return (
//     <div className="h-[80vh] w-full mx-auto p-2 md:p-4 space-y-4">
//       <h1 className="text-xl md:text-2xl font-semibold text-gray-600 text-center">
//         Customer Location
//       </h1>
//       <MapContainer
//         center={[coordinates.lat, coordinates.lng]}
//         zoom={7}
//         className="h-[70vh] md:h-full rounded-sm"
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />

//         <Marker position={coordinates} icon={customIcon}>
//           <Popup>
//             {singleLocation._id}: {singleLocation.totalCustomers} customers
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;
