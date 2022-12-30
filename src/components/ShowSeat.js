import React, { useState } from "react";
import "../App.css";


function Booking() {

  const [data, setData] = useState({
    seats: -1,
  });

  const totalSeats = Array.from({ length: 10 * 8 }, (_, i) => i + 1);

  let allSeats = Number(data.seats);

  return (
    <div className="show_seats">
      <div className="forms">
        Put booking seats
        <input
          type="number"
          name="seat"

          onChange={(e) =>
            setData({
              ...data,
              seats: Number(e.target.value) + Number(data.seats),
            })
          }
        />
        
      </div>

      <>
        <ul className="show">
          <li>
            <small className="selected">Occupied</small>
          </li>
          <li>
            <small className="notSelected">Not Occupied</small>
          </li>
        </ul>
        <div className="seats">
          {totalSeats.map((value, index) => {
            return (
              <div
                className={
                  index <= allSeats ? "seat selected" : "seat notSelected"
                }
              ></div>
            );
          })}
        </div>
      </>
    </div>
  );
}
export default Booking;
