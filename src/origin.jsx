import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { MdArrowDropDown } from "react-icons/md";

const Origin = ({ setOrigin }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState("JFK");

  const airports = ["JFK", "DEL", "SYD", "BOM", "BNE", "BLR"];

 
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setShowMenu((prev) => !prev);
  };

  const handleMenuItemClick = (airport) => {
    setSelectedAirport(airport);
    setShowMenu(false);
    setOrigin(airport);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
   
    document.addEventListener("mousedown", handleClickOutside);

  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      style={{
        fontFamily: 'sans-serif',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: '1rem',
      }}
    > 
      <div
        style={{
          color: "#9a9e9a",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          marginBottom: '1rem',
        }}
      >
        Choose Origin And Destination Airport
      </div>
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
            <div style={{ fontSize: '13px', marginTop: '0.5rem' }}>Origin</div>
            <div
              style={{
                marginTop: ".2rem",
                display: "flex",
                alignItems: "center"
              }}
            >
              {selectedAirport}
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
            {airports.map((airport) => (
              <div
                key={airport}
                onClick={() => handleMenuItemClick(airport)}
                className="dropdown-menu-item"
                style={{
                  width: "100%",
                  height: "2.8125rem",
                  background: selectedAirport === airport ? "#1b251a" : "#181818",
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

export default Origin;
