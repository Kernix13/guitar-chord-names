# Guitar Chord Names

1. Enter the notes of a guitar chord to get the name for the chord, as well as the names of other chords which contain the same notes.
1. Or enter the notes of a chord to find scales that have the all or most of the sane notes.
1. SVG chord shpe for the chord you entered is coming soon. With an account, you will be able to save your chords to your profile.

Check out my website [Every Guitar Chord](https://everyguitarchord.com/ 'Every Guitar Chord website') for quality blog posts and PDF files for download.

## To Do Items

Primary:
[x] 1. Get the fret #'s entered by the user
[x] 2. Convert the fret #'s into chromatic notes
[x] 3. Add chord tones onto the page
[x] 4. Create a 12-note array for each chord tone
[] 5. Determine intervals for each note compared to the other notes
[] 6. Calculate chord name and add to page (Dependent on #5)
[] 7. Output names of other chord names with the same notes (Dependent on #6)
[] 8. Output scale()s & scale degrees that build that chord (Dependent on #6)

## Miscellaneous Notes

I have a spreadsheet the creates the chord names and includes the notes for 136 chord names. I am using `convert.txt` as a worksheet to convert the values from my spreadsheet to JSON. 

Replace lower case `b` used with flats with the proper flat symbol `♭`; replace `#` with the proper sharp symbol `♯`.

I shouldn't be using the actual chord names and notes. I should be able to caluclate the chord name from the notes entered: 

**Question 1**: Will I be able to use my GitHub repo as an API source? Can the https address for the JSON file(s) be used to fetch the data?

**Question 2**: Do I add related scales and/or "equal" chords in `chord-intervals.json`? Yes, eventually.

## Miscellaneous RegEx notes

To remove tabs from pasting from spreadsheet:
```
\t
```
**Question**: Is `re` the abbreviation for RegEx? 

To replace the chord names with the names wrapped in double quotes and followed by a colon use:

Group 1:
```re
([\w]{1,2}\s[\w\d#/]{3,})
"$1":
```

Group 2:
```re
([\w\d#/+-]{3,})
"$1":
```

Group 3:
```re
([\w\d#/+-]{3,}\s?[\w\d/#()]{2,})
"$1":
```

To wrap the row of notes in square brackets and an ending `},` AND the notes wrapped in quotes:
```js 
// not working
```

To wrap the note values in double quotes followed by a comma, use:
```js 
([a-g(?)]{1,2})
// or:
([a-g#(?!#)]{1,2})
// or: 
([a-g#]{1,2})
"$1", 
// these don't work either
```

**1st one SPLIT F# into F AND #**. Check out:
- https://www.regular-expressions.info/lookaround.html
- https://stackoverflow.com/questions/31201690/find-word-not-followed-by-a-certain-character 
- **https://javascript.info/regexp-lookahead-lookbehind**
- https://forum.freecodecamp.org/t/trouble-with-positive-and-negative-lookahead-regex-challenge/458686 
- https://www.stefanjudis.com/today-i-learned/the-complicated-syntax-of-lookaheads-in-javascript-regular-expressions/ 

1. Need to first use RegEx to remove TABs
2. Then maybe remove any chord with an augmented 9th, 11th or 5th in the name.

However, trying that added an extra space between the notes: (`"A",  `). IT'S THE SPREADSHEET CELLS.

## Contributions

**Contribution #1**: I have 3 different **Regular Expressions** to convert the chord names into JSON key-value pairs. I should only have 1 RegEx for that. I haven't figured out the RegEx for converting the Chord note values in the value pairs WITHOUT matching parts of the chord name.

**Contribution #2**: ...

- - - 

## Proper JSON Format

JSON Basics:
1. Data is in name/value pairs
1. Data is separated by commas
1. Objects are encapsulated within the opening and closing curly brackets
1. Arrays are encapsulated within opening and closing square brackets
1. An empty object can be represented by {}
1. An empty array can be represented by []

Specifics:
1. Entries are represented by key-value pairs, contained in double quotes
1. **Each entry should have a unique key within an object structure**
1. The value of a entry must be contained in double quotes, if it's a string
1. Each entry of an object or array value must be followed by a comma, except for the last one
1. The standard extension for the JSON file is '.json'
1. The mime type for JSON files is 'application/json'

Notes on data types:
1. **Boolean** values are represented using the true or false literals in lower case
1. **Number** values are represented using double-precision floating-point format and shouldn't have leading zeroes
1. **Null** values are represented by the null literal in lower case
1. **Dates**, and similar object types, aren't adequately supported and should be converted to strings
1. **Special characters** in a string need to be escaped using the backslash character `\`
