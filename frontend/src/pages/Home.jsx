import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import { AdminRoute } from "../components/PrivateRoute";
function Home() {
  return (
    <>
      <section className="heading">
        <h1>Welcome to Ticket Desk</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Create New Ticket
      </Link>

      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt /> View My Tickets
      </Link>
      <AdminRoute>
        <Link to="/users-tickets" className="btn btn-reverse btn-block">
          <FaTicketAlt /> Users Ticket
        </Link>
      </AdminRoute>
    </>
  );
}

export default Home;
