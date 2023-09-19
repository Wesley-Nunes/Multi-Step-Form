import "./Input.Style.css";
/**
 * Creates an input component.
 * @param {string} type - The type of the input.
 * @param {string} id - The id of the input.
 * @param {string} labelMessage - The caption of the input.
 * @param {string} placeholder - The placeholder to be show inside the input.
 * @returns {HTMLLabelElement}
 */
function Input(type, id, labelMessage, placeholder) {
  const template = document.querySelector("#input-component");
  const clone = template.content.cloneNode(true);
  const label = clone.querySelector("label");
  const input = clone.querySelector("input");
  const [name, error] = clone.querySelectorAll("span");

  label.htmlFor = id;
  name.textContent = labelMessage;
  error.id = `${id}error`;
  input.id = id;
  input.name = id;
  input.placeholder = placeholder;
  input.type = type;
  input.setAttribute("aria-describedby", error.id);

  return clone.children[0];
}

export default Input;
