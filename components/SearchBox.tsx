import Image from "next/image";
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

// Define Type for Select Position
interface SelectPosition {
  lat: number;
  lon: number;
  display_name: string;
  place_id: number;
}

// Define Props
interface SearchBoxProps {
  selectPosition?: SelectPosition;
  setSelectPosition: (position: SelectPosition) => void;
}

// Define Type for API Response
interface Place {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
}

export default function SearchBox({
  selectPosition,
  setSelectPosition,
}: SearchBoxProps) {
  const [searchText, setSearchText] = useState<string>("");
  const [listPlace, setListPlace] = useState<Place[]>([]);

  const handleSearch = () => {
    if (!searchText) return;

    const params = {
      q: searchText,
      format: "json",
      addressdetails: "1",
      polygon_geojson: "0",
    };

    const queryString = new URLSearchParams(params).toString();

    fetch(`${NOMINATIM_BASE_URL}${queryString}`)
      .then((response) => response.json()) // Directly parse JSON
      .then((data: Place[]) => {
        setListPlace(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ flex: 1, position: "relative" }}>
        <input
          style={{ width: "100%" }}
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          className={`bg-secondary w-full rounded-lg focus:border focus:border-solid focus:outline-none focus:border-primary text-fontPrimary border pr-4 pl-10 py-2`}
          placeholder="Search for Area, Street,..."
        />
        <BiSearchAlt className="text-xl text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />

        <button
          className="bg-primary px-5 py-2 text-white rounded-r-lg absolute right-0"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <ul
        className={`${listPlace ? `h-[calc(100vh-650px)] overflow-auto` : ""}`}
        aria-label="search results"
      >
        {listPlace.map((item) => (
          <li
            key={item.place_id}
            onClick={() =>
              setSelectPosition({
                lat: parseFloat(item.lat),
                lon: parseFloat(item.lon),
                display_name: item.display_name,
                place_id: item.place_id,
              })
            }
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              padding: "5px",
              borderBottom: "1px solid #ddd",
            }}
            className="hover:bg-secondary"
          >
            <Image
              width={20}
              height={20}
              src={"/location-pin.svg"}
              alt="Placeholder"
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <p style={{ margin: 0 }}>{item.display_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
