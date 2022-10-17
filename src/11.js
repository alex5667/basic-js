

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