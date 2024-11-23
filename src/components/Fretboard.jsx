import { useEffect, useState } from "react";
import fretboardImage from "./fretboard.png";
import { NoteButton } from "./NoteButton";
import { dotPositions } from "./dotPositions";
import { notes } from "./notes";

export const Fretboard = () => {
  const [currentNote, setCurrentNote] = useState(null);

  const getRandomNumber = () => Math.floor(Math.random() * 72 + 1);

  useEffect(() => {
    console.log("called");
    const note = dotPositions[getRandomNumber()];
    setCurrentNote(note);
  }, []);

  const calculatePosition = (stringNumber, fretNumber) => {
    // Adjust these values based on your fretboard image
    const stringOffset = 15; // Vertical offset between strings in percentages
    const fretOffset = 10; // Horizontal offset between frets in percentages

    const top = `${5 + (stringNumber - 1) * stringOffset}%`; // Adjust vertical positioning
    const left = `${10 + (fretNumber - 1) * fretOffset}%`; // Adjust horizontal positioning

    return { top, left };
  };

  const handleDotClick = (note) => {
    if (note !== currentNote.note) return;

    alert(`You clicked on note ${note}!`);
    const x = getRandomNumber();
    console.log(x);
    setCurrentNote(dotPositions[x]);
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
        onClick={() => handleDotClick(currentNote.note)}
      ></div>
      <div>
        {notes.map((note) => (
          <NoteButton note={note} handleClick={handleDotClick} />
        ))}
      </div>
    </div>
  );
};
