import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewTicket from "./pages/New Ticket";
import Register from "./pages/Register";
import Ticket from "./pages/Ticket";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/new-ticket" element={<NewTicket />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/ticket/:ticketId" element={<Ticket />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
