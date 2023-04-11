const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const counts = {};
  for (const domain of domains) {
    const parts = domain.split('.').reverse();
    let subString = '';
    for (const part of parts) {
      subString = `${subString}.${part}`;
      counts[subString] = (counts[subString] || 0) + 1;
    }
  }
  const result = {};
  for (const subString in counts) {
    result[`${subString}`] = counts[subString];
  }
  return result;
}

module.exports = {
  getDNSStats
};
