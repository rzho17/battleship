class Ship {
  constructor(length, hits, sunk) {
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
  }

  isHit() {
    return (this.hits += 1);
  }

  isSunk() {
    if (this.hits === this.length) {
      return (this.sunk = true);
    }
  }
}

// export default Ship;
module.exports = Ship;
