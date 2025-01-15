import Utils from "../utils.js";
import Notes from "../data/notes.js";

const home = () => {
  const noteListContainerElement = document.querySelector("#noteListContainer");
  const noteListElement = noteListContainerElement.querySelector("note-list");
  const listElement = noteListElement.shadowRoot.querySelector(".list");

  const addNotesElement = document.querySelector("add-notes");

  const showNotes = () => {
    const notes = Notes.getAll();
    displayResult(notes);
  };

  const displayResult = (notes) => {
    listElement.innerHTML = "";

    notes.forEach((note) => {
      const noteItem = document.createElement("note-item");
      noteItem.note = note;
      listElement.appendChild(noteItem);
    });
  };

  const showNoteList = () => {
    Array.from(noteListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(noteListElement);
  };

  addNotesElement.addEventListener("note-added", (event) => {
    const { title, content } = event.detail;
    console.log("Judul yang diterima:", title); // Log untuk debugging
    console.log("Isi yang diterima:", content); // Log untuk debugging
    Notes.add({ title, content });
    showNotes();
  });

  showNotes();
};

export default home;
