import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { MdArrowDropDown } from "react-icons/md";

const Classselection = ({ setClassSelection }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("Economy");
  const [filteredOptions, setFilteredOptions] = useState([
    "Economy",
    "Business",
    "First",
  ]);

  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setShowMenu(prev => !prev);
  };

  const handleMenuItemClick = (option) => {
    setSelectedOption(option);
    setClassSelection(option);
    setShowMenu(false);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setFilteredOptions(
      ["Economy", "Business", "First"].filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
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
            cursor: "pointer",
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '4px',
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", flex: 1, fontFamily: 'sans-serif' }}>
            <div style={{ fontSize: '13px', marginTop: '0.5rem' }}>Cabin Selection</div>
            <div
              style={{
                marginTop: ".2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ marginTop: '5px', textTransform: 'lowercase' }}>{selectedOption}</div>
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
            {filteredOptions.map(option => (
              <div
                key={option}
                onClick={() => handleMenuItemClick(option)}
                className="dropdown-menu-item"
                style={{
                  width: "14rem",
                  height: "2.8125rem",
                  background: selectedOption === option ? "#1b251a" : "#181818",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: ".625rem",
                  marginBottom: ".3125rem",
                  borderRadius: ".25rem",
                  cursor: "pointer"
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
