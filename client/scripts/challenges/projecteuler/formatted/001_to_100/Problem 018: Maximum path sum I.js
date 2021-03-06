
/* eslint spaced-comment: 0 */
/* eslint no-redeclare: 0 */
/* eslint no-unused-vars: 0 */

const assert = require('chai').assert;

/// title: Problem 18: Maximum path sum I
/// type: project-euler

/// categories:
/// math

/// difficulty: ?

/// benchmark:
//replaceWithActualFunctionHere;

/// description:
/// <div class="euler"><p class="euler__paragraph">By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.</p>
/// <div class="euler__pre-wrap"><pre class="euler__pre">
///    <span class="euler__text--bold" style="color:#ff0000;">3</span>
///   <span class="euler__text--bold" style="color:#ff0000;">7</span> 4
///  2 <span class="euler__text--bold" style="color:#ff0000;">4</span> 6
/// 8 5 <span class="euler__text--bold" style="color:#ff0000;">9</span> 3
/// </pre></div>
/// <p class="euler__paragraph">That is, 3 + 7 + 4 + 9 = 23.</p>
/// <p class="euler__paragraph">Find the maximum total from top to bottom of the triangle below:</p>
/// <div class="euler__pre-wrap"><pre class="euler__pre">
///                      75
///                    95 64
///                   17 47 82
///                 18 35 87 10
///                20 04 82 47 65
///              19 01 23 75 03 34
///             88 02 77 73 07 63 67
///           99 65 04 28 06 16 70 92
///          41 41 26 56 83 40 80 70 33
///        41 48 72 33 47 32 37 16 94 29
///       53 71 44 65 25 43 91 52 97 51 14
///     70 11 33 28 77 73 17 78 39 68 17 57
///    91 71 52 38 17 14 91 43 58 50 27 29 48
///  63 66 04 68 89 53 67 30 73 16 69 87 40 31
/// 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
/// </pre></div>
/// <p class="euler__paragraph">NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)</p></div>

/// challengeSeed:
function euler18() {
  const triangle = [
    '75',
    '95 64',
    '17 47 82',
    '18 35 87 10',
    '20 04 82 47 65',
    '19 01 23 75 03 34',
    '88 02 77 73 07 63 67',
    '99 65 04 28 06 16 70 92',
    '41 41 26 56 83 40 80 70 33',
    '41 48 72 33 47 32 37 16 94 29',
    '53 71 44 65 25 43 91 52 97 51 14',
    '70 11 33 28 77 73 17 78 39 68 17 57',
    '91 71 52 38 17 14 91 43 58 50 27 29 48',
    '63 66 04 68 89 53 67 30 73 16 69 87 40 31',
    '04 62 98 27 23 09 70 98 73 93 38 53 60 04 23'];
  // Good luck!
  return true;
}

euler18();

/// solutions:
function euler18() {
  const triangle = [
    '75',
    '95 64',
    '17 47 82',
    '18 35 87 10',
    '20 04 82 47 65',
    '19 01 23 75 03 34',
    '88 02 77 73 07 63 67',
    '99 65 04 28 06 16 70 92',
    '41 41 26 56 83 40 80 70 33',
    '41 48 72 33 47 32 37 16 94 29',
    '53 71 44 65 25 43 91 52 97 51 14',
    '70 11 33 28 77 73 17 78 39 68 17 57',
    '91 71 52 38 17 14 91 43 58 50 27 29 48',
    '63 66 04 68 89 53 67 30 73 16 69 87 40 31',
    '04 62 98 27 23 09 70 98 73 93 38 53 60 04 23'];

  function parseData(data) {
    return data.map(row => {
      return row.split(' ').map(el => {
        return parseInt(el, 10);
      });
    });
  }

  function pathSum(arr) {
    const size = arr.length;
    if (size === 1) {
      return arr[0][0];
    }
    for (let i = 0; i < size - 1; i++) {
      const numToAdd = arr[size - 1][i] > arr[size - 1][i + 1] ? arr[size - 1][i] : arr[size - 1][i + 1];
      arr[size - 2][i] += numToAdd;
    }
    arr.splice(size - 1, 1);
    return pathSum(arr);
  }

  return pathSum(parseData(triangle));
}

/// tail:

/// tests:
assert(typeof euler18 === 'function', 'message: <code>euler18()</code> is a function.');
assert.strictEqual(euler18(), 1074, 'message: <code>euler18()</code> should return 1074.');
/// id: 5900f37e1000cf542c50fe91
