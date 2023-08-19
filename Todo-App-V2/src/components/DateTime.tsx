import { useEffect, useState } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  });
  return (
    <div id="date-time">
      <p>{date.toDateString()}</p>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
};

export default DateTime;
