import StepOnePage from "./pages/StepOne";

function StepOne() {
  document.body.appendChild(StepOnePage);
}

function StepTwo() {
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
