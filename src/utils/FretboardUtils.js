export const getRandomNumber = (max) => Math.floor(Math.random() * max);

export const calculatePosition = (stringNumber, fretNumber) => {
  const stringOffset = 19; // Vertical offset between strings in percentages
  const fretOffset = 8.25; // Horizontal offset between frets in percentages

  const top = `${2 + (stringNumber - 1) * stringOffset}%`;
  const left = `${5 + (fretNumber - 1) * fretOffset}%`;

  return { top, left };
};

export const getNotes = () => {
  return [
    "A",
    "A#/Bb",
    "B",
    "C",
    "C#/Db",
    "D",
    "D#/Eb",
    "E",
    "F",
    "F#/Gb",
    "G",
  ];
};

export const Notes = [
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
];

export const DotPositions = [
  // String 1 (High E string)
  { string: 1, fret: 1, note: "F" },
  { string: 1, fret: 2, note: "F#/Gb" },
  { string: 1, fret: 3, note: "G" },
  { string: 1, fret: 4, note: "G#/Ab" },
  { string: 1, fret: 5, note: "A" },
  { string: 1, fret: 6, note: "A#/Bb" },
  { string: 1, fret: 7, note: "B" },
  { string: 1, fret: 8, note: "C" },
  { string: 1, fret: 9, note: "C#/Db" },
  { string: 1, fret: 10, note: "D" },
  { string: 1, fret: 11, note: "D#/Eb" },
  { string: 1, fret: 12, note: "E" },

  // String 2 (B string)
  { string: 2, fret: 1, note: "C" },
  { string: 2, fret: 2, note: "C#/Db" },
  { string: 2, fret: 3, note: "D" },
  { string: 2, fret: 4, note: "D#/Eb" },
  { string: 2, fret: 5, note: "E" },
  { string: 2, fret: 6, note: "F" },
  { string: 2, fret: 7, note: "F#/Gb" },
  { string: 2, fret: 8, note: "G" },
  { string: 2, fret: 9, note: "G#/Ab" },
  { string: 2, fret: 10, note: "A" },
  { string: 2, fret: 11, note: "A#/Bb" },
  { string: 2, fret: 12, note: "B" },

  // String 3 (G string)
  { string: 3, fret: 1, note: "G#/Ab" },
  { string: 3, fret: 2, note: "A" },
  { string: 3, fret: 3, note: "A#/Bb" },
  { string: 3, fret: 4, note: "B" },
  { string: 3, fret: 5, note: "C" },
  { string: 3, fret: 6, note: "C#/Db" },
  { string: 3, fret: 7, note: "D" },
  { string: 3, fret: 8, note: "D#/Eb" },
  { string: 3, fret: 9, note: "E" },
  { string: 3, fret: 10, note: "F" },
  { string: 3, fret: 11, note: "F#/Gb" },
  { string: 3, fret: 12, note: "G" },

  // String 4 (D string)
  { string: 4, fret: 1, note: "D#/Eb" },
  { string: 4, fret: 2, note: "E" },
  { string: 4, fret: 3, note: "F" },
  { string: 4, fret: 4, note: "F#/Gb" },
  { string: 4, fret: 5, note: "G" },
  { string: 4, fret: 6, note: "G#/Ab" },
  { string: 4, fret: 7, note: "A" },
  { string: 4, fret: 8, note: "A#/Bb" },
  { string: 4, fret: 9, note: "B" },
  { string: 4, fret: 10, note: "C" },
  { string: 4, fret: 11, note: "C#/Db" },
  { string: 4, fret: 12, note: "D" },

  // String 5 (A string)
  { string: 5, fret: 1, note: "A#/Bb" },
  { string: 5, fret: 2, note: "B" },
  { string: 5, fret: 3, note: "C" },
  { string: 5, fret: 4, note: "C#/Db" },
  { string: 5, fret: 5, note: "D" },
  { string: 5, fret: 6, note: "D#/Eb" },
  { string: 5, fret: 7, note: "E" },
  { string: 5, fret: 8, note: "F" },
  { string: 5, fret: 9, note: "F#/Gb" },
  { string: 5, fret: 10, note: "G" },
  { string: 5, fret: 11, note: "G#/Ab" },
  { string: 5, fret: 12, note: "A" },

  // String 6 (Low E string)
  { string: 6, fret: 1, note: "F" },
  { string: 6, fret: 2, note: "F#/Gb" },
  { string: 6, fret: 3, note: "G" },
  { string: 6, fret: 4, note: "G#/Ab" },
  { string: 6, fret: 5, note: "A" },
  { string: 6, fret: 6, note: "A#/Bb" },
  { string: 6, fret: 7, note: "B" },
  { string: 6, fret: 8, note: "C" },
  { string: 6, fret: 9, note: "C#/Db" },
  { string: 6, fret: 10, note: "D" },
  { string: 6, fret: 11, note: "D#/Eb" },
  { string: 6, fret: 12, note: "E" },
];
