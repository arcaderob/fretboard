import { useEffect, useState } from "react";
import fretboardImage from "./fretboard.png";
import { NoteButton } from "./NoteButton";
import { dotPositions } from "./dotPositions";
import { notes } from "./notes";

export const Fretboard = () => {
  const [currentNote, setCurrentNote] = useState(null);
  const [answerText, setAnswerText] = useState(null);

  const getRandomNumber = () => Math.floor(Math.random() * 72);
  const getNote = () => dotPositions[getRandomNumber()];

  useEffect(() => {
    setCurrentNote(dotPositions[getRandomNumber()]);
  }, []);

  const calculatePosition = (stringNumber, fretNumber) => {
    // Adjust these values based on your fretboard image
    const stringOffset = 19; // Vertical offset between strings in percentages
    const fretOffset = 8.25; // Horizontal offset between frets in percentages

    const top = `${2 + (stringNumber - 1) * stringOffset}%`; // Adjust vertical positioning
    const left = `${5 + (fretNumber - 1) * fretOffset}%`; // Adjust horizontal positioning

    return { top, left };
  };

  const setResponseText = (text) => {
    setAnswerText(text);

    setTimeout(() => setAnswerText(null), 1000);
  };

  const handleDotClick = (note) => {
    if (note !== currentNote.note) {
      setResponseText("Try again!");
      return;
    }

    setResponseText("Correct!");
    setCurrentNote(getNote());
  };

  if (!currentNote) return null;

  const position = calculatePosition(currentNote.string, currentNote.fret);

  return (
    <div style={{ position: "relative", width: "1180px", height: "300px" }}>
      <img
        src={fretboardImage}
        alt="Fretboard"
        style={{ width: "100%", height: "100%" }}
      />
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
        <div
          style={{
            paddingTop: "20px",
          }}
        >
          {answerText}
        </div>
      </div>
    </div>
  );
};
