const ModalIcon = ({
  name,
  src,
  handleClick,
}: {
  name: string;
  src: string;
  handleClick: () => JSX.Element | void;
}) => {
  return (
    <button
      onClick={handleClick}
      id={name}
      className="modal-button"
      type="button"
    >
      <img src={src} alt={`${name} icon`} />
    </button>
  );
};
export default ModalIcon;
