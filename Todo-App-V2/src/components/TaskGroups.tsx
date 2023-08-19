import { FunctionComponent } from "react";
import Card from "./Card";
import work from "../icons/work.png";
import social from "../icons/social.png";
import church from "../icons/church.png";
import personal from "../icons/personal.png";

const TaskGroups: FunctionComponent = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Card name="Work" image={work} description="Tasks under work section" />
      <Card
        name="Social"
        image={social}
        description="Tasks under social section"
      />
      <Card
        name="Church"
        image={church}
        description="Tasks under church section"
      />
      <Card
        name="Personal"
        image={personal}
        description="Tasks under personal section"
      />
    </div>
  );
};

export default TaskGroups;
