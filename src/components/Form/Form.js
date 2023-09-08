import "./Form.Style.css";
/**
 *
 * @returns {HTMLFormElement}
 */
function Form() {
  const template = document.querySelector("#form-component");
  const clone = template.content.cloneNode(true);

  return clone.children[0];
}

export default Form;
