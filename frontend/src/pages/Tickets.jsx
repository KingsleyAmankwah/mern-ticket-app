import BackButton from "../components/BackButton";

function Tickets() {
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
      </div>
    </>
  );
}

export default Tickets;
