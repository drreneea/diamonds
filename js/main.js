document.querySelectorAll(".filter__block").forEach((block) => {
  block.querySelector(".filter__title").onclick = function () {
    this.closest(".filter__block").classList.toggle("filter__block_active");
    this.closest(".filter__block")
      .querySelector(".filter__inputs_select")
      .classList.toggle("filter__inputs_show");
  };
});

document.querySelectorAll(".filter__inputs input").forEach((input) => {
  input.addEventListener("change", function () {
    const checkedFilters = Array.from(
      document.querySelectorAll(".filter__inputs input:checked")
    ).map((input) => input.getAttribute("data-filter"));

    const showItems = [];
    const hiddenItems = [];

    document.querySelectorAll(".main__block .item").forEach((item) => {
      const itemFilters = item.getAttribute("data-filter-item").split(", ");
      let shouldShow = false;

      checkedFilters.forEach((filter) => {
        if (itemFilters.includes(filter)) {
          shouldShow = true;
        }
      });

      if (shouldShow) {
        showItems.push(item);
      } else {
        hiddenItems.push(item);
      }
    });

    showItems.forEach((item) => {
      item.classList.remove("item_hide");
      item.classList.add("item_show");
    });

    hiddenItems.forEach((item) => {
      item.classList.remove("item_show");
      item.classList.add("item_hide");
    });

    if (
      document.querySelectorAll(".filter__inputs input:checked").length == 0
    ) {
      document.querySelectorAll(".main__block .item").forEach((item) => {
        item.classList.remove("item_show");
        item.classList.remove("item_hide");
      });
    }
  });
});

document.querySelector(".main__filter .filter__top").onclick = function () {
  this.closest(".main__filter")
    .querySelector(".filter__inner")
    .classList.toggle("filter__inner_show");
};
