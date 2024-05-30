export default class Building {
  constructor(sqft) {
    if (typeof this.evacuationWarningMessage !== 'function') {
      if (this.constructor !== Building) {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
