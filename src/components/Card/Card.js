import "./Card.Style.css";
/**
 *
 * @param {string} title - The title of the current step
 * @param {string} description - The description of the current step
 * @returns DocumentFragment
 */
function Card(title, description) {
  const template = document.querySelector("#card-component");
  const clone = template.content.cloneNode(true);
  const h1 = clone.querySelector("h1");
  const p = clone.querySelector("p");

  h1.innerText = title;
  p.innerText = description;

  return clone;
}

export default Card;
