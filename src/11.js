

const chainMaker = {
  arr: [],
  
  getLength() {
  return this.arr.length
  },
  addLink(value) {
  if (value === null) {
  this.arr.push('null')
  } else {
  this.arr.push(String(value)) //? нужно ли здесь String
  }
  return this
  },
  removeLink(position) {
  if (!this.arr[position - 1]) {
  this.arr = []
  throw new Error(`You can't remove incorrect link!`)
  }
  this.arr.splice(position - 1, 1)
  return this
  },
  reverseChain() {
  this.arr.reverse()
  return this
  },
  finishChain() {
  let str = this.arr.join(' )~~( ') // ['1', '2', '3'] => '1 )~~( 2 )~~( 3'
  this.arr = []
  return `( ${str} )`
  },
  }




  const chainMaker = {
    chain: [],
    getLength() {
      return this.chain.length;
    },
    addLink(value) {
      value === undefined ? this.chain.push(`()`) : this.chain.push(`( ${value} )`);
      return this
  
    },
    removeLink(position) {
      if (!this.chain[position] || !Number.isInteger(position) || position === 0) {
        this.chain = []
        throw new Error('You can\'t remove incorrect link!');
      }
      this.chain.splice(position - 1, 1)
      return this
    },
    reverseChain() {
      this.chain.reverse()
      return this
    },
    finishChain() {
  
      let result = this.chain.join('~~');
      this.chain = []
      return result
    }
  };