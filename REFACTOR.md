# Refactoring notes

I followed these guidelines (my over-simplified definitions):

- Functions should take parameters and return _something_
- No global variables
- No mutations or limited and controlled mutation
  - No use of array methods that mutate the calling array
  - No mutating of objects
- No `for` or `while` loops
- No `console.log`, `addEventListener`, `Math.random`, `Date.now`, etc.
- Follow Pareto's Law: 80% pure functions, 20% impure

I had a hard time following those guidelines for refactoring this project. I am using `addEventListener` and a large amount of `push()` methods.

## script.js

Not every function has a `return` statement.

1. Top variable area:

- A huge amount of `let` variables set to `0`, `""`, `[]`, or `{}`
- Removed `userTuning`,`fretInputs`, and `userChord` variables as they are not used

2. Tunings form event listener:

- Changed 3 `let` keywords to `const`
- removed `console.log()`
- Problem with select value in `localStorage` not displaying but resetting to standard tuning - need `JSON.stringify(newStrings)` and `JSON.parse(localStorage.getItem(newStrings))`

3. Form event listener:

- Nothing to do except uncomment `getJson()` when I solve the CORS problem.
- But I will have to compare the json file to the js file as I made some small changes.

4. **Function `resetPage()`**:

- I don't like `window.location.replace()` or `location.reload()` but which is best?
- I can use the form variable with `.reset()` but do I have to clear the `textContent` for every DOM element I added? I need to do some more research. (**To-Do item**)

## Function `getNotes()`

This function is the bulk of the program.

5. Flat / Sharp check

- Figure out how to load values in `localStorage`. I'm geting flat as checked when it's value in localStorage === false? Is it because it is the 2nd/last radio button? Makes no sense! (**To-Do**)

6. function `openStr()`:

- I have a `forEach` that uses `push` to get the `textContent` in the DOM for the tuning. I tried `map()` but it failed because the input array is a `NodeList`, but it does not have a `textContent` property - it has `outerText`?
- Converted 1 `for` loop to `map()` and am already using `slice()`
- Why can't I change `rad1Val === "sharp"` to `rad1.value === "sharp"`?
- Why am I returning `strContent` and not `newStrings`? But since I am using `push()` on an empty array outside of the function, do I need a `return`? NO, but I should have one!

7. Get the fret #'s entered by the user & convert into sharp or flat chromatic notes

- Can I do something with `userFrets`? Seems sloppy.
- replaced the large block of variable assignment to `[sharpLoE, sharpA, sharpD, sharpG, sharpB, sharpHiE] = [...newStrings];` - same for flats
- I don't like `chordTones.push(sharpLoE[userFrets[0]], sharpA[userFrets[1]], ...` But I'm pushing all over the place.
- Removed 2 `console.log` statements

8. In case of duplicate notes, get only unique notes

- `uniqueNotes` usies `filter()` - was 3 lines, removed 1 `console.log`
- 7 & 8 - can I combine them into a single function? (**To-Do**)

9. **The BIG for loop, the majority of `getNotes`**: 1st section

- `for` loop - did not to convert it to `map()` because it's over 160 lines and it's using a `break` keyword.
- Another radio button check to get `noteAsRoot`
- `forEach()` on `uniqueNotes` to get intervals for each note
- Combine 2 arrays into object - looks good to me

10. function `checkIndices()`

- converted `for` loop on `chordIntervals` to `map()`

11. HUGE `if` block to "FIX" enharmonic equivalents with nested `if` blocks

- removed `console.log`
- moved parts of the large var block to different sections
- Nine nested `if` blocks for enharmonics - looks fine
- removed 2 `console.log` statements below that

13. chord notes in proper order

- changed `for` loop to `map()`
- `output` variable followed by a slash chords `if` block - fine
- removed `console.log`

14. Then an equal chords `if` block with a `for` loop inside

- changed `for` loop to `map()`

15. then a scale degrees `for` loop

- changed `for` loop to `map()`

16. Then variables for chord tendency and chord intervals

- no changes

17. Then output everything to the DOM for the end of the `if` block followed by a `break` keyword. Then an `else` block which outputs an error msg

- Changed 1 `let` keyword to `const` in error `if` block

18. then a new `if` block for another error msg

- Changed 1 `let` keyword to `const`
- Removed final `console.log()`

19. Function `loadLocal()`: this is set to `window.onload`

- changed 1 `let` keyword to `const`
- Was not able to properly load radio button checked booleans (To-Do)

I need to comprehend the difference bewtween `map()`, `filter()`, and `forEach().` And what about `reduce()`? Should any of the map functions be filter or other HOA method? Qhat am I "_mapping_"?

<br>

> The refactored code for now is only here on GitHub. I have not uploaded the new JavaScript file to my web host.
