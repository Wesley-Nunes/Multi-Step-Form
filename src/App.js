import StepOnePage from "./pages/StepOne";
import StepTwoPage from "./pages/StepTwo";
import StepThreePage from "./pages/StepThree";
import "./styles/global.css";
import "./styles/normalize.css";
import "./styles/variables.css";

/**
 *
 * @param {string} currentPageName - The current page name
 */
function toggleVisibility(currentPageName) {
  const pages = document.body.querySelectorAll("form");
  if (pages.length) {
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      if (page.id !== currentPageName) {
        page.classList.add("form-component--hidden");
      } else {
        page.classList.remove("form-component--hidden");
      }
    }
  }
}

function checkCascadeAlterations(pageName) {
  const page = document.body.querySelector(`#${pageName}`);

  if (!page) {
    return;
  }

  const billingCycleInMemo = sessionStorage.getItem("billing-cycle");
  const billingCycleInPage = page
    .querySelector(".checkbox-component__price")
    .textContent.includes("yr")
    ? "year"
    : "month";
  if (billingCycleInMemo === billingCycleInPage) {
    return;
  }

  const pricesToUpdate = page.querySelectorAll(".checkbox-component__price");
  for (const price of pricesToUpdate) {
    price.innerText =
      billingCycleInMemo === "month"
        ? `+$${price.dataset.monthPrice}/mo`
        : `+$${price.dataset.yearPrice}/yr`;
  }
}

function StepOne() {
  const memoStepOnePage = document.body.querySelector("#StepOnePage");
  if (!memoStepOnePage) {
    document.body.appendChild(StepOnePage);
  }
  toggleVisibility("StepOnePage");
}

function StepTwo() {
  const memoStepTwoPage = document.body.querySelector("#StepTwoPage");
  if (!memoStepTwoPage) {
    document.body.appendChild(StepTwoPage);
  }
  toggleVisibility("StepTwoPage");
}

function StepThree() {
  checkCascadeAlterations("StepThreePage");
  const memoStepThreePage = document.body.querySelector("#StepThreePage");
  if (!memoStepThreePage) {
    document.body.appendChild(StepThreePage);
  }
  toggleVisibility("StepThreePage");
}

const routes = {
  "#1": StepOne,
  "#2": StepTwo,
  "#3": StepThree,
};

function navigate(initialHash) {
  const isFirstLoad = initialHash && typeof initialHash === "string";
  if (isFirstLoad) {
    window.location.hash = initialHash;
  }
  const hash = window.location.hash;
  const route = routes[hash];
  if (route) {
    route();
  } else {
    // Handle 404 - Page Not Found
    document.body.innerHTML = "404 - Page Not Found";
  }
}

window.addEventListener("hashchange", navigate);

// Initial navigation
navigate("1");
