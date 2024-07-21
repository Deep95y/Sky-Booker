import React, { useState } from "react";
import "./App.css";
import { MdArrowDropDown } from "react-icons/md";

const Destination = ({ setDestination }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [destinationAirport, setDestinationAirport] = useState("DEL");
  const [filteredAirports, setFilteredAirports] = useState([
    "JFK", "DEL", "SYD", "LHR", "CDG", "DOH", "SIN"
  ]);

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = (airport) => {
    setDestinationAirport(airport);
    setDestination(airport);
    setShowMenu(false);
  };

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="dropdown" style={{ marginTop: "10%" }}>
        <div
          onClick={handleButtonClick}
          className="dropdown-button"
          style={{
            width: "14.375rem",
            height: "2.4rem",
            background: "#181818",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            cursor: "pointer",
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '4px',
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: '13px', marginTop: '0.5rem' }}>Destination</div>
            <div
              style={{
                marginTop: ".2rem",
                display: "flex",
                alignItems: "center"
              }}
            >
              {destinationAirport}
            </div>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <MdArrowDropDown color="white" style={{ fontSize: "1.5625rem" }} />
          </div>
        </div>

        {showMenu && (
          <div
            className="dropdown-menu"
            style={{
              marginTop: ".625rem",
              background: "#181818",
              padding: ".625rem",
              borderRadius: ".25rem",
              width: "14.375rem",
            }}
          >
            {filteredAirports.map((airport) => (
              <div
                key={airport}
                onClick={() => handleMenuItemClick(airport)}
                className="dropdown-menu-item"
                style={{
                  width: "100%",
                  height: "2.8125rem",
                  background: destinationAirport === airport ? "#1b251a" : "#181818",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: ".625rem",
                  marginBottom: ".3125rem",
                  borderRadius: ".25rem",
                  cursor: "pointer"
                }}
              >
                {airport}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Destination;
