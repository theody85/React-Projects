import add from "../icons/add.png";

const FabButton = ({
  style,
  onClick,
}: {
  style: object;
  onClick: () => void;
}) => {
  return (
    <div style={style}>
      <button id="fab-button" onClick={onClick}>
        <img src={add} alt="add icon" />
      </button>
    </div>
  );
};
export default FabButton;
