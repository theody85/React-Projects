import { useState } from "react";
import DatePicker from "react-datepicker";

const TableDatePicker = ({
  name,
  placeholderText,
}: {
  name: string;
  placeholderText: string;
}) => {
  const [date, setDate] = useState<Date | null>(null);
  const [reminder, setReminder] = useState<Date | null>(null);

  const datePicker = document.getElementById("calendar");
  const clock = document.getElementById("clock");

  if (date && datePicker) {
    datePicker.style.cssText = "background-color:aqua; width:inherit";
  }
  if (reminder && clock) {
    clock.style.cssText = "background-color:pink; width: inherit;color:white";
  }
  if (name === "calendar")
    return (
      <DatePicker
        className="date-picker"
        id="calendar"
        filterDate={(d) => new Date() < d}
        isClearable
        placeholderText={placeholderText}
        selected={date}
        onChange={(date) => {
          setDate(date);
        }}
      />
    );
  else
    return (
      <DatePicker
        isClearable
        filterDate={(d) => new Date() < d}
        placeholderText={placeholderText}
        className="date-picker"
        id="clock"
        showTimeInput
        dateFormat="MMMM d, yyyy h:mmaa"
        onChange={(date) => {
          setReminder(date);
        }}
      />
    );
};
export default TableDatePicker;
