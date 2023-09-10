import "./Card.Style.css";
/**
 *
 * @param {string} title - The title of the current step
 * @param {string} description - The description of the current step
 * @param {string} type - The card type: section | select
 * @returns {HTMLElement}
 */
function Card(title, description, type) {
  const template = document.querySelector("#card-component");
  const clone = template.content.cloneNode(true);
  const h1 = clone.querySelector("h1");
  const p = clone.querySelector("p");
  const cardType = clone.querySelector(type);

  h1.innerText = title;
  p.innerText = description;
  cardType.classList.remove(".card-component--hidden");

  return clone.children[0];
}

export default Card;
