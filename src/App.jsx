import React, { useState, useEffect } from "react";
import "./App.css";
import Origin from "./origin";
import Destination from "./destination";
import Classselection from "./class";
import Profilter from "./profilter";
import FlightCardContainer from "./card";
import axios from "axios";

const App = () => {
  const [detail, setDetail] = useState([]);
  const [origin, setOrigin] = useState("SYD");
  const [destination, setDestination] = useState("JFK");
  const [classSelection, setClassSelection] = useState("Business");
  const [filter, setFilter] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const headers = {
    "content-type": "application/json",
  };

  const json_data = {
    origin,
    destination,
    partnerPrograms: [
      "Air Canada",
      "United Airlines",
      "KLM",
      "Qantas",
      "American Airlines",
      "Etihad Airways",
      "Alaska Airlines",
      "Qatar Airways",
      "LifeMiles",
    ],
    stops: 2,
    departureTimeFrom: "2024-07-09T00:00:00Z",
    departureTimeTo: "2024-10-07T00:00:00Z",
    isOldData: false,
    limit: 302,
    offset: 0,
    cabinSelection: [classSelection],
    date: "2024-07-09T12:00:17.796Z",
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "https://cardgpt.in/apitest",
        json_data,
        { headers }
      );
      console.log(response.data);
      setDetail(response.data);
      setHasSearched(true); 
    } catch (error) {
      console.error("There was an error making the request!", error);
    }
  };

  return (
    <div
      style={{
        height: "160%",
        width: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: 'sans-serif',
      }}
      className="primary-container"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Origin setOrigin={setOrigin} />
        <Destination setDestination={setDestination} />
        <Classselection setClassSelection={setClassSelection} />
        <Profilter setFilter={setFilter} />
        <div className="search-button-container" style={{ marginLeft:'1.5rem', alignSelf:'flex-start',marginTop:'2rem'}}>
          <button type="button" className="search-button" onClick={handleSave}>
            Search
          </button>
        </div>
      </div>
      {hasSearched && (detail.length === 0 ? (
        <div style={{ marginTop: "5%", color: "#9a9e9a" }}>
          No flight details available
        </div>
      ) : (
        <FlightCardContainer
          detail={detail}
          selectedAirport={origin}
          destinationAirport={destination}
          json_data={json_data}
        />
      ))}
    </div>
  );
};

export default App;
