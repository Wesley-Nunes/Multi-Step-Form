import "./Progress.Style.css";
/**
 *
 * @returns {HTMLElement}
 */
function Progress() {
  const template = document.querySelector("#progress-component");
  const clone = template.content.cloneNode(true);

  return clone.children[0];
}

export default Progress;
