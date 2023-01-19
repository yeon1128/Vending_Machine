class VendingMachine {
  constructor() {
    const vendingMachine = document.querySelector(".vending-machine");
    this.itemList = vendingMachine.querySelector(".list-drink");
    this.stagedList = vendingMachine.querySelector(".list-staged");
    this.balance = vendingMachine.querySelector(".num-balance");
    this.btnPut = vendingMachine.querySelector(".button-put");
    this.inputCostEl = vendingMachine.querySelector(".input-cash");
    this.btnReturn = vendingMachine.querySelector(".button-return");
    this.btnGet = vendingMachine.querySelector(".button-get");

    const myinfo = document.querySelector(".my-info");
    this.myMoney = myinfo.querySelector(".num-cash");
    this.gotList = myinfo.querySelector(".list-get-drink");
    this.txtTotal = myinfo.querySelector(".text-total");
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
    // 자판기 메뉴 기능
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

    // 입금 기능
    this.btnPut.addEventListener("click", (e) => {
      const inputCost = parseInt(this.inputCostEl.value);
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));

      if (inputCost) {
        if (inputCost <= myMoneyVal && inputCost > 0) {
          this.myMoney.textContent =
            new Intl.NumberFormat().format(myMoneyVal - inputCost) + "원";
          this.balance.textContent =
            new Intl.NumberFormat().format(
              (balanceVal ? balanceVal : 0) + inputCost
            ) + "원";
        } else {
          alert("소지금 부족");
        }
        this.inputCostEl.value = null;
      }
    });

    // 거스름돈 반환 기능
    this.btnReturn.addEventListener("click", (e) => {
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));

      if (balanceVal) {
        this.myMoney.textContent =
          new Intl.NumberFormat().format(myMoneyVal + balanceVal) + "원";
        this.balance.textContent = "원";
      }
    });

    // 획득 기능
    this.btnGet.addEventListener("click", (e) => {
      let isGot = false;
      let totalPrice = 0;

      for (const itemStaged of this.stagedList.querySelectorAll("li")) {
        for (const itemGot of this.gotList.querySelectorAll("li")) {
          let itemGotCount = itemGot.querySelector(".count-drink");
          if (itemStaged.dataset.item === itemGot.dataset.item) {
            itemGotCount.textContent =
              parseInt(itemGotCount.textContent) +
              parseInt(itemStaged.querySelector(".count-drink").textContent);
            isGot = true;
            break;
          }
        }

        if (!isGot) {
          this.gotList.append(itemStaged);
        }
      }

      this.stagedList.innerHTML = null;

      this.gotList.querySelectorAll("li").forEach((itemGot) => {
        totalPrice +=
          itemGot.dataset.price *
          parseInt(itemGot.querySelector(".count-drink").textContent);
      });

      this.txtTotal.textContent = `총금액: ${new Intl.NumberFormat().format(
        totalPrice
      )}원`;
    });
  }
}

export default VendingMachine;
