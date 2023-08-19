import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface IProps {
  name: string;
  image: string;
  description: string;
}
const Card: FunctionComponent<IProps> = (props) => {
  const { name, image, description } = props;

  return (
    <Link
      to={`/${name.toLowerCase()}`}
      className="card"
      state={{
        ...props,
      }}
    >
      <div className="card-icon">
        <img className="icon" src={image} alt={description} />
      </div>
      <div className="card-text">
        <div className="card-name">{name}</div>
        <p className="sub-text">Click to view or add tasks to {name}</p>
      </div>
    </Link>
  );
};
export default Card;
