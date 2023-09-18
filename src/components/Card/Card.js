import "./Card.Style.css";
/**
 *
 * @param {string} title - The title of the current step
 * @param {string} description - The description of the current step
 * @returns {HTMLElement}
 */
function Card(title, description) {
  const template = document.querySelector("#card-component");
  const clone = template.content.cloneNode(true);
  const h1 = clone.querySelector("h1");
  const p = clone.querySelector("p");

  h1.textContent = title;
  p.textContent = description;

  return clone.children[0];
}

export default Card;
