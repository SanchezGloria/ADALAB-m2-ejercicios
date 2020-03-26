const bag = {
  maxPear: 10,
  minPear: 1,
  pearNow: 4,
  pearInitial: 8,
  pearAdd: function() {
    return this.pearNow + 1;
  },
  pearRemove: function() {
    return this.pearNow - 1;
  },
  pearRestore: function() {
    return this.pearInitial;
  }
};

console.log(bag.pearAdd());
console.log(bag.pearRemove());
console.log(bag.pearRestore());
