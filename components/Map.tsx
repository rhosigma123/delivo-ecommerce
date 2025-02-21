import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Define Type for SelectPosition
interface SelectPosition {
  lat: number;
  lon: number;
}

// Define Props
interface ResetCenterViewProps {
  selectPosition?: SelectPosition;
}

interface MapProps {
  selectPosition?: SelectPosition;
}

// Define Default Position
const defaultPosition: [number, number] = [51.505, -0.09];

const apiKey = "YOUR_API_KEY"; // Replace with your actual API key

function ResetCenterView({ selectPosition }: ResetCenterViewProps) {
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView([selectPosition.lat, selectPosition.lon], 13, {
        animate: true,
      });
    }
  }, [selectPosition, map]);

  return null;
}

export default function Maps({ selectPosition }: MapProps) {
  const [currentLocation, setCurrentLocation] = useState<
    [number, number] | null
  >(null);
  const [destination, setDestination] = useState<[number, number] | null>(null);
  const [route, setRoute] = useState<[number, number][]>([]);

  // Fetch route when both locations are set
  useEffect(() => {
    if (currentLocation && destination) {
      const fetchRoute = async () => {
        const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${currentLocation[1]},${currentLocation[0]}&end=${destination[1]},${destination[0]}`;

        try {
          const response = await fetch(url);
          const data = await response.json();

          if (data.routes && data.routes.length > 0) {
            const coords = data.routes[0].geometry.coordinates.map(
              ([lon, lat]: [number, number]) => [lat, lon]
            );
            setRoute(coords);
          }
        } catch (error) {
          console.error("Error fetching route:", error);
        }
      };

      fetchRoute();
    }
  }, [currentLocation, destination]);

  return (
    <MapContainer
      center={defaultPosition}
      zoom={5}
      style={{
        width: "100%",
        height: "500px",
        borderRadius: "20px",
        marginTop: "20px",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />

      {currentLocation && (
        <Marker position={currentLocation}>
          <Popup>Current Location</Popup>
        </Marker>
      )}

      {destination && (
        <Marker position={destination}>
          <Popup>Destination</Popup>
        </Marker>
      )}

      {route.length > 0 && <Polyline positions={route} color="blue" />}

      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
}
