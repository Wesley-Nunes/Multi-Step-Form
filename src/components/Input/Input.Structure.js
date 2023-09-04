/**
 * Creates a label component.
 * @param {string} id - The id of the label
 * @returns HTMLLabelElement
 */
function Label(id) {
  const label = document.createElement("label");

  label.htmlFor = id;
  label.className = "label";

  return label;
}

/**
 * Creates a div component
 * @returns HTMLDivELement
 */
function Container() {
  const container = document.createElement("div");

  container.className = "text-container";

  return container;
}

/**
 * Creates a text component.
 * @param {string} [message] - The text message.
 * @param {string} [className] - The class name.
 * @returns HTMLSpanElement
 */
function Text(message = "", className = "") {
  const text = document.createElement("span");

  text.innerText = message;

  text.className = className;

  return text;
}

/**
 * Creates an input component.
 * @param {string} type - The type of the input.
 * @param {string} id - The id of the input.
 * @param {string} placeholder - The placeholder to be show inside the input.
 */
function Input(type, id, placeholder) {
  const input = document.createElement("input");

  input.id = id;
  input.name = id;
  input.placeholder = placeholder;
  input.type = type;
  input.required = true;

  input.className = "input";

  // input.addEventListener("input", updateValue);

  // function updateValue(e) {
  //   console.log(e.target.value);
  // }

  return input;
}

/**
 * Creates an input component.
 * @param {string} type - The type of the input.
 * @param {string} id - The id of the input.
 * @param {string} labelMessage - The caption of the input.
 * @param {string} placeholder - The placeholder to be show inside the input.
 */
function InputComponent(type, id, labelMessage, placeholder) {
  const labelName = Text(labelMessage);
  const errorMessage = Text("", "error-message");
  const input = Input(type, id, placeholder);
  const label = Label(id);
  const container = Container();

  label.appendChild(container);
  label.appendChild(input);
  container.appendChild(labelName);
  container.appendChild(errorMessage);

  return label;
}

export default InputComponent;
