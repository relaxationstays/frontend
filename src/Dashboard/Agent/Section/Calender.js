import React from "react";
import { MyBookingCalendar } from "./Caled";

export default function Calender() {
  return (
    <div>
      <div className="container agentsection">
        <div className="parts" style={{ paddingLeft: 50 }}>
          <h3>Show Travelers When They Can Book</h3>
          You can always manually update your calendar to block dates or make
          them available. Start by selecting the option that best describes your
          hosting plans.
          <MyBookingCalendar />
        </div>
      </div>
    </div>
  );
}





