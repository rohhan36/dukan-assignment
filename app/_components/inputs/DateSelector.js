import React from "react";

const DateSelector = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <select
        className="outline-none border-2 rounded-md px-2 py-1.5 text-neutral-600 text-md"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      >
        <option value="today">Today</option>
        <option value="yesterday">Yesterday</option>
        <option value="this_week">This Week</option>
        <option value="this_month">This Month</option>
        <option value="last_month">Last Month</option>
        <option value="this_year">This Year</option>
      </select>
    </div>
  );
};

export default DateSelector;
