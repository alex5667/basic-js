const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strArr = [];
  let stringStr = String(str)

  const addition = (String(options.addition) === 'undefined') ? '' : String(options.addition);

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';


  if (addition) {
    stringStr = str + (addition + additionSeparator).repeat(additionRepeatTimes);
  }
  if (addition) {
    stringStr = stringStr.slice(0, stringStr.length - additionSeparator.length);
  }

  for (let i = 0; i < repeatTimes; i++) {
    strArr.push(stringStr);
  }
  return strArr.join(separator);

}

module.exports = {
  repeater
};
