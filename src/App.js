import StepOnePage from "./pages/StepOne";
import StepTwoPage from "./pages/StepTwo";

/**
 *
 * @param {string} currentPageName - The current page name
 */
function cleanPage(currentPageName) {
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

function StepOne() {
  cleanPage("StepOnePage");
  const memoStepOnePage = document.body.querySelector("#StepOnePage");
  if (!memoStepOnePage) {
    document.body.appendChild(StepOnePage);
  }
}

function StepTwo() {
  cleanPage("StepTwoPage");
  const memoStepTwoPage = document.body.querySelector("#StepTwoPage");
  if (!memoStepTwoPage) {
    document.body.appendChild(StepTwoPage);
  }
}

const routes = {
  "#1": StepOne,
  "#2": StepTwo,
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
