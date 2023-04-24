import React, { useState } from "react";

function DateInput() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numDays, setNumDays] = useState("");

  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
    if (checkOut) {
      const diffTime = Math.abs(new Date(checkOut) - new Date(e.target.value));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNumDays(diffDays);
    }
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
    if (checkIn) {
      const diffTime = Math.abs(new Date(e.target.value) - new Date(checkIn));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNumDays(diffDays);
    }
  };

  return (
    <div>
      <label htmlFor="checkin">Check-in:</label>
      <input
        type="date"
        id="checkin"
        value={checkIn}
        onChange={handleCheckInChange}
      />

      <label htmlFor="checkout">Check-out:</label>
      <input
        type="date"
        id="checkout"
        value={checkOut}
        onChange={handleCheckOutChange}
      />

      <label htmlFor="numdays">Number of days:</label>
      <input type="number" id="numdays" value={numDays} readOnly />
    </div>
  );
}

export default DateInput;
