import "./ThankYou.Style.css";
/**
 *
 * @returns {HTMLElement}
 */
function ThankYou() {
  const template = document.querySelector("#thank-you-component");
  const clone = template.content.cloneNode(true);

  return clone;
}

export default ThankYou;
