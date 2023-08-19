import { FunctionComponent } from "react";
import Header from "./Header";
import TaskGroups from "./TaskGroups";

const LandingPage: FunctionComponent<{ message: string }> = ({ message }) => {
  return (
    <div>
      <Header message={message} />
      <TaskGroups />
    </div>
  );
};
export default LandingPage;
