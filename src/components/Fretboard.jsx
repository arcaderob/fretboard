import { useEffect, useState } from "react";
import fretboardImage from "./fretboard.png";
import { NoteButton } from "./NoteButton";
import { dotPositions } from "./dotPositions";
import { notes } from "./notes";

export const Fretboard = () => {
  const [currentNote, setCurrentNote] = useState(null);

  const getRandomNumber = () => Math.floor(Math.random() * 72);
  const getNote = () => dotPositions[getRandomNumber()];

  useEffect(() => {
    setCurrentNote(dotPositions[getRandomNumber()]);
  }, []);

  const calculatePosition = (stringNumber, fretNumber) => {
    // Adjust these values based on your fretboard image
    const stringOffset = 17; // Vertical offset between strings in percentages
    const fretOffset = 8.25; // Horizontal offset between frets in percentages

    const top = `${2 + (stringNumber - 1) * stringOffset}%`; // Adjust vertical positioning
    const left = `${5 + (fretNumber - 1) * fretOffset}%`; // Adjust horizontal positioning

    return { top, left };
  };

  const handleDotClick = (note) => {
    if (note !== currentNote.note) return;

    setCurrentNote(getNote());
  };

  if (!currentNote) return null;

  const position = calculatePosition(currentNote.string, currentNote.fret);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img src={fretboardImage} alt="Fretboard" style={{ display: "block" }} />
      <div
        key={`${currentNote.string}-${currentNote.fret}`}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "red",
          cursor: "pointer",
          transform: "translate(-50%, -50%)", // Center the dot
        }}
      ></div>
      <div>
        {notes.map((note) => (
          <NoteButton note={note} handleClick={handleDotClick} />
        ))}
      </div>
    </div>
  );
};
