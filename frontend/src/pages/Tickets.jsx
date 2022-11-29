import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import TicketItem from "../components/TicketItem";
import { getTickets } from "../features/tickets/ticketSlice";

function Tickets() {
  const { tickets } = useSelector((state) => state.tickets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);
  return (
    <>
      <BackButton />
      <h1>Tickets</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>

        {tickets && tickets.length > 0 ? (
          <>
            {tickets &&
              tickets.map((ticket) => (
                <TicketItem key={ticket._id} ticket={ticket} />
              ))}
          </>
        ) : (
          <>
            <div>No tickets available</div>
          </>
        )}
      </div>
    </>
  );
}

export default Tickets;
