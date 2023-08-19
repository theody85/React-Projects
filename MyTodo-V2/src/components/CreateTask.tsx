import { useState } from "react";
import date from "../icons/calendar.png";
import notification from "../icons/notification.png";
import time from "../icons/clock.png";
import note from "../icons/note.png";
import TableDatePicker from "./DatePicker";
import ModalIcon from "./ModalIcon";

const CreateTask = () => {
  const [name, updateName] = useState("");
  const [calendar, toggleCalendar] = useState(false);
  // const [clock, toggleClock] = useState(false);
  const [reminder, toggleReminder] = useState(false);

  const modalIcons = [
    {
      name: "notification",
      src: notification,
      handleClick() {
        return toggleReminder(true);
      },
    },
    {
      name: "date",
      src: date,
      handleClick() {
        return toggleCalendar(true);
      },
    },
    {
      name: "time",
      src: time,
      handleClick() {
        // return toggleClock(true);
      },
    },
    {
      name: "note",
      src: note,
      handleClick() {
        return <h1>note</h1>;
      },
    },
  ];

  return (
    <div className="create-task">
      <form>
        <label htmlFor="task-name">
          <input
            id="task-name"
            placeholder="Add a Task"
            value={name}
            onChange={(e) => {
              updateName(e.target.value);
            }}
          />
        </label>
        <div className="modal-buttons">
          {modalIcons.map((icon) => {
            return (
              <ModalIcon
                name={icon.name}
                src={icon.src}
                handleClick={icon.handleClick}
              />
            );
          })}
        </div>
      </form>
      {reminder && (
        <div className="select">
          <TableDatePicker name="reminder" placeholderText="Create Reminder" />
        </div>
      )}
      {calendar && (
        <div className="select">
          <TableDatePicker name="calendar" placeholderText="Select Due Date" />
        </div>
      )}
    </div>
  );
};
export default CreateTask;
