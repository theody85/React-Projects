import { FunctionComponent } from "react";

interface IProps {
  name: string;
  date: string;
  time: string;
}

const ToDo: FunctionComponent<IProps> = (props) => {
  const { name, date, time } = props;
  return (
    <div className="todo">
      <p>{name}</p>
      <p>{date}</p>
      <p>{time}</p>
    </div>
  );
};
export default ToDo;
