import "./Progress.Style.css";
/**
 *
 * @returns {HTMLElement}
 * @param {number} currentStep - The current step of the form
 */
function Progress(currentStep) {
  const template = document.querySelector("#progress-component");
  const clone = template.content.cloneNode(true);

  const step = clone.children[0].children[currentStep - 1];
  step.classList.add("progress-component__step--enabled");

  return clone;
}

export default Progress;
