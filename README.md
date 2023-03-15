# Guitar Chord Names

![GitHub language count](https://img.shields.io/github/languages/count/Kernix13/guitar-chord-names?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/Kernix13/guitar-chord-names?style=flat-square)
![GitHub top language](https://img.shields.io/github/directory-file-count/Kernix13/guitar-chord-names?style=flat-square)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Kernix13/guitar-chord-names?style=flat-square)
![GitHub contributors](https://img.shields.io/github/contributors/Kernix13/guitar-chord-names?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/Kernix13/guitar-chord-names?style=flat-square)

This project is one of my [portfolio](https://courageous-cuchufli-816711.netlify.app/) projects. The actual [Guitar Chord Namer app](https://everyguitarchord.com/what-chord-is-this.html) is on my guitar chords website.

1. Enter the fret numbers of a guitar chord to get the name for the chord, as well as the names of other chords which contain the same notes, the intervals for the chord, and more.
1. There is an altered tuning select list for your chords if you are playing/writing in altered tunings.

<img width="668" alt="image" align="center" src="https://user-images.githubusercontent.com/66497948/225341209-5a47248e-cc5b-456f-9df3-ccc2401b29b3.png">

## Code Clarification

The main function to output the results to the DOM is in `getNotes()`. Here is a list of the over all flow with the steps #'s in `script.js`':

```js
/* The bulk of the functionality in getNotes():
   1. Create the sharp and flat versions of the strings 
   2. Get the fret #'s entered by the user
   3. Convert fret #'s into 16 fret sharp & flat chromatic notes
   4. Strip out duplicate notes

   STEPS 5-14 inside for loop
   5. Create a 12-note array for each chord tone, 
   6a. Convert notes to intervals and then
       6b. Build an { inverval: note } object and
       6c. Join the user notes
   7. Find matching records in chord-intervals.js

   STEPS 8-15 inside the large if block starting at step 8
   8. Start of if block to check for a chord match
   9. 7 nested if blocks to handle special cases
   10. Reorder chord tones
   11. Names chords including slash chords
   12. Get "equal" chords
   13. Get scale degrees
   14. Get chord tendency
   15. Output everything to the DOM
*/
```

In that function there is a huge `if` block that includes nested `if` blocks to handle certain edge cases like enharmonic equivalents. I had difficulty understanding what was going on in that section, the code I wrote. Here is an explanation:

1. Fix flat 9's if the ♭9 is a sharp: handles chords like F7♭9 where the ♭9 should be G♭ not F♯.
1. Fix sharp 9's / flat 3's: before the `if` statement, `obj[3]` = D♯ for Cm7 (_incorrect_) and for C7♯9 (_correct_), after `if` `obj[3]` = E♭ for Cm7 (_correct_), no output for C7♯9.
1. Fix sharp 11's / flat 5's: before `if` statement, `obj[6]` = C♯ for G7♭5 (_incorrect_), after `if` `obj[6]` = D♭ (_correct_).
1. Fix sharp 5's / flat 13's: before `if` statement, `obj[8]` = D♯ for G7♭13 (_incorrect_), after `if` it is E♭ (_correct_).
1. Fix flat 7's for the keys F & C if the sharp check box is selected: Some musicians may not know that the key of F major is a flat key. As a result, they may not think to select the Flat radio button when entering the notes for chords like F7 or C7. This code block returns the correct information for those chords even if the Sharps radio button is selected.

## Refactor notes

REFACTOR START: 8-17-2022

As of August 17th 2022, I will be refactoring this project. This note is to show the date when I started the refactoring and to provide a link to the [commit](https://github.com/Kernix13/guitar-chord-names/commit/154ade074dd4e1c696b4dacaefe96d394b1ba547) before the refactoring. This is for employers so that they can review the code before and after that commit.

## Features in development

I plan to eventually add the following features:

1. Find scales that have most of the notes in the chord for more choices for soloing.
1. SVG chord shape for the chord the user enters.
1. The names of chords for non-chord tone slash chords. For example, `C\D♭` equals `D♭m-maj7♭5`. Right now, entering frets #'s for C-E-G-D♭ would return `D♭m-maj7♭5`.
1. Chord substitutes for the user chord. For example, a C major triad would show chords like `A7♯9`, `Am9`, `Am11`, etc.
1. Tritone substitutes: the ability to enter a tritone interval like `B-F` and get a list of any chord in any key that has those notes.

Check out my website [Every Guitar Chord](https://everyguitarchord.com/ 'Every Guitar Chord website') for quality blog posts and PDF files for download.

## Comparison sites

To see how my guitar chord namer compares to other sites, then do the following on the links below:

- Enter the notes/frets for an A7♭9 or E7♭5, or some other chord which have both a **♯** and **♭** in the chord. Compare their results to mine.

Here are links to the sites on page 1 of the SERPs using "Guitar Chord Namer" as the search term:

1. **all guitar chords** (**Good**): https://www.all-guitar-chords.com/chords/identifier
1. jGuitar (Ok): https://jguitar.com/chordname
1. SCALESCHORDS (Ok): https://www.scales-chords.com/chord-namer/
1. Oolimo (Ok): https://www.oolimo.de/gitarrenakkorde/analysieren
1. Guitar Chord Finder (Ok): https://www.guitar-chord-finder.com/
1. _jam play_ (_Bad_): https://jamplay.com/tools/guitar-chord-finder
1. _MusicTheorySite_ (_Bad_): http://musictheorysite.com/namethatchord/

## Contributions

I would like to have some contributors to help with the project but I am still working on getting a <ins>**Junior Front-End Developoer**</ins> job. If you have any improvements or suggestions, then open an issue and I will reply ASAP.

[CONTRIBUTING.md](https://github.com/Kernix13/guitar-chord-names/blob/master/CONTRIBUTING.md) has the standard boilerplate text so take a look at that if you feel the need.

## Code of Conduct

Similar boilerplate text for the [CODE_OF_CONDUCT.md](https://github.com/Kernix13/guitar-chord-names/blob/master/CODE_OF_CONDUCT.md) document.

## License

Copyright © 2022 Jim Kernicky

The content of this repository is bound by the MIT license.
