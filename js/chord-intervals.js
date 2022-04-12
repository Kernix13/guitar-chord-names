const chordIntervals = [
	{
		"Chord": " maj",
		"Intervals": ["1", "3", "5"],
		"steps": [0, 4, 7],
		"Tendency": ["I", "IV"],
		"scales": [
			{ "Major Scale": ["1st", " 4th", " 5th"] },
			{ "Minor Pentatonic": ["2nd"] },
			{ "Blues Scale": ["2nd"] },
			{ "Harmonic Minor": ["5th", "6th"] },
			{ "Melodic Minor": ["4th", "5th"] },
			{ "Augmented": ["1st", "3rd", "5th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["1st", "4th", "5th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": "6",
		"Intervals": ["1", "3", "5", "6"],
		"steps": [0, 4, 7, 9],
		"Tendency": ["I", "V"],
		"Equal Chords": [{ "key": 9, "name": "m7" }],
		"scales": [
			{ "Major Scale": ["1st", "4th", "5th"] },
			{ "Minor Pentatonic": ["2nd"] },
			{ "Blues Scale": ["2nd"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Melodic Minor": ["4th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["1st", "4th", "5th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": " add9",
		"Intervals": ["1", "3", "5", "9"],
		"steps": [0, 4, 7, 2],
		"Tendency": ["I", "V"],
		"scales": [
			{ "Major Scale": ["1st", "4th", "5th"] },
			{ "Minor Pentatonic": ["2nd"] },
			{ "Blues Scale": ["2nd"] },
			{ "Melodic Minor": ["4th", "5th"] },
			{ "Major Bebop": ["1st", "4th", "5th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": " add11",
		"Intervals": ["1", "3", "5", "11"],
		"steps": [0, 4, 7, 5],
		"Tendency": ["I", "IV"],
		"scales": [
			{ "Major Scale": ["1st", "5th"] },
			{ "Harmonic Minor": ["5th"] },
			{ "Melodic Minor": ["5th"] },
			{ "Major Bebop": ["1st", "5th"] },
			{ "Minor Bebop": ["5th", "8th"] }
		]

	},
	{
		"Chord": " add♯11",
		"Intervals": ["1", "3", "5", "♯11"],
		"steps": [0, 4, 7, 6],
		"Tendency": ["I", "II", "V"],
		"Equal Chords": [{ "key": 6, "name": "7♭59 N3" }],
		"scales": [
			{ "Major Scale": ["4th"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Melodic Minor": ["4th"] },
			{ "Major Bebop": ["4th"] },
			{ "Minor Bebop": ["3rd", "8th"] }
		]
	},
	{
		"Chord": "6 add9",
		"Intervals": ["1", "3", "5", "6", "9"],
		"steps": [0, 4, 7, 9, 2],
		"Tendency": ["I", "V"],
		"Equal Chords": [{ "key": 2, "name": "9sus" }, { "key": 7, "name": "6sus add9" }, { "key": 9, "name": "m11" }],
		"scales": [
			{ "Major Scale": ["1st", "4th", "5th"] },
			{ "Minor Pentatonic": ["2nd"] },
			{ "Blues Scale": ["2nd"] },
			{ "Melodic Minor": ["4th"] },
			{ "Major Bebop": ["1st", "4th", "5th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": "6 add9 N5",
		"Intervals": ["1", "3", "6", "9"],
		"steps": [0, 4, 9, 2],
		"Tendency": ["I", "V"],
		"Equal Chords": [{ "key": 5, "name": "maj13 NR" }],
		"scales": [
			{ "Major Scale": ["1st", "4th", "5th"] },
			{ "Minor Pentatonic": ["2nd"] },
			{ "Blues Scale": ["2nd"] },
			{ "Melodic Minor": ["4th"] },
			{ "Major Bebop": ["1st", "4th", "5th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": " add9/11",
		"Intervals": ["1", "3", "5", "9", "11"],
		"steps": [0, 4, 7, 2, 5],
		"Tendency": ["I", "IV", "V"],
		"Equal Chords": [{ "key": 7, "name": "13sus" }],
		"Chord Substitutes": [{ "key": "", "name": "" }],
		"scales": [
			{ "Major Scale": ["1st", "5th"] },
			{ "Melodic Minor": ["5th"] },
			{ "Major Bebop": ["1st", "5th"] },
			{ "Minor Bebop": ["5th", "8th"] }
		]
	},
	{
		"Chord": " add9/♯11",
		"Intervals": ["1", "3", "5", "9", "♯11"],
		"steps": [0, 4, 7, 2, 6],
		"Tendency": ["I", "II", "V"],
		"Equal Chords": [{ "key": 2, "name": "9/11 N5" }, { "key": 7, "name": "maj13sus" }],
		"scales": [
			{ "Major Scale": ["4th"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Melodic Minor": ["4th"] },
			{ "Major Bebop": ["1st", "4th"] },
			{ "Minor Bebop": ["3rd", "8th"] }
		]
	},
	{
		"Chord": "6 add9/11",
		"Intervals": ["1", "3", "5", "6", "9", "11"],
		"steps": [0, 4, 7, 9, 2, 5],
		"Tendency": ["I", "IV", "V"],
		"Equal Chords": [{ "key": 5, "name": "maj9/13" }],
		"scales": [
			{ "Major Scale": ["1st", "4th", "5th"] },
			{ "Minor Pentatonic": ["2nd"] },
			{ "Blues Scale": ["2nd"] },
			{ "Melodic Minor": ["4th"] },
			{ "Major Bebop": ["1st", "4th", "5th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": "6 add9/♯11",
		"Intervals": ["1", "3", "5", "6", "9", "♯11"],
		"steps": [0, 4, 7, 9, 2, 6],
		"Tendency": ["I", "II", "V"],
		"Equal Chords": [{ "key": 2, "name": "9/11" }],
		"scales": [
			{ "Major Scale": ["4th"] },
			{ "Melodic Minor": ["4th"] },
			{ "Major Bebop": ["1st", "4th"] },
			{ "Minor Bebop": ["3rd", "8th"] }
		]
	},
	{
		"Chord": "maj7",
		"Intervals": ["1", "3", "5", "7"],
		"steps": [0, 4, 7, 11],
		"Tendency": ["I", "V"],
		"scales": [
			{ "Major Scale": ["1st", "4th"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Augmented": ["1st", "3rd", "5th"] },
			{ "Major Bebop": ["1st", "4th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": "maj7 N5",
		"Intervals": ["1", "3", "7"],
		"steps": [0, 4, 11],
		"Tendency": ["I", "V"],
		"scales": [
			{ "Major Scale": ["1st", "4th"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Augmented": ["1st", "3rd", "5th"] },
			{ "Major Bebop": ["1st", "4th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": "maj9",
		"Intervals": ["1", "3", "5", "7", "9"],
		"steps": [0, 4, 7, 11, 2],
		"Tendency": ["I", "V"],
		"scales": [
			{ "Major Scale": ["1st", "4th"] },
			{ "Major Bebop": ["1st", "4th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": "maj9 N5",
		"Intervals": ["1", "3", "7", "9"],
		"steps": [0, 4, 11, 2],
		"Tendency": ["I", "V"],
		"scales": [
			{ "Major Scale": ["1st", "4th"] },
			{ "Major Bebop": ["1st", "4th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": "maj13",
		"Intervals": ["1", "3", "5", "7", "13"],
		"steps": [0, 4, 7, 11, 9],
		"Tendency": ["I", "V"],
		"Equal Chords": [{ "key": 9, "name": "m9" }],
		"scales": [
			{ "Major Scale": ["1st", "4th"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Major Bebop": ["1st", "4th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": "maj13 NR",
		"Intervals": ["3", "5", "7", "13"],
		"steps": [4, 7, 11, 9],
		"Tendency": ["I", "V"],
		"Equal Chords": [{ "key": 7, "name": "6 add9 N5" }],
		"scales": [
			{ "Major Scale": ["1st", "4th"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Major Bebop": ["1st", "4th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": "maj13 N5",
		"Intervals": ["1", "3", "7", "13"],
		"steps": [0, 4, 11, 9],
		"Tendency": ["I", "V"],
		"Equal Chords": [{ "key": 9, "name": "m add9" }],
		"Chord Substitutes": [{ "key": "", "name": "" }],
		"scales": [
			{ "Major Scale": ["1st", "4th"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Major Bebop": ["1st", "4th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": "maj9/13",
		"Intervals": ["1", "3", "5", "7", "9", "13"],
		"steps": [0, 4, 7, 11, 2, 9],
		"Tendency": ["I", "V"],
		"Equal Chords": [{ "key": 7, "name": "6 add9/11" }],
		"scales": [
			{ "Major Scale": ["1st", "4th"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Major Bebop": ["1st", "4th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": "maj9/13 N5",
		"Intervals": ["1", "3", "7", "9", "13"],
		"steps": [0, 4, 11, 2, 9],
		"Tendency": ["I", "V"],
		"Equal Chords": [{ "key": 5, "name": "maj13♯11 NR" }],
		"scales": [
			{ "Major Scale": ["1st", "4th"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Major Bebop": ["1st", "4th"] },
			{ "Minor Bebop": ["3rd", "5th", "8th"] }
		]
	},
	{
		"Chord": "maj7♯11",
		"Intervals": ["1", "3", "5", "7", "♯11"],
		"steps": [0, 4, 7, 11, 6],
		"Tendency": ["V"],
		"scales": [
			{ "Major Scale": ["4th"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Major Bebop": ["4th"] },
			{ "Minor Bebop": ["3rd", "8th"] }
		]
	},
	{
		"Chord": "maj9♯11",
		"Intervals": ["1", "3", "5", "7", "9", "♯11"],
		"steps": [0, 4, 7, 11, 2, 6],
		"Tendency": ["II", "V"],
		"scales": [
			{ "Major Scale": ["4th"] },
			{ "Major Bebop": ["4th"] },
			{ "Minor Bebop": ["3rd", "8th"] }
		]
	},
	{
		"Chord": "maj13♯11",
		"Intervals": ["1", "3", "5", "7", "13", "♯11"],
		"steps": [0, 4, 7, 11, 9, 6],
		"Tendency": ["II", "V"],
		"scales": [
			{ "Major Scale": ["4th"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Major Bebop": ["4th"] },
			{ "Minor Bebop": ["3rd", "8th"] }
		]
	},
	{
		"Chord": "maj13♯11 NR",
		"Intervals": ["3", "5", "7", "13", "♯11"],
		"steps": [4, 7, 11, 9, 6],
		"Tendency": ["II", "V"],
		"Equal Chords": [{ "key": 7, "name": "maj9/13 N5" }],
		"scales": [
			{ "Major Scale": ["4th"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Major Bebop": ["4th"] },
			{ "Minor Bebop": ["3rd", "8th"] }
		]
	},
	{
		"Chord": "7",
		"Intervals": ["1", "3", "5", "♭7"],
		"steps": [0, 4, 7, 10],
		"Tendency": ["IV"],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Harmonic Minor": ["5th"] },
			{ "Melodic Minor": ["4th", "5th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["3rd", "5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "7 N3",
		"Intervals": ["1", "5", "♭7"],
		"steps": [0, 7, 10],
		"Tendency": ["IV"],
		"scales": [
			{ "Major Scale": ["2nd", "3rd", "5th", "6th"] },
			{ "Minor Pentatonic": ["1st"] },
			{ "Blues Scale": ["1st"] },
			{ "Harmonic Minor": ["4th", "5th"] },
			{ "Melodic Minor": ["2nd", "4th", "5th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["2nd", "3rd", "5th", "6th"] },
			{ "Minor Bebop": ["1st", "2nd", "5th", "6th"] }
		]
	},
	{
		"Chord": "7 N5",
		"Intervals": ["1", "3", "♭7"],
		"steps": [0, 4, 10],
		"Tendency": ["IV"],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Harmonic Minor": ["5th"] },
			{ "Melodic Minor": ["4th", "5th", "7th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["3rd", "5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "9",
		"Intervals": ["1", "3", "5", "♭7", "9"],
		"steps": [0, 4, 7, 10, 2],
		"Tendency": ["IV"],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Melodic Minor": ["4th", "5th"] },
			{ "Major Bebop": ["3rd", "5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "9 N5",
		"Intervals": ["1", "3", "♭7", "9"],
		"steps": [0, 4, 10, 2],
		"Tendency": ["IV"],
		"Equal Chords": [{ "key": 6, "name": "7♭5♭13 NR" }],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Melodic Minor": ["4th", "5th"] },
			{ "Major Bebop": ["3rd", "5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "11",
		"Intervals": ["1", "3", "5", "♭7", "11"],
		"steps": [0, 4, 7, 10, 5],
		"Tendency": ["IV", "I"],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Harmonic Minor": ["5th"] },
			{ "Melodic Minor": ["5th"] },
			{ "Major Bebop": ["3rd", "5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "11 NR",
		"Intervals": ["3", "5", "♭7", "11"],
		"steps": [4, 7, 10, 5],
		"Tendency": ["IV", "I"],
		"Equal Chords": [{ "key": 7, "name": "m13 N5" }],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Harmonic Minor": ["5th"] },
			{ "Melodic Minor": ["5th"] },
			{ "Major Bebop": ["3rd", "5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "11 N5",
		"Intervals": ["1", "3", "♭7", "11"],
		"steps": [0, 4, 10, 5],
		"Tendency": ["IV", "I"],
		"Equal Chords": [{ "key": 5, "name": "maj7sus" }],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Harmonic Minor": ["5th"] },
			{ "Melodic Minor": ["5th"] },
			{ "Major Bebop": ["3rd", "5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "13",
		"Intervals": ["1", "3", "5", "♭7", "13"],
		"steps": [0, 4, 7, 10, 9],
		"Tendency": ["IV"],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Melodic Minor": ["4th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "13 NR",
		"Intervals": ["3", "5", "♭7", "13"],
		"steps": [4, 7, 10, 9],
		"Tendency": ["IV"],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Melodic Minor": ["4th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "13 N3",
		"Intervals": ["1", "5", "♭7", "13"],
		"steps": [0, 7, 10, 9],
		"Tendency": ["IV"],
		"scales": [
			{ "Major Scale": ["2nd", "5th"] },
			{ "Melodic Minor": ["4th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["2nd", "5th"] },
			{ "Minor Bebop": ["1st", "5th", "6th"] }
		]
	},
	{
		"Chord": "13 N5",
		"Intervals": ["1", "3", "♭7", "13"],
		"steps": [0, 4, 10, 9],
		"Tendency": ["IV"],
		"Equal Chords": [{ "key": 6, "name": "7♭5♯9 NR" }],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Melodic Minor": ["4th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "9/11",
		"Intervals": ["1", "3", "5", "♭7", "9", "11"],
		"steps": [0, 4, 7, 10, 2, 5],
		"Tendency": ["IV", "I"],
		"Equal Chords": [{ "key": 10, "name": "6 add9/♯11" }],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Melodic Minor": ["5th"] },
			{ "Major Bebop": ["3rd", "5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "9/11 N5",
		"Intervals": ["1", "3", "♭7", "9", "11"],
		"steps": [0, 4, 10, 2, 5],
		"Tendency": ["IV", "I"],
		"Equal Chords": [{ "key": 5, "name": "maj13sus" }, { "key": 10, "name": "add9/♯11" }],
		"Chord Substitutes": [{ "key": "", "name": "" }],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Melodic Minor": ["5th"] },
			{ "Major Bebop": ["3rd", "5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "9/13",
		"Intervals": ["1", "3", "5", "♭7", "9", "13"],
		"steps": [0, 4, 7, 10, 2, 9],
		"Tendency": ["IV"],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Melodic Minor": ["4th"] },
			{ "Major Bebop": ["5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "9/13 N5",
		"Intervals": ["1", "3", "♭7", "9", "13"],
		"steps": [0, 4, 10, 2, 9],
		"Tendency": ["IV"],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Melodic Minor": ["4th"] },
			{ "Major Bebop": ["5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "11/13",
		"Intervals": ["1", "3", "5", "♭7", "11", "13"],
		"steps": [0, 4, 7, 10, 5, 9],
		"Tendency": ["IV", "I"],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Major Bebop": ["5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "11/13 NR",
		"Intervals": ["3", "5", "♭7", "11", "13"],
		"steps": [4, 7, 10, 5, 9],
		"Tendency": ["IV", "I"],
		"Equal Chords": [{ "key": 9, "name": "7♭5♭13 N3" }],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Major Bebop": ["5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "11/13 N5",
		"Intervals": ["1", "3", "♭7", "11", "13"],
		"steps": [0, 4, 10, 5, 9],
		"Tendency": ["IV", "I"],
		"scales": [
			{ "Major Scale": ["5th"] },
			{ "Major Bebop": ["5th"] },
			{ "Minor Bebop": ["1st", "5th"] }
		]
	},
	{
		"Chord": "7♭9",
		"Intervals": ["1", "3", "5", "♭7", "♭9"],
		"steps": [0, 4, 7, 10, 1],
		"Tendency": ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
		"scales": [
			{ "Harmonic Minor": ["5th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["3rd", "5th"] }
		]
	},
	{
		"Chord": "7♭9 N5",
		"Intervals": ["1", "3", "♭7", "♭9"],
		"steps": [0, 4, 10, 1],
		"Tendency": ["♭II", "II", "IV", "♭VI", "VII"],
		"scales": [
			{ "Harmonic Minor": ["5th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["3rd", "5th"] }
		]
	},
	{
		"Chord": "7♭9♯11",
		"Intervals": ["1", "3", "5", "♭7", "♭9", "♯11"],
		"steps": [0, 4, 7, 10, 1, 6],
		"Tendency": ["♭II", "II", "IV", "V", "♭VI", "VII"],
		"Equal Chords": [{ "key": 6, "name": "7♭9♯11" }],
		"scales": [
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
		]

	},
	{
		"Chord": "7♭9♭13",
		"Intervals": ["1", "3", "5", "♭7", "♭9", "♭13"],
		"steps": [0, 4, 7, 10, 1, 8],
		"Tendency": ["♭II", "II", "♭III", "III", "IV", "V", "♭VI", "VI", "VII"],
		"scales": [
			{ "Harmonic Minor": ["5th"] },
			{ "Major Bebop": ["3rd"] }
		]
	},
	{
		"Chord": "7♭9♭13 NR",
		"Intervals": ["3", "5", "♭7", "♭9", "♭13"],
		"steps": [4, 7, 10, 1, 8],
		"Tendency": ["II", "♭III", "III", "IV", "♭VI", "VI", "VII"],
		"Equal Chords": [{ "key": 3, "name": "11♭9 NR" }],
		"scales": [
			{ "Harmonic Minor": ["5th"] },
			{ "Major Bebop": ["3rd"] }
		]
	},
	{
		"Chord": "7♭9♭13 N3",
		"Intervals": ["1", "5", "♭7", "♭9", "♭13"],
		"steps": [0, 7, 10, 1, 8],
		"Tendency": ["♭II", "II", "♭III", "III", "IV", "V", "♭VI", "VI", "VII"],
		"Equal Chords": [{ "key": 3, "name": "11/13 NR" }],
		"scales": [
			{ "Major Scale": ["3rd"] },
			{ "Harmonic Minor": ["5th"] },
			{ "Major Bebop": ["3rd"] },
			{ "Minor Bebop": ["2nd"] }
		]
	},
	{
		"Chord": "11♭9",
		"Intervals": ["1", "3", "5", "♭7", "11", "♭9"],
		"steps": [0, 4, 7, 10, 5, 1],
		"Tendency": ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
		"scales": [
			{ "Harmonic Minor": ["5th"] },
			{ "Major Bebop": ["3rd", "5th"] }
		]
	},
	{
		"Chord": "11♭9 NR",
		"Intervals": ["3", "5", "♭7", "11", "♭9"],
		"steps": [4, 7, 10, 5, 1],
		"Tendency": ["♭II", "II", "IV", "♭VI", "VII"],
		"Equal Chords": [{ "key": 9, "name": "7♭9♭13 NR" }],
		"scales": [
			{ "Harmonic Minor": ["5th"] },
			{ "Major Bebop": ["3rd", "5th"] }
		]
	},
	{
		"Chord": "11♭9 N5",
		"Intervals": ["1", "3", "♭7", "11", "♭9"],
		"steps": [0, 4, 10, 5, 1],
		"Tendency": ["♭II", "II", "IV", "♭VI", "VII"],
		"scales": [
			{ "Harmonic Minor": ["5th"] },
			{ "Major Bebop": ["3rd", "5th"] }
		]
	},
	{
		"Chord": "13♭9",
		"Intervals": ["1", "3", "5", "♭7", "13", "♭9"],
		"steps": [0, 4, 7, 10, 9, 1],
		"Tendency": ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
		"scales": [
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["5th"] }
		]
	},
	{
		"Chord": "13♭9 N5",
		"Intervals": ["1", "3", "♭7", "13", "♭9"],
		"steps": [0, 4, 10, 9, 1],
		"Tendency": ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
		"Equal Chords": [{ "key": 6, "name": "7♯9♯11 NR" }],
		"scales": [
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["5th"] }
		]
	},
	{
		"Chord": "13♭9 NR/N5",
		"Intervals": ["3", "♭7", "13", "♭9"],
		"steps": [4, 10, 9, 1],
		"Tendency": ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
		"Equal Chords": [{ "key": 6, "name": "7♯9 NR" }, { "key": 10, "name": "m-maj7♭5" }],
		"scales": [
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["5th"] }
		]
	},
	{
		"Chord": "7♭13",
		"Intervals": ["1", "3", "5", "♭7", "♭13"],
		"steps": [0, 4, 7, 10, 8],
		"Tendency": ["IV"],
		"Equal Chords": [{ "key": 8, "name": "maj9♯5" }],
		"scales": [
			{ "Harmonic Minor": ["5th"] },
			{ "Major Bebop": ["3rd"] }
		]
	},
	{
		"Chord": "7♯9",
		"Intervals": ["1", "3", "5", "♭7", "♯9"],
		"steps": [0, 4, 7, 10, 3],
		"Tendency": ["IV"],
		"Equal Chords": [{ "key": 6, "name": "13♭5♭9 NR" }],
		"scales": [
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["3rd"] }
		]
	},
	{
		"Chord": "7♯9 NR",
		"Intervals": ["3", "5", "♭7", "♯9"],
		"steps": [4, 7, 10, 3],
		"Tendency": ["IV", "VII"],
		"Equal Chords": [{ "key": 4, "name": "m-maj7♭5" }, { "key": 6, "name": "13♭9 NR/N5" }],
		"scales": [
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["3rd"] }
		]
	},
	{
		"Chord": "7♯9 N5",
		"Intervals": ["1", "3", "♭7", "♯9"],
		"steps": [0, 4, 10, 3],
		"Tendency": ["IV"],
		"Equal Chords": [{ "key": 6, "name": "13♭5 NR" }],
		"scales": [
			{ "Melodic Minor": ["7th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["3rd"] }
		]
	},
	{
		"Chord": "7♭9/♯9",
		"Intervals": ["1", "3", "5", "♭7", "♭9", "♯9"],
		"steps": [0, 4, 7, 10, 1, 3],
		"Tendency": ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
		"Equal Chords": [{ "key": 3, "name": "13♭9" }],
		"scales": [
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["3rd"] }
		]
	},
	{
		"Chord": "7♯9♯11",
		"Intervals": ["1", "3", "5", "♭7", "♯9", "♯11"],
		"steps": [0, 4, 7, 10, 3, 6],
		"Tendency": ["♭II", "II", "♭III", "IV", "V", "♭VI", "VI", "♭VII", "VII"],
		"Equal Chords": [{ "key": 6, "name": "13♭5♭9" }],
		"scales": [
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }
		]
	},
	{
		"Chord": "7♯9♯11 NR",
		"Intervals": ["3", "5", "♭7", "♯9", "♯11"],
		"steps": [4, 7, 10, 3, 6],
		"Tendency": ["II", "♭III", "IV", "♭V", "♭VI", "VI", "♭VII", "VII"],
		"Equal Chords": [{ "key": 6, "name": "13♭9 NR" }],
		"scales": [{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }]
	},
	{
		"Chord": "7♯9♭13",
		"Intervals": ["1", "3", "5", "♭7", "♯9", "♭13"],
		"steps": [0, 4, 7, 10, 3, 8],
		"Tendency": ["♭II", "♭III", "III", "IV", "V", "♭VI", "VI", "VII"],
		"scales": [{ "Major Bebop": ["3rd"] }]
	},
	{
		"Chord": "7♯9♭13 NR",
		"Intervals": ["3", "5", "♭7", "♯9", "♭13"],
		"steps": [4, 7, 10, 3, 8],
		"Tendency": ["♭III", "III", "IV", "♭VI", "VII"],
		"scales": [{ "Major Bebop": ["3rd"] }]
	},
	{
		"Chord": "13♯9",
		"Intervals": ["1", "3", "5", "♭7", "13", "♯9"],
		"steps": [0, 4, 7, 10, 3, 9],
		"Tendency": ["♭II", "III", "IV", "V", "♭VII", "VII"],
		"scales": [{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }]
	},
	{
		"Chord": "13♯9 NR",
		"Intervals": ["3", "5", "♭7", "13", "♯9"],
		"steps": [4, 7, 10, 3, 9],
		"Tendency": ["♭II", "III", "IV", "V", "♭VII", "VII"],
		"scales": [{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }]
	},
	{
		"Chord": "13♯9 N5",
		"Intervals": ["1", "3", "♭7", "13", "♯9"],
		"steps": [0, 4, 10, 9, 3],
		"Tendency": ["♭II", "III", "IV", "V", "♭VII", "VII"],
		"Equal Chords": [{ "key": 6, "name": "13♭5♯9 NR" }],
		"scales": [{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }]
	},
	{
		"Chord": "13♯9 NR/N5",
		"Intervals": ["3", "♭7", "13", "♯9"],
		"steps": [4, 10, 9, 3],
		"Tendency": ["♭II", "III", "IV", "V", "♭VII", "VII"],
		"Equal Chords": [{ "key": 6, "name": "13♯9 NR/N5" }],
		"scales": [{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }]
	},
	{
		"Chord": "7♯11",
		"Intervals": ["1", "3", "5", "♭7", "♯11"],
		"steps": [0, 4, 7, 10, 6],
		"Tendency": ["♭II", "IV", "V", "VII"],
		"Equal Chords": [{ "key": 6, "name": "7♭5♭9" }],
		"scales": [
			{ "Melodic Minor": ["4th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }
		]
	},
	{
		"Chord": "9♯11",
		"Intervals": ["1", "3", "5", "♭7", "9", "♯11"],
		"steps": [0, 4, 7, 10, 2, 6],
		"Tendency": ["Any key"],
		"scales": [{ "Melodic Minor": ["4th"] }]
	},
	{
		"Chord": "9♯11 NR",
		"Intervals": ["3", "5", "♭7", "9", "♯11"],
		"steps": [4, 7, 10, 2, 6],
		"Tendency": ["♭II", "III", "IV", "V", "♭VII", "VII"],
		"Equal Chords": [{ "key": 4, "name": "m9♭5" }, { "key": 6, "name": "7♯5♭9" }],
		"scales": [{ "Melodic Minor": ["4th"] }]
	},
	{
		"Chord": "9♯11 N3",
		"Intervals": ["1", "5", "♭7", "9", "♯11"],
		"steps": [0, 7, 10, 2, 6],
		"Tendency": ["♭II", "II", "♭III", "IV", "♭V", "V", "♭VI", "♭VII", "VII"],
		"scales": [
			{ "Harmonic Minor": ["4th"] },
			{ "Melodic Minor": ["4th"] }
		]
	},
	{
		"Chord": "13♯11",
		"Intervals": ["1", "3", "5", "♭7", "13", "♯11"],
		"steps": [0, 4, 7, 10, 9, 6],
		"Tendency": ["Any key"],
		"Equal Chords": [{ "key": 6, "name": "7♭5♭9/♯9" }],
		"scales": [
			{ "Melodic Minor": ["4th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }
		]
	},
	{
		"Chord": "13♯11 NR",
		"Intervals": ["3", "5", "♭7", "13", "♯11"],
		"steps": [4, 7, 10, 9, 6],
		"Tendency": ["All but I & ♭V"],
		"scales": [
			{ "Melodic Minor": ["4th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }
		]
	},
	{
		"Chord": "13♯11 N3",
		"Intervals": ["1", "5", "♭7", "13", "♯11"],
		"steps": [0, 7, 10, 9, 6],
		"Tendency": ["All but IV & VI"],
		"scales": [
			{ "Harmonic Minor": ["4th"] },
			{ "Melodic Minor": ["4th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }
		]
	},
	{
		"Chord": "m",
		"Intervals": ["1", "♭3", "5"],
		"steps": [0, 3, 7],
		"Tendency": ["♭VII", "♭III"],
		"scales": [
			{ "Major Scale": ["2nd", "3rd", "6th"] },
			{ "Minor Pentatonic": ["1st"] },
			{ "Blues Scale": ["1st"] },
			{ "Harmonic Minor": ["1st", "4th", "6th"] },
			{ "Melodic Minor": ["1st", "2nd"] },
			{ "Augmented": ["1st", "3rd", "5th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["2nd", "3rd", "4th", "6th"] },
			{ "Minor Bebop": ["1st", "2nd", "6th"] }
		]
	},
	{
		"Chord": "m6",
		"Intervals": ["1", "♭3", "5", "6"],
		"steps": [0, 3, 7, 9],
		"Tendency": ["♭VII"],
		"Equal Chords": [{ "key": 9, "name": "m7♭5" }],
		"scales": [
			{ "Major Scale": ["2nd"] },
			{ "Harmonic Minor": ["4th", "6th"] },
			{ "Melodic Minor": ["1st", "2nd"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["2nd", "4th"] },
			{ "Minor Bebop": ["1st", "6th"] }
		]
	},
	{
		"Chord": "m add9",
		"Intervals": ["1", "♭3", "5", "9"],
		"steps": [0, 3, 7, 2],
		"Tendency": ["♭VII", "♭III"],
		"scales": [
			{ "Major Scale": ["2nd", "6th"] },
			{ "Harmonic Minor": ["1st", "4th"] },
			{ "Melodic Minor": ["1st"] },
			{ "Major Bebop": ["2nd", "4th", "6th"] },
			{ "Minor Bebop": ["1st", "2nd", "6th"] }
		]
	},
	{
		"Chord": "m add11",
		"Intervals": ["1", "♭3", "5", "11"],
		"steps": [0, 3, 7, 5],
		"Tendency": ["♭VII", "♭III"],
		"Equal Chords": [{ "key": 5, "name": "7sus2" }],
		"scales": [
			{ "Major Scale": ["2nd", "3rd", "6th"] },
			{ "Minor Pentatonic": ["1st"] },
			{ "Blues Scale": ["1st"] },
			{ "Harmonic Minor": ["1st"] },
			{ "Melodic Minor": ["1st"] },
			{ "Major Bebop": ["2nd", "3rd", "6th"] },
			{ "Minor Bebop": ["1st", "2nd", "6th"] }
		]
	},
	{
		"Chord": "m6 add9",
		"Intervals": ["1", "♭3", "5", "6", "9"],
		"steps": [0, 3, 7, 9, 2],
		"Tendency": ["♭VII"],
		"Equal Chords": [{ "key": 2, "name": "7sus ♭9" }, { "key": 9, "name": "m11♭5" }],
		"scales": [
			{ "Major Scale": ["2nd"] },
			{ "Harmonic Minor": ["4th"] },
			{ "Melodic Minor": ["1st"] },
			{ "Major Bebop": ["2nd", "4th"] },
			{ "Minor Bebop": ["1st", "6th"] }
		]
	},
	{
		"Chord": "m6 add9 NR",
		"Intervals": ["♭3", "5", "6", "9"],
		"steps": [3, 7, 9, 2],
		"Tendency": ["♭VII"],
		"Equal Chords": [{ "key": 3, "name": "maj7♭5" }, { "key": 11, "name": "7♯5♯9 NR" }],
		"scales": [
			{ "Major Scale": ["2nd"] },
			{ "Harmonic Minor": ["4th"] },
			{ "Melodic Minor": ["1st"] },
			{ "Major Bebop": ["2nd", "4th"] },
			{ "Minor Bebop": ["1st", "6th"] }
		]
	},
	{
		"Chord": "m7",
		"Intervals": ["1", "♭3", "5", "♭7"],
		"steps": [0, 3, 7, 10],
		"Tendency": ["♭VI", "♭VII", "♭III"],
		"Equal Chords": [{ "key": 3, "name": "6" }],
		"scales": [
			{ "Major Scale": ["2nd", "3rd", "6th"] },
			{ "Minor Pentatonic": ["1st"] },
			{ "Blues Scale": ["1st"] },
			{ "Harmonic Minor": ["4th"] },
			{ "Melodic Minor": ["2nd"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["2nd", "3rd", "6th"] },
			{ "Minor Bebop": ["1st", "2nd", "6th"] }
		]
	},
	{
		"Chord": "m7 N5",
		"Intervals": ["1", "♭3", "♭7"],
		"steps": [0, 3, 10],
		"Tendency": ["♭VI", "♭VII", "♭III"],
		"Equal Chords": [{ "key": 3, "name": "6" }],
		"scales": [
			{ "Major Scale": ["2nd", "3rd", "6th", "7th"] },
			{ "Minor Pentatonic": ["1st"] },
			{ "Blues Scale": ["1st"] },
			{ "Harmonic Minor": ["2nd", "4th"] },
			{ "Melodic Minor": ["2nd", "6th", "7th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["2nd", "3rd", "6th", "7th"] },
			{ "Minor Bebop": ["1st", "2nd", "6th", "7th"] }
		]
	},
	{
		"Chord": "m9",
		"Intervals": ["1", "♭3", "5", "♭7", "9"],
		"steps": [0, 3, 7, 10, 2],
		"Tendency": ["♭VI", "♭VII", "♭III"],
		"Equal Chords": [{ "key": 3, "name": "maj13" }],
		"scales": [
			{ "Major Scale": ["2nd", "6th"] },
			{ "Minor Pentatonic": ["1st"] },
			{ "Blues Scale": ["1st"] },
			{ "Harmonic Minor": ["4th"] },
			{ "Major Bebop": ["2nd", "6th"] },
			{ "Minor Bebop": ["1st", "2nd", "6th"] }
		]
	},
	{
		"Chord": "m9 N5",
		"Intervals": ["1", "♭3", "♭7", "9"],
		"steps": [0, 3, 10, 2],
		"Tendency": ["♭VI", "♭VII"],
		"Equal Chords": [{ "key": 2, "name": "7♯5♭9 N3" }],
		"scales": [
			{ "Major Scale": ["2nd", "6th"] },
			{ "Minor Pentatonic": ["1st"] },
			{ "Blues Scale": ["1st"] },
			{ "Harmonic Minor": ["4th"] },
			{ "Major Bebop": ["2nd", "6th"] },
			{ "Minor Bebop": ["1st", "2nd", "6th"] }
		]
	},
	{
		"Chord": "m11",
		"Intervals": ["1", "♭3", "5", "♭7", "11"],
		"steps": [0, 3, 7, 10, 5],
		"Tendency": ["♭III", "♭VI", "♭VII"],
		"Equal Chords": [{ "key": 3, "name": "6 add9" }, { "key": 5, "name": "9sus" }, { "key": 10, "name": "6sus add9" }],
		"scales": [
			{ "Major Scale": ["2nd", "3rd", "6th"] },
			{ "Minor Pentatonic": ["1st"] },
			{ "Blues Scale": ["1st"] },
			{ "Melodic Minor": ["2nd"] },
			{ "Major Bebop": ["2nd", "3rd", "6th"] },
			{ "Minor Bebop": ["1st", "2nd", "6th"] }
		]
	},
	{
		"Chord": "m13",
		"Intervals": ["1", "♭3", "5", "♭7", "13"],
		"steps": [0, 3, 7, 10, 9],
		"Tendency": ["♭VII"],
		"Equal Chords": [{ "key": "", "name": "" }],
		"scales": [
			{ "Major Scale": ["2nd"] },
			{ "Harmonic Minor": ["4th"] },
			{ "Melodic Minor": ["2nd"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["2nd"] },
			{ "Minor Bebop": ["1st", "6th"] }
		]
	},
	{
		"Chord": "m13 N5",
		"Intervals": ["1", "♭3", "♭7", "13"],
		"steps": [0, 3, 10, 9],
		"Tendency": ["♭VII"],
		"Equal Chords": [{ "key": 5, "name": "11 NR" }],
		"scales": [
			{ "Major Scale": ["2nd"] },
			{ "Harmonic Minor": ["4th"] },
			{ "Melodic Minor": ["2nd"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["2nd"] },
			{ "Minor Bebop": ["1st", "6th"] }
		]
	},
	{
		"Chord": "m-maj7",
		"Intervals": ["1", "♭3", "5", "7"],
		"steps": [0, 3, 7, 11],
		"Tendency": ["♭VII", "I", "V"],
		"scales": [
			{ "Harmonic Minor": ["1st", "6th"] },
			{ "Melodic Minor": ["1st"] },
			{ "Augmented": ["1st", "3rd", "5th"] },
			{ "Major Bebop": ["4th"] }
		]
	},
	{
		"Chord": "m-maj7 N5",
		"Intervals": ["1", "♭3", "7"],
		"steps": [0, 3, 11],
		"Tendency": ["♭VII", "I", "V"],
		"scales": [
			{ "Harmonic Minor": ["1st", "6th"] },
			{ "Melodic Minor": ["1st"] },
			{ "Augmented": ["1st", "3rd", "5th"] },
			{ "HW Diminished": ["2nd", "4th", "6th", "8th"] },
			{ "Major Bebop": ["4th"] }
		]
	},
	{
		"Chord": "m9-maj7",
		"Intervals": ["1", "♭3", "5", "7", "9"],
		"steps": [0, 3, 7, 11, 2],
		"Tendency": ["♭VII", "I", "V"],
		"scales": [
			{ "Harmonic Minor": ["1st"] },
			{ "Melodic Minor": ["1st"] },
			{ "Major Bebop": ["4th"] }
		]
	},
	{
		"Chord": "sus2",
		"Intervals": ["1", "2", "5"],
		"steps": [0, 2, 7],
		"Tendency": ["I", "V"],
		"Equal Chords": [{ "key": 7, "name": "sus" }],
		"scales": [
			{ "Major Scale": ["1st", "2nd", "4th", "5th", "6th"] },
			{ "Minor Pentatonic": ["2nd", "3rd"] },
			{ "Blues Scale": ["2nd", "3rd"] },
			{ "Harmonic Minor": ["1st", "4th"] },
			{ "Melodic Minor": ["1st", "4th", "5th"] },
			{ "Major Bebop": ["1st", "2nd", "4th", "5th", "7th"] },
			{ "Minor Bebop": ["1st", "2nd", "3rd", "5th", "6th", "8th"] }
		]
	},
	{
		"Chord": "sus",
		"Intervals": ["1", "4", "5"],
		"steps": [0, 5, 7],
		"Tendency": ["I", "IV"],
		"Equal Chords": [{ "key": 5, "name": "sus2" }],
		"scales": [
			{ "Major Scale": ["1st", "2nd", "3rd", "5th", "6th"] },
			{ "Minor Pentatonic": ["3rd", "5th"] },
			{ "Blues Scale": ["3rd", "6th"] },
			{ "Harmonic Minor": ["1st", "5th"] },
			{ "Melodic Minor": ["1st", "2nd", "5th"] },
			{ "Major Bebop": ["1st", "2nd", "3rd", "5th", "7th"] },
			{ "Minor Bebop": ["1st", "2nd", "5th", "6th", "8th"] }
		]
	},
	{
		"Chord": "sus add9",
		"Intervals": ["1", "4", "5", "9"],
		"steps": [0, 5, 7, 2],
		"Tendency": ["I", "IV"],
		"Equal Chords": [{ "key": 7, "name": "7sus" }],
		"scales": [
			{ "Major Scale": ["1st", "2nd", "5th", "6th"] },
			{ "Minor Pentatonic": ["3rd", "5th"] },
			{ "Blues Scale": ["3rd", "6th"] },
			{ "Harmonic Minor": ["1st"] },
			{ "Melodic Minor": ["1st"] },
			{ "Major Bebop": ["1st", "2nd", "5th", "7th"] },
			{ "Minor Bebop": ["1st", "2nd", "5th", "6th", "8th"] }
		]
	},
	{
		"Chord": "6sus add9",
		"Intervals": ["1", "4", "5", "6", "9"],
		"steps": [0, 5, 7, 9, 2],
		"Tendency": ["I", "IV"],
		"Equal Chords": [{ "key": 2, "name": "m11" }, { "key": 5, "name": "6 add9" }, { "key": 7, "name": "9sus" }],
		"scales": [
			{ "Major Scale": ["1st", "2nd", "5th"] },
			{ "Minor Pentatonic": ["5th"] },
			{ "Blues Scale": ["6th"] },
			{ "Melodic Minor": ["1st"] },
			{ "Major Bebop": ["1st", "2nd", "5th"] },
			{ "Minor Bebop": ["1st", "5th", "6th", "8th"] }
		]
	},
	{
		"Chord": "7sus2",
		"Intervals": ["1", "2", "5", "♭7"],
		"steps": [0, 2, 7, 10],
		"Tendency": ["IV", "♭VII"],
		"Equal Chords": [{ "key": 7, "name": "m add11" }],
		"scales": [
			{ "Major Scale": ["2nd", "5th", "6th"] },
			{ "Minor Pentatonic": ["3rd"] },
			{ "Blues Scale": ["3rd"] },
			{ "Harmonic Minor": ["4th"] },
			{ "Melodic Minor": ["4th", "5th"] },
			{ "Major Bebop": ["2nd", "5th", "7th"] },
			{ "Minor Bebop": ["1st", "2nd", "5th", "6th"] }
		]
	},
	{
		"Chord": "7sus",
		"Intervals": ["1", "4", "5", "♭7"],
		"steps": [0, 5, 7, 10],
		"Tendency": ["I", "IV", "V"],
		"Equal Chords": [{ "key": 5, "name": "sus add9" }],
		"scales": [
			{ "Major Scale": ["2nd", "3rd", "5th", "6th"] },
			{ "Minor Pentatonic": ["3rd"] },
			{ "Blues Scale": ["3rd"] },
			{ "Harmonic Minor": ["5th"] },
			{ "Melodic Minor": ["2nd", "5th"] },
			{ "Major Bebop": ["2nd", "3rd", "5th", "7th"] },
			{ "Minor Bebop": ["1st", "2nd", "5th", "6th"] }
		]
	},
	{
		"Chord": "7sus ♭9",
		"Intervals": ["1", "4", "5", "♭7", "♭9"],
		"steps": [0, 5, 7, 10, 1],
		"Tendency": ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
		"Equal Chords": [{ "key": 7, "name": "m11♭5" }, { "key": 10, "name": "m6 add9" }],
		"scales": [
			{ "Major Scale": ["3rd"] },
			{ "Blues Scale": ["3rd"] },
			{ "Harmonic Minor": ["5th"] },
			{ "Melodic Minor": ["2nd"] },
			{ "Major Bebop": ["3rd"] },
			{ "Minor Bebop": ["2nd", "7th"] }
		]
	},
	{
		"Chord": "9sus",
		"Intervals": ["1", "4", "5", "♭7", "9"],
		"steps": [0, 5, 7, 10, 2],
		"Tendency": ["I", "♭III", "IV", "V"],
		"Equal Chords": [{ "key": 5, "name": "6sus add9" }, { "key": 7, "name": "m11" }, { "key": 10, "name": "6 add9" }],
		"scales": [
			{ "Major Scale": ["2nd", "5th", "6th"] },
			{ "Minor Pentatonic": ["3rd"] },
			{ "Blues Scale": ["3rd"] },
			{ "Melodic Minor": ["5th"] },
			{ "Major Bebop": ["2nd", "5th", "7th"] },
			{ "Minor Bebop": ["1st", "2nd", "5th", "6th"] }
		]
	},
	{
		"Chord": "13sus",
		"Intervals": ["1", "4", "5", "♭7", "13"],
		"steps": [0, 5, 7, 10, 9],
		"Tendency": ["I", "IV"],
		"Equal Chords": [{ "key": 5, "name": "add9/11" }],
		"scales": [
			{ "Major Scale": ["2nd", "5th"] },
			{ "Major Bebop": ["2nd", "5th"] },
			{ "Minor Bebop": ["1st", "5th", "6th"] }
		]
	},
	{
		"Chord": "13sus ♭9",
		"Intervals": ["1", "4", "5", "♭7", "13", "♭9"],
		"steps": [0, 5, 7, 10, 9, 1],
		"Tendency": ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
		"Equal Chords": [{ "key": 9, "name": "7♯5♭9/♯9" }],
		"scales": [{ "Melodic Minor": ["2nd"] }]
	},
	{
		"Chord": "maj7 sus",
		"Intervals": ["1", "4", "5", "7"],
		"steps": [0, 5, 7, 11],
		"Tendency": ["I", "V"],
		"scales": [
			{ "Major Scale": ["1st"] },
			{ "Harmonic Minor": ["1st"] },
			{ "Melodic Minor": ["1st"] },
			{ "Major Bebop": ["1st", "7th"] },
			{ "Minor Bebop": ["5th", "8th"] }
		]
	},
	{
		"Chord": "maj13 sus",
		"Intervals": ["1", "4", "5", "7", "13"],
		"steps": [0, 5, 7, 11, 13],
		"Tendency": ["I", "V"],
		"Equal Chords": [{ "key": 5, "name": " add9/♯11" }, { "key": 7, "name": "9/11 N5" }],
		"scales": [
			{ "Major Scale": ["1st"] },
			{ "Melodic Minor": ["1st"] },
			{ "Major Bebop": ["1st"] },
			{ "Minor Bebop": ["5th", "8th"] }
		]
	},
	{
		"Chord": "dim",
		"Intervals": ["1", "♭3", "♭5"],
		"steps": [0, 3, 6],
		"Tendency": ["♭II"],
		"scales": [
			{ "Major Scale": ["7th"] },
			{ "Blues Scale": ["1st"] },
			{ "Harmonic Minor": ["2nd", "4th", "6th", "7th"] },
			{ "Melodic Minor": ["6th", "7th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["2nd", "8th"] },
			{ "Minor Bebop": ["7th"] }
		]
	},
	{
		"Chord": "dim7",
		"Intervals": ["1", "♭3", "♭5", "♭♭7"],
		"steps": [0, 3, 6, 9],
		"Tendency": ["♭II", "III", "V", "♭VII"],
		"Equal Chords": [{ "key": 3, "name": "dim7" }, { "key": 6, "name": "dim7" }, { "key": 9, "name": "dim7" }],
		"scales": [
			{ "Harmonic Minor": ["2nd", "4th", "6th", "7th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["2nd", "8th"] },
			{ "Minor Bebop": ["7th"] }
		]
	},
	{
		"Chord": "m7♭5",
		"Intervals": ["1", "♭3", "♭5", "♭7"],
		"steps": [0, 3, 6, 10],
		"Tendency": ["♭II"],
		"Equal Chords": [{ "key": 3, "name": "m6" }],
		"scales": [
			{ "Major Scale": ["7th"] },
			{ "Blues Scale": ["1st"] },
			{ "Harmonic Minor": ["2nd", "4th"] },
			{ "Melodic Minor": ["6th", "7th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["2nd", "8th"] },
			{ "Minor Bebop": ["7th"] }
		]
	},
	{
		"Chord": "m9♭5",
		"Intervals": ["1", "♭3", "♭5", "♭7", "9"],
		"steps": [0, 3, 6, 10, 2],
		"Tendency": ["♭II", "V"],
		"Equal Chords": [{ "key": 2, "name": "7♯5♭9" }],
		"scales": [
			{ "Harmonic Minor": ["4th"] },
			{ "Melodic Minor": ["6th"] },
			{ "Major Bebop": ["2nd"] }
		]
	},
	{
		"Chord": "m11♭5",
		"Intervals": ["1", "♭3", "♭5", "♭7", "11"],
		"steps": [0, 3, 6, 10, 5],
		"Tendency": ["♭II"],
		"Equal Chords": [{ "key": 3, "name": "m6 add9" }, { "key": 5, "name": "7sus ♭9" }],
		"scales": [
			{ "Major Scale": ["7th"] },
			{ "Blues Scale": ["1st"] },
			{ "Harmonic Minor": ["2nd"] },
			{ "Melodic Minor": ["6th"] },
			{ "Major Bebop": ["2nd", "8th"] },
			{ "Minor Bebop": ["7th"] }
		]
	},
	{
		"Chord": "m-maj75♭",
		"Intervals": ["1", "♭3", "♭5", "7"],
		"steps": [0, 3, 6, 11],
		"Tendency": ["I", "♭II", "III", "V"],
		"Equal Chords": [{ "key": "", "name": "" }],
		"scales": [
			{ "Harmonic Minor": ["6th"] },
			{ "HW Diminished": ["2nd", "4th", "6th", "8th"] }
		]
	},
	{
		"Chord": "+",
		"Intervals": ["1", "3", "♯5"],
		"steps": [0, 4, 8],
		"Tendency": ["♭II", "IV", "VI"],
		"Equal Chords": [{ "key": 4, "name": "+" }, { "key": 8, "name": "+" }],
		"scales": [
			{ "Harmonic Minor": ["3rd", "5th", "7th"] },
			{ "Melodic Minor": ["3rd", "5th", "7th"] },
			{ "Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"] },
			{ "Augmented": ["1st", "2nd", "3rd", "4th", "5th", "6th"] },
			{ "Major Bebop": ["1st", "3rd", "6th"] }
		]
	},
	{
		"Chord": "7♯5",
		"Intervals": ["1", "3", "♯5", "♭7"],
		"steps": [0, 4, 8, 10],
		"Tendency": ["♭II", "♭III", "IV"],
		"scales": [
			{ "Harmonic Minor": ["5th"] },
			{ "Melodic Minor": ["5th", "7th"] },
			{ "Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"] },
			{ "Major Bebop": ["3rd"] }
		]
	},
	{
		"Chord": "7♯5♭9",
		"Intervals": ["1", "3", "♯5", "♭7", "♭9"],
		"steps": [0, 4, 8, 10, 1],
		"Tendency": ["♭II", "♭III", "IV", "V", "VI", "VII"],
		"Equal Chords": [{ "key": 6, "name": "9/♯11 NR" }, { "key": 10, "name": "m9♭5" }],
		"scales": [
			{ "Harmonic Minor": ["5th"] },
			{ "Melodic Minor": ["7th"] },
			{ "Major Bebop": ["3rd"] }
		]
	},
	{
		"Chord": "7♯5♭9 N3",
		"Intervals": ["1", "♯5", "♭7", "♭9"],
		"steps": [0, 8, 10, 1],
		"Tendency": ["♭II", "♭III", "IV", "V", "VI"],
		"Equal Chords": [{ "key": 10, "name": "m9 N5" }],
		"scales": [
			{ "Harmonic Minor": ["5th"] },
			{ "Melodic Minor": ["7th"] },
			{ "Major Bebop": ["3rd"] }
		]
	},
	{
		"Chord": "9♯5",
		"Intervals": ["1", "3", "♯5", "♭7", "9"],
		"steps": [0, 4, 8, 10, 2],
		"Tendency": ["♭III", "IV", "V", "♭VI", "VII"],
		"Equal Chords": [{ "key": 4, "name": "7♭5♭13" }, { "key": 10, "name": "9♭5" }],
		"scales": [
			{ "Melodic Minor": ["5th"] },
			{ "Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"] }
		]
	},
	{
		"Chord": "7♯5♯9",
		"Intervals": ["1", "3", "♯5", "♭7", "♯9"],
		"steps": [0, 4, 8, 10, 3],
		"Tendency": ["♭II", "♭III", "III", "IV", "♭VI", "VI", "VII"],
		"scales": [
			{ "Melodic Minor": ["7th"] },
			{ "Major Bebop": ["3rd"] }
		]
	},
	{
		"Chord": "7♯5♯9 NR",
		"Intervals": ["3", "♯5", "♭7", "♯9"],
		"steps": [4, 8, 10, 3],
		"Tendency": ["IV", "VII"],
		"Equal Chords": [{ "key": 1, "name": "m6 add9 NR" }, { "key": 4, "name": "maj7♭5" }],
		"scales": [
			{ "Melodic Minor": ["7th"] },
			{ "Major Bebop": ["3rd"] }
		]
	},
	{
		"Chord": "7♯5♭9/♯9",
		"Intervals": ["1", "3", "♯5", "♭7", "♭9", "♯9"],
		"steps": [0, 4, 8, 10, 1, 3],
		"Tendency": ["♭II", "♭III", "III", "IV", "V", "♭VI", "VI", "VII"],
		"Equal Chords": [{ "key": 3, "name": "13sus ♭9" }],
		"scales": [
			{ "Melodic Minor": ["7th"] },
			{ "Major Bebop": ["3rd"] }
		]
	},
	{
		"Chord": "maj7♯5",
		"Intervals": ["1", "3", "♯5", "7"],
		"steps": [0, 4, 8, 11],
		"Tendency": ["IV"],
		"scales": [
			{ "Harmonic Minor": ["3rd"] },
			{ "Melodic Minor": ["3rd"] },
			{ "Augmented": ["1st", "3rd", "5th"] },
			{ "Major Bebop": ["1st", "6th"] }
		]
	},
	{
		"Chord": "maj ♭5",
		"Intervals": ["1", "3", "♭5"],
		"steps": [0, 4, 6],
		"Tendency": ["V"],
		"scales": [
			{ "Major Scale": ["4th"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Melodic Minor": ["4th", "7th"] },
			{ "Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] },
			{ "Major Bebop": ["4th"] },
			{ "Minor Bebop": ["3rd", "8th"] }
		]
	},
	{
		"Chord": "7♭5",
		"Intervals": ["1", "3", "♭5", "♭7"],
		"steps": [0, 4, 6, 10],
		"Tendency": ["♭II", "IV", "V", "VII"],
		"Equal Chords": [{ "key": 6, "name": "7♭5" }],
		"scales": [
			{ "Melodic Minor": ["4th", "7th"] },
			{ "Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }
		]
	},
	{
		"Chord": "7♭5♭9",
		"Intervals": ["1", "3", "♭5", "♭7", "♭9"],
		"steps": [0, 4, 6, 10, 1],
		"Tendency": ["♭II", "IV", "V", "VII"],
		"Equal Chords": [{ "key": 6, "name": "7♯11" }],
		"scales": [
			{ "Melodic Minor": ["7th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }
		]
	},
	{
		"Chord": "7♭5♭9 N3",
		"Intervals": ["1", "♭5", "♭7", "♭9"],
		"steps": [0, 6, 10, 1],
		"Tendency": ["♭II", "IV", "♭V", "♭VI"],
		"Equal Chords": [{ "key": 6, "name": "add♯11" }],
		"scales": [
			{ "Melodic Minor": ["7th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }
		]
	},
	{
		"Chord": "7♭5♯9",
		"Intervals": ["1", "3", "♭5", "♭7", "♯9"],
		"steps": [0, 4, 6, 10, 3],
		"Tendency": ["♭II", "IV", "V", "VII"],
		"Equal Chords": [{ "key": 6, "name": "13♭5" }],
		"Chord Substitutes": [{ "key": "", "name": "" }],
		"scales": [
			{ "Melodic Minor": ["7th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }
		]
	},
	{
		"Chord": "7♭5♯9 NR",
		"Intervals": ["3", "♭5", "♭7", "♯9"],
		"steps": [4, 6, 10, 3],
		"Tendency": ["IV"],
		"Equal Chords": [{ "key": 6, "name": "13 N5" }],
		"scales": [
			{ "Melodic Minor": ["7th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }
		]
	},
	{
		"Chord": "7♭5♭9/♯9",
		"Intervals": ["1", "3", "♭5", "♭7", "♭9", "♯9"],
		"steps": [0, 4, 6, 10, 1, 3],
		"Tendency": ["♭II", "IV", "♭V", "V", "♭VI", "VII"],
		"Equal Chords": [{ "key": 6, "name": "13♯11" }],
		"scales": [
			{ "Melodic Minor": ["7th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }
		]
	},
	{
		"Chord": "7♭5♭13",
		"Intervals": ["1", "3", "♭5", "♭7", "♭13"],
		"steps": [0, 4, 6, 10, 8],
		"Tendency": ["♭II", "IV", "V", "VII"],
		"Equal Chords": [{ "key": 6, "name": "9♭5" }, { "key": 8, "name": "9♯5" }],
		"scales": [
			{ "Melodic Minor": ["7th"] },
			{ "Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"] }
		]
	},
	{
		"Chord": "7♭5♭13 NR",
		"Intervals": ["3", "♭5", "♭7", "♭13"],
		"steps": [4, 6, 10, 8],
		"Tendency": ["IV", "VII"],
		"Equal Chords": [{ "key": 6, "name": "9 N5" }],
		"scales": [
			{ "Melodic Minor": ["7th"] },
			{ "Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"] }
		]
	},
	{
		"Chord": "9♭5",
		"Intervals": ["1", "3", "♭5", "♭7", "9"],
		"steps": [0, 4, 6, 10, 2],
		"Tendency": ["All but I, III & ♭VI"],
		"Equal Chords": [{ "key": 2, "name": "9♯5" }, { "key": 6, "name": "7♭5♭13" }],
		"scales": [
			{ "Melodic Minor": ["4th"] },
			{ "Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"] }
		]
	},
	{
		"Chord": "9♭5♭13",
		"Intervals": ["1", "3", "♭5", "♭7", "9", "♭13"],
		"steps": [0, 4, 6, 10, 2, 8],
		"Tendency": ["Any key"],
		"Equal Chords": [{ "key": 2, "name": "9♭5♭13" }, { "key": 4, "name": "9♭5♭13" }, { "key": 6, "name": "9♭5♭13" }, { "key": 8, "name": "9♭5♭13" }],
		"scales": [{ "Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"] }]
	},
	{
		"Chord": "13♭5",
		"Intervals": ["1", "3", "♭5", "♭7", "13"],
		"steps": [0, 4, 6, 10, 9],
		"Tendency": ["♭II", "IV", "♭V", "V", "♭VII", "VII"],
		"Equal Chords": [{ "key": 6, "name": "7♭5♯9" }],
		"scales": [
			{ "Melodic Minor": ["4th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }
		]
	},
	{
		"Chord": "13♭5 NR",
		"Intervals": ["3", "♭5", "♭7", "13"],
		"steps": [4, 6, 10, 9],
		"Tendency": ["IV", "♭V", "♭VII", "VII"],
		"Equal Chords": [{ "key": 6, "name": "7♯9 N5" }],
		"scales": [
			{ "Melodic Minor": ["4th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }
		]
	},
	{
		"Chord": "13♭5 N3",
		"Intervals": ["1", "♭5", "♭7", "13"],
		"steps": [0, 6, 10, 9],
		"Tendency": ["♭II", "♭V", "V", "♭VII"],
		"scales": [
			{ "Melodic Minor": ["4th"] },
			{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }
		]
	},
	{
		"Chord": "13♭5♭9",
		"Intervals": ["1", "3", "♭5", "♭7", "13", "♭9"],
		"steps": [0, 4, 6, 10, 9, 1],
		"Tendency": ["Any key"],
		"Equal Chords": [{ "key": 6, "name": "7♯9♯11" }],
		"scales": [{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }]
	},
	{
		"Chord": "13♭5♭9 N3",
		"Intervals": ["1", "♭5", "♭7", "13", "♭9"],
		"steps": [0, 6, 10, 9, 1],
		"Tendency": ["All but I, IV, VI & VII"],
		"scales": [{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }]
	},
	{
		"Chord": "13♭5♯9",
		"Intervals": ["1", "3", "♭5", "♭7", "13", "♯9"],
		"steps": [0, 4, 6, 10, 9, 3],
		"Tendency": ["Any key"],
		"Equal Chords": [{ "key": 6, "name": "13♭5♯9" }],
		"scales": [{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }]
	},
	{
		"Chord": "13♭5♯9 NR",
		"Intervals": ["3", "♭5", "♭7", "13", "♯9"],
		"steps": [4, 6, 10, 9, 3],
		"Tendency": ["♭II", "IV", "♭V", "V", "♭VII", "VII"],
		"Equal Chords": [{ "key": 6, "name": "13♯9 N5" }],
		"scales": [{ "HW Diminished": ["1st", "3rd", "5th", "7th"] }]
	},
	{
		"Chord": "maj7♭5",
		"Intervals": ["1", "3", "♭5", "7"],
		"steps": [0, 4, 6, 11],
		"Tendency": ["V"],
		"Equal Chords": [{ "key": 9, "name": "m6 add9 NR" }, { "key": 10, "name": "7♯5♯9 NR" }],
		"scales": [
			{ "Major Scale": ["4th"] },
			{ "Harmonic Minor": ["6th"] },
			{ "Major Bebop": ["4th"] },
			{ "Minor Bebop": ["3rd", "8th"] }
		]
	}
]