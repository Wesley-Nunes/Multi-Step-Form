import StepOnePage from "./pages/StepOne";

function cleanPage() {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
}

function StepOne() {
  cleanPage();
  document.body.appendChild(StepOnePage);
}

function StepTwo() {
  cleanPage();
  document.body.innerHTML = "Step two";
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
