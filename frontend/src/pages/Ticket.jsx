import { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaPlus } from "react-icons/fa";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getTicket, closeTicket } from "../features/tickets/ticketSlice";
import { toast } from "react-toastify";
import { addNote } from "../features/notes/noteSlice";
import Spinner from "../components/Spinner";
import { AdminRoute } from "../components/PrivateRoute";
// import NoteItem from "../components/NoteItem";
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
  const [noteText, setNoteText] = useState("");
  // Open/close modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ticketId } = useParams();

  const { ticket } = useSelector((state) => state.tickets);
  // const { notes } = useSelector((state) => state.notes);

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId))
      .unwrap()
      .then(() => {
        toast.success("Ticket closed successfluly");
        navigate("/tickets");
      })
      .catch(toast.error);
  };

  //Create Note
  const onNoteSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ noteText, ticketId }))
      .unwrap()
      .then(() => {
        setNoteText("");
        closeModal();
      })
      .catch(toast.error);
  };

  useEffect(() => {
    dispatch(getTicket(ticketId)).unwrap().catch(toast.error);
  }, [ticketId, dispatch]);

  if (!ticket) {
    return <Spinner />;
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton />
        <h2>
          Ticket ID: {ticket && ticket._id}
          <span className={`status status-${ticket && ticket.status}`}>
            {ticket && ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted:{" "}
          {new Date(ticket && ticket.createdAt).toLocaleString("en-US")}
        </h3>
        <h3>Product: {ticket && ticket.product} </h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue</h3>
          <p>{ticket && ticket.description}</p>
        </div>
      </header>

      {ticket && ticket.status !== "closed" && (
        <button className="btn btn-block btn-danger" onClick={onTicketClose}>
          Close Ticket
        </button>
      )}
      <h2>Notes</h2>

      <AdminRoute>
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
          <form onSubmit={onNoteSubmit}>
            <div className="form-group">
              <textarea
                name="noteText"
                id="noteText"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
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
      </AdminRoute>

      {/* {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))} */}
    </div>
  );
}

export default Ticket;
