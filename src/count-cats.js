const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce((acc, curr) => {
    curr.includes('^^') ? acc = acc + curr.reduce((res, i) => { i == '^^' ? res = res + 1 : res; return res }, 0) : acc
    return acc
  }, 0)


}

module.exports = {
  countCats
};
