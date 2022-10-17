

class DepthCalculator {
  calculateDepth(arr) {
    let arrayDepth = 1;
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element instanceof Array) {
        arrayDepth += this.calculateDepth(arr.flat());
        break;
      }
    }
    return arrayDepth;
  }
}





class DepthCalculator {

  calculateDepth(arr) {
  if (arr.filter((e) => Array.isArray(e)).length !== 0) {
  let tmpArr = arr.filter((e) => Array.isArray(e))
  let m = []
  return this.calculateDepth(m.concat(...tmpArr)) + 1
  } else {
  return 1
  }
  }
  }

  function repeater(str, options) {
    str = String(str)
    
    if (options.addition !== undefined)
    options.addition = String(options.addition)
    if (!options.repeatTimes) options.repeatTimes = 1
    if (!options.additionRepeatTimes) options.additionRepeatTimes = 1
    if (!options.separator) options.separator = '+'
    if (!options.additionSeparator) options.additionSeparator = '|'
    
    // {
    //  repeatTimes: 3,
    //  addition: '',
    //  additionRepeatTimes: 1,
    //  separator: '+',
    //  additionSeparator: '|'
    // }
    
    let strArr = []
    let additionArr = []
    
    for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionArr.push(options.addition)
    }
    
    options.addition === ''
    ? (additionArr = '')
    : (additionArr = additionArr.join(`${options.additionSeparator}`))
    
    str = str + additionArr
    
    for (let i = 0; i < options.repeatTimes; i++) {
    strArr.push(str)
    }
    
    return strArr.join(`${options.separator}`)
    }


    function repeater(str, options) {

      const hasPropLength = (str) => {
          return options.hasOwnProperty(str) ? options[str].length : 1;
      }
  
      const hasPropNumber = (str) => {
          return options.hasOwnProperty(str) ? options[str] : 1;
      }
  
      return `${str}`
              .concat(
                  `${options.hasOwnProperty('addition') ? options.addition : ''}`
                      .concat(options.additionSeparator || '|')
                      .repeat(hasPropNumber('additionRepeatTimes'))
                      .slice(0, -(hasPropLength('additionSeparator')))
              )
              .concat(options.separator || '+')
              .repeat(hasPropNumber('repeatTimes'))
              .slice(0, -(hasPropLength('separator')));
  }



