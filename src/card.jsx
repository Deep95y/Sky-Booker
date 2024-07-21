import React from "react";
import "./card.css";

const FlightCardContainer = ({
  detail,
  selectedAirport,
  destinationAirport,
  json_data,
}) => {
  console.log("Detail:", detail);
  console.log("Selected Airport:", selectedAirport);
  console.log("Destination Airport:", destinationAirport);
  console.log("JSON Data:", json_data.departureTimeFrom);

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
            {selectedAirport} - {destinationAirport}
          </div>
          <div className="departure-info">
            {json_data.departureTimeFrom.slice(0, 9)} -{" "}
            {json_data.departureTimeTo.slice(0, 9)}
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
