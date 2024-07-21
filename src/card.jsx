import React from "react";
import "./card.css";

const FlightCardContainer = ({
  detail,
  selectedAirport,
  destinationAirport,
  json_data,
}) => {
  
console.log(json_data.departureTimeFrom);
console.log(typeof(json_data.departureTimeFrom));

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};


  return (
    <div className="flight-card-container">
      {detail.data.map((value, index) => (
        <div className="flight-card" key={index}>
          <div>
            <img
              src="flight-18.png"
              className="flight-icon"
              alt="Flight"
            />
          </div>
          <div className="partner-program">{value.partner_program}</div>
          <div className="airport-info">
            {selectedAirport} <img src="arrow-right-solid.svg" style={{ width:"0.8rem", backgroundcolor:"white"}}></img> {destinationAirport}
          </div>
          <div className="departure-info">
          {formatDate(json_data.departureTimeFrom)} - {formatDate(json_data.departureTimeTo)}
          </div>
          {!value.min_business_miles ? (
            <div style={{fontWeight:'bold',fontSize:'20px'}}>N/A</div>
          ) : (
            <div className="miles-info">
              <div className="miles">{value.min_business_miles}</div>
              <div className="plus"> + </div>
              <div className="tax">${value.min_business_tax}</div>
            </div>
          )}
          <div className="miles-label">Min Business Miles</div>
          {!value.min_economy_miles ? (
            <div style={{fontWeight:'bold',fontSize:'20px'}}>N/A</div>
          ) : (
            <div className="miles-info">
              <div className="miles">{value.min_economy_miles}</div>
              <div className="plus">+ </div>
              <div className="tax">${value.min_economy_tax}</div>
            </div>
          )}
          <div className="miles-label">Min Economy Miles</div>
          {!value.min_first_miles ? (
            <div className="miles-na" style={{fontWeight:'bold',fontSize:'20px'}}>N/A</div>
          ) : (
            <div className="miles-info">
              <div className="miles">{value.min_first_miles}</div>
              <div className="plus">+ </div>
              <div className="tax">${value.min_first_tax}</div>
            </div>
          )}
          <div className="miles-label">Min First Miles</div>
        </div>
      ))}
    </div>
  );
};

export default FlightCardContainer;
