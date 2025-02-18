import React, { useState, useEffect } from "react";

type LocationType = {
  latitude: number;
  longitude: number;
} | null;

function LocationComponent() {
  const [location, setLocation] = useState<LocationType>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Your Location</h2>
      <p>Latitude: {location?.latitude}</p>
      <p>Longitude: {location?.longitude}</p>
    </div>
  );
}

export default LocationComponent;
