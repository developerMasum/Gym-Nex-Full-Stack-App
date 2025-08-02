"use client";
import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Fade } from "react-awesome-reveal";

const defaultCenter = { lat: 43.0037, lng: -75.6071 };

const containerStyle = {
  width: "100%",
  height: "60vh",
};

const Maps = () => {
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [mapsObject, setMapsObject] = useState<typeof google.maps | null>(null);

  return (
    <div className="h-[80vh] w-full max-w-[95vw] md:max-w-[90vw] mx-auto p-2 md:p-4 space-y-4 bg-transparent">
      <Fade>
        <h1 className="text-xl md:text-2xl font-semibold text-gray-200 text-center">
          Our Geographical Location
        </h1>
      </Fade>

      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        onLoad={() => {
          setMapApiLoaded(true);
          setMapsObject(window.google.maps);
        }}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={12}
          options={{
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
          }}
        >
          {mapApiLoaded && mapsObject && (
            <Marker
              position={defaultCenter}
              icon={{
                url: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                scaledSize: new mapsObject.Size(25, 25), // smaller icon size
              }}
            >
              <InfoWindow position={defaultCenter}>
                <div>
                  <p>
                    901 N Pitt St., Suite 170
                    <br />
                    Alexandria, NY, USA
                  </p>
                </div>
              </InfoWindow>
            </Marker>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Maps;
