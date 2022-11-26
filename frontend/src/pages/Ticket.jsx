import { useState } from "react";
import Modal from "react-modal";
import { FaPlus } from "react-icons/fa";

// import BackButton from "../components/BackButton";

const customStyles = {
  content: {
    width: "600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
  },
};

Modal.setAppElement("#root");

function Ticket() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Open/close modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <h2>
          Ticket ID
          <span className={`status `}>status</span>
        </h2>
        <h3>Date Submitted:</h3>
        <h3>Product: </h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue</h3>
          <p>description</p>
        </div>
        <h2>Notes</h2>
      </header>

      <button onClick={openModal} className="btn">
        <FaPlus /> Add Note
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Note"
      >
        <h2>Add Note</h2>
        <button className="btn-close" onClick={closeModal}>
          X
        </button>
        <form>
          <div className="form-group">
            <textarea
              name="noteText"
              id="noteText"
              className="form-control"
              placeholder="Note text"
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>

      <button className="btn btn-block btn-danger">Close Ticket</button>
    </div>
  );
}

export default Ticket;
