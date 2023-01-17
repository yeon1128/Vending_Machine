class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".list-drink");
  }

  async setup() {
    await this.loadData((json) => {
      this.colaFactory(json);
    });
  }

  async loadData(callback) {
    const response = await fetch("./js/item.json");

    if (response.ok) {
      callback(await response.json());
    } else {
      alert("통신 에러!" + response.status);
    }
  }

  colaFactory(data) {
    const docFrag = document.createDocumentFragment();
    data.forEach((el) => {
      const item = document.createElement("li");
      const itemTemplate = `
          <button type="button" class="button-drink" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
            <img class="img-drink" src="./images/${el.img}" alt="" />
            <span class="name-drink">${el.name}</span>
            <span class="price-drink">${el.cost}원</span>
          </button>
          `;
      item.innerHTML = itemTemplate;
      docFrag.appendChild(item);
    });
    this.itemList.appendChild(docFrag);
  }
}

export default ColaGenerator;
