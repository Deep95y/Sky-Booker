import React, { useState } from "react";
import "./App.css";
import { MdArrowDropDown } from "react-icons/md";

const Origin = ({ setOrigin }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState("SDF");

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = (airport) => {
    setSelectedAirport(airport);
    setShowMenu(false);
    setOrigin(airport);
  };

  return (
    <>
      <div
        style={{
          fontFamily:'sans-serif',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop:'1rem',
        }}
      >
        <div
          style={{
            color: "#9a9e9a",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            marginLeft:'1.5rem'
          }}
        >
          Choose Origin And Destination Airport
        </div>
        <div style={{}}>
          <div className="dropdown" style={{ marginTop: "10%" }}>
            <div
              onClick={handleButtonClick}
              className="dropdown-button"
              style={{
                width: "14.5rem",
                height: "2.5rem",
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
                <div style={{fontSize:'13px'}}>Origin</div>
                <div style={{ marginTop: ".2rem" }}>{selectedAirport}</div>
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
                  onClick={() => handleMenuItemClick("BOM")}
                  className="dropdown-menu-item"
                  style={{
                    width: "14.8125rem",
                    height: "2.8125rem",
                    background: "#181818",
                    display: "flex",
                  }}
                >
                  BOM
                </div>
                <div
                  onClick={() => handleMenuItemClick("BNE")}
                  className="dropdown-menu-item"
                  style={{
                    width: "14.8125rem",
                    height: "2.8125rem",
                    background: "#181818",
                    display: "flex",
                  }}
                >
                  BNE
                </div>
                <div
                  onClick={() => handleMenuItemClick("BLR")}
                  className="dropdown-menu-item"
                  style={{
                    width: "14.8125rem",
                    height: "2.8125rem",
                    background: "#181818",
                    display: "flex",
                  }}
                >
                  BLR
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Origin;
