export const NoteButton = ({ note, handleClick }) => {
  return (
    <button className="note-button" onClick={() => handleClick(note)}>
      {note}
    </button>
  );
};
