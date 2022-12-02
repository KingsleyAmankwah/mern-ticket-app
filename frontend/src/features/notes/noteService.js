import axios from "axios";

const API_URL = "/api/notes/";

//Create note
const addNote = async (noteText, ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    API_URL + ticketId + "/note",
    {
      text: noteText,
    },
    config
  );

  return response.data;
};

//Get note
const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + ticketId + "/note", config);

  return response.data;
};

const noteService = {
  addNote,
  getNotes,
};

export default noteService;
