import "./Navigation.Style.css";

/**
 * Creates a next step button component.
 * @returns {HTMLElement}
 * @param {string} [page] - The first or last page.
 */
function Navigation(page) {
  const template = document.querySelector("#navigation-component");
  const clone = template.content.cloneNode(true);
  const goBackBtn = clone.querySelector(".navigation-component--go-back");

  if (page && page === "firstPage") {
    goBackBtn.style.visibility = "hidden";
  }

  // TODO: Move the onClick
  goBackBtn.addEventListener("click", (event) => {
    const prevStepHash = +location.hash.slice(1) - 1;
    location.hash = prevStepHash;
  });

  return clone.children[0];
}

export default Navigation;
