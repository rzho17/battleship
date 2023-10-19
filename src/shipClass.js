class Ship {
  constructor(length, hits, sunk, name) {
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
    this.name = name;
  }

  isHit() {
    return (this.hits += 1);
  }

  isSunk() {
    if (this.hits === this.length) {
      return (this.sunk = true);
    }
    return false;
  }
}

export default Ship;
