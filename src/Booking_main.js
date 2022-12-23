import React from "react";
import AccordionBooking from "./AccordionBooking";
import { bookingData } from "./BookingRenderingArrayOfObjects.js";

const Booking_main = () => {
  return (
    <div>
      <h1>Booking</h1>
      <div className="accordion">
        {bookingData.map(({ title, content }) => (
          <AccordionBooking title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Booking_main;
