import "./Checkbox.Style.css";
/**
 * Creates an Checkbox component.
 * @param {string} id - The id of the Checkbox.
 * @param {Object} labelMessage - The text of the Checkbox.
 * @param {string} labelMessage.title - The title of the add-on.
 * @param {string} labelMessage.description - The description of the add-on.
 * @param {Object} price - The month price and year price of the add-on.
 * @param {number} price.month - The month price.
 * @param {number} price.year - The year price.
 * @returns {HTMLLabelElement}
 */
function Checkbox(id, labelMessage, price) {
  const template = document.querySelector("#checkbox-component");
  const clone = template.content.cloneNode(true);
  const label = clone.querySelector("label");
  const [title, description] = clone.querySelector("span").children;
  const priceMessage = clone.querySelector(".checkbox-component__price");
  const checkbox = clone.querySelector("input");
  const billingCycle = sessionStorage.getItem("billing-cycle");

  label.htmlFor = id;
  title.textContent = labelMessage.title;
  description.textContent = labelMessage.description;
  checkbox.id = id;
  checkbox.name = id;

  priceMessage.dataset.monthPrice = price.month;
  priceMessage.dataset.yearPrice = price.year;
  priceMessage.textContent =
    billingCycle === "Monthly" ? `+$${price.month}/mo` : `+$${price.year}/yr`;

  return clone.children[0];
}

export default Checkbox;
