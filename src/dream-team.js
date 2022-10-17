const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members == null) return false

  return Array.from(members).reduce((acc, curr) => {
    if (typeof curr === 'string') {
      curr = curr.replace(/^ +| +$|( ) +/g, "$1")
      acc = acc + curr[0];
    }
    return acc
  }, '').toUpperCase().split('').sort().join('')

}

module.exports = {
  createDreamTeam
};
