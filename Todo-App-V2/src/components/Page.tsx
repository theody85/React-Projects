import { useState } from "react";
import { useLocation } from "react-router-dom";
import FabButton from "./FabButton";
import Header from "./Header";
import Modal from "./Modal";
import cancel from "../icons/x.png";
import CreateTask from "./CreateTask";
import ModalIcon from "./ModalIcon";

const Page = () => {
  const { state } = useLocation();
  const [modal, toggleModal] = useState(false);

  return (
    <div id="page">
      <Header message={`${state.name} Tasks`} />
      <FabButton
        style={{ position: "fixed", bottom: "2rem", right: 0 }}
        onClick={() => toggleModal(true)}
      />
      {modal && (
        <Modal>
          <div id="modal-background"></div>
          <div id="modal-contents">
            <ModalIcon
              name="cancel"
              src={cancel}
              handleClick={() => toggleModal(false)}
            />
            <CreateTask />
          </div>
        </Modal>
      )}
    </div>
  );
};
export default Page;
