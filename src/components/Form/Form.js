import "./Form.Style.css";
/**
 *
 * @param {string} currentPageName - The current page name
 * @returns {HTMLFormElement}
 */
function Form(currentPageName) {
  const template = document.querySelector("#form-component");
  const clone = template.content.cloneNode(true);

  clone.children[0].id = currentPageName;

  return clone.children[0];
}

export default Form;
