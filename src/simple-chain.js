const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],

  getLength() {
    return this.arr.length;

  },
  addLink(value) {
    value !== undefined ? this.chains.push(`( ${value} )`) : this.chains.push(`()`)
    return this

  },
  removeLink(position) {
    if (!this.chains[position - 1]) {
      this.chains = []
      throw new Error(`You can't remove incorrect link!`)
    }
    this.chains.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chains.reverse()
    return this
  },
  finishChain() {
    let chain = this.chains.join('~~');
    this.chains = []
    return chain
  }
};

module.exports = {
  chainMaker
};
