import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (Number.isNaN(amount) || !(currency instanceof Currency)) {
      throw new Error('Put in valid options');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(money) {
    if (Number.isNaN(money)) throw new Error('Put a number');
    this._amount = money;
  }

  set currency(current) {
    if (!(current instanceof Currency)) {
      throw new Error('Put an object');
    }
    this._currency = current;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (Number.isNaN(amount) || Number.isNaN(conversionRate)) {
      throw new Error('Invalid conversion parameters');
    }
    return amount * conversionRate;
  }
}
