import "./Switch.Style.css";

function Switch() {
  const template = document.querySelector("#switch-component");
  const clone = template.content.cloneNode(true);

  return clone.children[0];
}

export default Switch;
