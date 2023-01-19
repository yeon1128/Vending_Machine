class VendingMachine {
  constructor() {
    const vendingMachine = document.querySelector(".vending-machine");
    this.itemList = vendingMachine.querySelector(".list-drink");
    this.stagedList = vendingMachine.querySelector(".list-staged");
    this.balance = vendingMachine.querySelector(".num-balance");
  }

  stagedItemGenerator(target) {
    const stagedItem = document.createElement("li");
    stagedItem.dataset.item = target.dataset.item;
    stagedItem.dataset.price = target.dataset.price;

    stagedItem.innerHTML = `
    <button type="button" class="list-staged-item">
      <img class="img-drink" src="./images/${target.dataset.img}" alt="" />
      <strong class="txt-drink">${target.dataset.item}</strong>
      <span class="count-drink">1</span>
    </button>
    `;

    this.stagedList.appendChild(stagedItem);
  }

  setup() {
    this.bindEvents();
  }

  bindEvents() {
    const btnsCola = this.itemList.querySelectorAll("button");

    btnsCola.forEach((item) => {
      item.addEventListener("click", (e) => {
        const targetEl = e.currentTarget;
        const targetElPrice = parseInt(targetEl.dataset.price);
        const stagedListItem = this.stagedList.querySelectorAll("li");
        const balanceVal = parseInt(
          this.balance.textContent.replaceAll(",", "")
        );
        let isStaged = false;

        console.log(targetEl);

        if (balanceVal >= targetElPrice) {
          this.balance.textContent =
            new Intl.NumberFormat().format(balanceVal - targetElPrice) + "원";

          for (const item of stagedListItem) {
            if (item.dataset.item === targetEl.dataset.item) {
              item.querySelector(".count-drink").textContent++;
              isStaged = true;
              break;
            }
          }

          if (!isStaged) {
            this.stagedItemGenerator(targetEl);
          }

          targetEl.dataset.count--;

          if (parseInt(targetEl.dataset.count) === 0) {
            targetEl.parentElement.classList.add("sold-out");
            const warning = document.createElement("em");
            warning.textContent = "해당 음료는 품절입니다.";
            warning.classList.add("ir");
            targetEl.parentElement.insertBefore(warning, targetEl);
          }
        } else {
          alert("잔액 부족");
        }
      });
    });
  }
}

export default VendingMachine;
