import React, { useState } from "react";
import "./App.css";
import { MdArrowDropDown } from "react-icons/md";

const Destination = ({ setDestination }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [destinationAirport, setDestinationAirport] = useState("SDF");

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = (airport) => {
    setDestinationAirport(airport);
    setShowMenu(false);
    setDestination(airport);
  };

  return (
    <>
      <div
        style={{
          fontFamily:'sans-serif',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{}}>
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
              }}
            >
              <div
                style={{
                  position: "absolute",
                  marginLeft: "75%",
                  marginTop: "3%",
                }}
              >
                <MdArrowDropDown color="white" style={{ fontSize: "1.5625rem" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{fontSize:'13px'}}>Destination</div>
                <div style={{ marginTop: ".2rem" }}>{destinationAirport}</div>
              </div>
            </div>

            {showMenu && (
              <div className="dropdown-menu">
                <div
                  onClick={() => handleMenuItemClick("JFK")}
                  className="dropdown-menu-item"
                  style={{
                    width: "14.8125rem",
                    height: "2.8125rem",
                    background: "#181818",
                    display: "flex",
                  }}
                >
                  JFK
                </div>
                <div
                  onClick={() => handleMenuItemClick("DEL")}
                  className="dropdown-menu-item"
                  style={{
                    width: "14.8125rem",
                    height: "2.8125rem",
                    background: "#181818",
                    display: "flex",
                  }}
                >
                  DEL
                </div>
                <div
                  onClick={() => handleMenuItemClick("SYD")}
                  className="dropdown-menu-item"
                  style={{
                    width: "14.8125rem",
                    height: "2.8125rem",
                    background: "#181818",
                    display: "flex",
                  }}
                >
                  SYD
                </div>
                <div
                  onClick={() => handleMenuItemClick("LHR")}
                  className="dropdown-menu-item"
                  style={{
                    width: "14.8125rem",
                    height: "2.8125rem",
                    background: "#181818",
                    display: "flex",
                  }}
                >
                  LHR
                </div>
                <div
                  onClick={() => handleMenuItemClick("CDG")}
                  className="dropdown-menu-item"
                  style={{
                    width: "14.8125rem",
                    height: "2.8125rem",
                    background: "#181818",
                    display: "flex",
                  }}
                >
                  CDG
                </div>
                <div
                  onClick={() => handleMenuItemClick("DOH")}
                  className="dropdown-menu-item"
                  style={{
                    width: "14.8125rem",
                    height: "2.8125rem",
                    background: "#181818",
                    display: "flex",
                  }}
                >
                  DOH
                </div>
                <div
                  onClick={() => handleMenuItemClick("SIN")}
                  className="dropdown-menu-item"
                  style={{
                    width: "14.8125rem",
                    height: "2.8125rem",
                    background: "#181818",
                    display: "flex",
                  }}
                >
                  SIN
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
