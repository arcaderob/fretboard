import { useEffect, useState } from "react";
import { NoteButton } from "./NoteButton";
import { Dot } from "./Dot";
import { FretboardImage } from "./FretboardImage";
import { AnswerText } from "./AnswerText";
import {
  DotPositions,
  Notes,
  calculatePosition,
  getRandomNumber,
} from "../utils/FretboardUtils";

export const Fretboard = () => {
  const [currentNote, setCurrentNote] = useState(null);
  const [answerText, setAnswerText] = useState(null);

  useEffect(() => {
    setCurrentNote(DotPositions[getRandomNumber(DotPositions.length)]);
  }, []);

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
    setCurrentNote(DotPositions[getRandomNumber(DotPositions.length)]);
  };

  if (!currentNote) return null;

  const position = calculatePosition(currentNote.string, currentNote.fret);

  return (
    <div style={{ position: "relative", width: "1180px", height: "300px" }}>
      <FretboardImage />
      <Dot position={position} />
      <div>
        {Notes.map((note) => (
          <NoteButton key={note} note={note} handleClick={handleDotClick} />
        ))}
        <AnswerText text={answerText} />
      </div>
    </div>
  );
};
