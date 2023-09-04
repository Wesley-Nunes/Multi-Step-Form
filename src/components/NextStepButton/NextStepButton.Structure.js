/**
 * Creates a next step button component.
 */
function NextStepButton() {
  const button = document.createElement("button");

  button.innerText = "Next Step";

  button.className = "btn-next";

  return button;
}

export default NextStepButton;
