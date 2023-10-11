import { checkIndices, chordsFound } from "./checkIndices.js";
import { sharp, flat } from "../data/constants.js";

export default function enharmonics(object, arr, arr2) {
  checkIndices(arr2)
  if (chordsFound.length > 0) {
    // 9. if blocks to handle special cases such as enharmonic equivalents
      // Fix flat 9's if the ♭9 is a sharp
      if (object.hasOwnProperty(1) && object[1].length === 2) {
        arr.splice(1, 1, arr[2] + flat);
        object[1] = arr[1];
      }

      // Fix sharp 9's / flat 3's
      if (object.hasOwnProperty(3) && !object.hasOwnProperty(4) && object[3].length === 2) {
        arr.splice(3, 1, arr[4] + flat);
        object[3] = arr[3];
      }
      if (object.hasOwnProperty(3) && object.hasOwnProperty(4) && object[3].length === 2 && flatRadioBtn.checked) {
        arr.splice(3, 1, arr[2] + sharp);
        object[3] = arr[3];
      }

      // Fix sharp 11's / flat 5's
      if (object.hasOwnProperty(6) && !object.hasOwnProperty(7) && object[6].length === 2) {
        arr.splice(6, 1, arr[7] + flat);
        object[6] = arr[6];
      }

      // Fix sharp 5's / flat 13's
      if (object.hasOwnProperty(7) && object.hasOwnProperty(8) && object[8].length === 2) {
        arr.splice(8, 1, arr[9] + flat);
        object[8] = arr[8];

      }
      if (!object.hasOwnProperty(7) && object.hasOwnProperty(8) && object[8].length === 2 && flatRadioBtn.checked) {
        arr.splice(8, 1, arr[7] + sharp);
        object[8] = arr[8];
      }

      // Fix flat 7's for the keys F & C if sharpRadioBtn.checked
      if (object.hasOwnProperty(10) && object[10].length === 2 && arr[0].length === 1) {
        arr.splice(10, 1, arr[11] + flat);
        object[10] = arr[10];
      }
  }
}