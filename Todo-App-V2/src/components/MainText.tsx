import { FunctionComponent } from "react";

const MainText: FunctionComponent<{ name: string }> = ({ name }) => {
  return <div className="card-name">{name}</div>;
};
export default MainText;
