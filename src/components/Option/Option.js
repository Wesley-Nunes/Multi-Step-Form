import "./Option.Style.css";
/**
 *
 * @param {string} imgSrc - The src of the img
 * @param {string} name - The name of the plan
 * @param {Object} price - The month price and year price of the plan.
 * @param {number} price.month - The month price.
 * @param {number} price.year - The year price.
 * @returns {HTMLOptionElement}
 */
function OptionComponent(imgSrc, name, price) {
  const template = document.querySelector("#option-component");
  const clone = template.content.cloneNode(true);
  const img = clone.querySelector("img");
  const optionName = clone.querySelector(".option-component__name");
  const optionPrice = clone.querySelector(".option-component__price");

  clone.children[0].id = name;
  img.src = imgSrc;
  optionName.innerText = name;
  optionPrice.dataset.monthPrice = price.month;
  optionPrice.dataset.yearPrice = price.year;
  optionPrice.innerText = `$${price.month}/mo`;

  return clone.children[0];
}

export default OptionComponent;
