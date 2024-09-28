"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Fade } from "react-awesome-reveal";

// Latitude and longitude for Stockton
const defaultCenter = { lat: 37.9577, lng: -121.2908 };

// Custom map icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Maps = () => {
  return (
    <div className="h-[80vh] w-full max-w-[95vw] md:max-w-[90vw] mx-auto p-2 md:p-4 space-y-4 bg-transparent">
      <Fade>
        <h1 className="text-xl md:text-2xl font-semibold text-gray-200 text-center">
          Our Geographical Location
        </h1>
      </Fade>
      <MapContainer
        center={[defaultCenter.lat, defaultCenter.lng]}
        zoom={7}
        className="h-[60vh] md:h-[80vh] w-full rounded-sm"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Static marker for Stockton */}
        <Marker
          position={[defaultCenter.lat, defaultCenter.lng]}
          icon={customIcon}
        >
          <Popup>
            <p>Our Gym Centre</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
