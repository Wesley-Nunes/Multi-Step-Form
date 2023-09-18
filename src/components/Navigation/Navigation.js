import "./Navigation.Style.css";

/**
 * Creates the navigation  component.
 * @returns {HTMLElement}
 * @param {string} [page] - The first or last page. e.g.: "firstPage" || "lastPage"
 */
function Navigation(page) {
  const template = document.querySelector("#navigation-component");
  const clone = template.content.cloneNode(true);
  const goBackBtn = clone.querySelector(".navigation-component__go-back");
  const nextStep = clone.querySelector(".navigation-component__next-step");
  if (page === "firstPage") {
    goBackBtn.style.visibility = "hidden";
  }
  if (page === "fourthPage") {
    nextStep.textContent = "Confirm";
    nextStep.style.backgroundColor = "var(--purplish-blue)";
  }

  goBackBtn.addEventListener("click", () => {
    const prevStepHash = +location.hash.slice(1) - 1;
    location.hash = prevStepHash;
  });

  return clone.children[0];
}

export default Navigation;
