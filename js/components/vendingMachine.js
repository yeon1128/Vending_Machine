class VendingMachine {
  constructor() {
    const vendingMachine = document.querySelector(".vending-machine");
    this.itemList = vendingMachine.querySelector(".list-drink");
  }
  setup() {
    this.bindEvents();
  }
}
