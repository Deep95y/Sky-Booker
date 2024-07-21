import React, { useState } from "react";
import "./App.css";
import { MdArrowDropDown } from "react-icons/md";

const Classselection = ({ setClassSelection }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("SDF");
  const [filteredOptions, setFilteredOptions] = useState([
    "Economy",
    "Business",
    "First",
  ]);
  const [isEditing, setIsEditing] = useState(false);

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
    setIsEditing(true);
  };

  const handleMenuItemClick = (airport) => {
    setDestinationAirport(airport);
    setClassSelection(airport);
    setShowMenu(false);
    setIsEditing(false);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setFilteredOptions(
      ["Economy", "Business", "First"].filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div
      style={{
        fontFamily:'sans-serif',
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
            background: "#1b251a",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", flex: 1,fontFamily:'sans-serif' }}>
            <div style={{fontSize:'13px',marginTop:'0.5rem'}}>Cabin Selection</div>
            <div
              style={{
                marginTop: ".2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              {isEditing ? (
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder='economy'
                  style={{
                    width: "100%",
                    padding: ".3125rem",
                    borderRadius: ".2rem",
                    border: ".05rem solid #181818",
                    background: "#181818",
                    color: "white",
                    marginTop:'12px',
                    marginRight:'3rem',
                    
                  }}
                />
              ) : (
                <div style={{marginTop:'5px'}}>economy</div>
              )}
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
            }}
          >
            {filteredOptions.map((option) => (
              <div
                key={option}
                onClick={() => handleMenuItemClick(option)}
                className="dropdown-menu-item"
                style={{
                  width: "14rem",
                  height: "2.8125rem",
                  background: "#181818",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: ".625rem",
                  marginBottom: ".3125rem",
                  borderRadius: ".25rem",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Classselection;
