import "./NextStepBtn.Style.css";

/**
 * Creates a next step button component.
 * @returns {HTMLButtonElement}
 */
function NextStepBtn() {
  const template = document.querySelector("#button-component");
  const clone = template.content.cloneNode(true);

  return clone.children[0];
}

export default NextStepBtn;
