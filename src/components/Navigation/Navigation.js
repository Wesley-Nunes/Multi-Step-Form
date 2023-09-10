import "./Navigation.Style.css";

/**
 * Creates a next step button component.
 * @returns {HTMLElement}
 */
function Navigation() {
  const template = document.querySelector("#navigation-component");
  const clone = template.content.cloneNode(true);

  return clone.children[0];
}

export default Navigation;
