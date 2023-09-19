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

function updateAttr(page) {
  const billingCycleInMemo = sessionStorage.getItem("billing-cycle");
  if (page.id === "StepThreePage") {
    const pricesToUpdate = page.querySelectorAll(".checkbox-component__price");
    for (const price of pricesToUpdate) {
      price.textContent =
        billingCycleInMemo === "Monthly"
          ? `+$${price.dataset.monthPrice}/mo`
          : `+$${price.dataset.yearPrice}/yr`;
    }
  } else if (page.id === "StepFourPage") {
    const getPrice = (billingCycle, price) =>
      billingCycle === "Monthly" ? `+$${price}/mo` : `+$${price}/yr`;
    const togglePriceVitality = (
      addonName,
      addonPrice,
      addonElement,
      billingCycle
    ) => {
      if (addonName) {
        const onlineServicePriceText = addonElement.children[1];

        addonElement.classList.remove("items-component__item--hidden");
        onlineServicePriceText.textContent = getPrice(billingCycle, addonPrice);
      } else {
        addonElement.classList.add("items-component__item--hidden");
      }
    };

    const planValue = sessionStorage.getItem("plan");
    const planPriceValue = sessionStorage.getItem("plan-price");
    const onlineServiceValue = sessionStorage.getItem("online-service");
    const onlineServicePriceValue = sessionStorage.getItem(
      "online-service-price"
    );
    const largeStorageValue = sessionStorage.getItem("larger-storage");
    const largeStoragePriceValue = sessionStorage.getItem(
      "larger-storage-price"
    );
    const customizableProfileValue = sessionStorage.getItem(
      "customizable-profile"
    );
    const customizableProfilePriceValue = sessionStorage.getItem(
      "customizable-profile-price"
    );
    const [plan, onlineService, largeStorage, customizableProfile, total] =
      page.querySelectorAll(".items-component__item");
    const [planText, planPriceText] = plan.children;
    const [totalText, totalPriceText] = total.children;

    planText.firstChild.textContent = `${planValue}(${billingCycleInMemo})`;
    planPriceText.textContent = getPrice(billingCycleInMemo, planPriceValue);

    togglePriceVitality(
      onlineServiceValue,
      onlineServicePriceValue,
      onlineService,
      billingCycleInMemo
    );
    togglePriceVitality(
      largeStorageValue,
      largeStoragePriceValue,
      largeStorage,
      billingCycleInMemo
    );
    togglePriceVitality(
      customizableProfileValue,
      customizableProfilePriceValue,
      customizableProfile,
      billingCycleInMemo
    );

    const totalOrder =
      +planPriceValue +
      +onlineServicePriceValue +
      +largeStoragePriceValue +
      +customizableProfilePriceValue;
    totalText.textContent = `Total (${
      billingCycleInMemo === "Monthly" ? `per month` : `per year`
    })`;
    totalPriceText.textContent = getPrice(billingCycleInMemo, totalOrder);
  }
}

function StepOne() {
  const memoStepOnePage = document.body.querySelector("#StepOnePage");
  if (!memoStepOnePage) {
    import("./pages/StepOne").then(({ default: StepOnePage }) =>
      document.body.appendChild(StepOnePage)
    );
  }
  toggleVisibility("StepOnePage");
}

function StepTwo() {
  const memoStepTwoPage = document.body.querySelector("#StepTwoPage");
  if (!memoStepTwoPage) {
    // document.body.appendChild(StepTwoPage);
    import("./pages/StepTwo").then(({ default: StepTwoPage }) =>
      document.body.appendChild(StepTwoPage)
    );
  }
  toggleVisibility("StepTwoPage");
}

function StepThree() {
  const memoStepThreePage = document.body.querySelector("#StepThreePage");
  if (!memoStepThreePage) {
    import("./pages/StepThree").then(({ default: StepThreePage }) =>
      document.body.appendChild(StepThreePage)
    );
  } else {
    updateAttr(memoStepThreePage);
  }
  toggleVisibility("StepThreePage");
}

function StepFour() {
  const memoStepFourPage = document.body.querySelector("#StepFourPage");
  if (!memoStepFourPage) {
    import("./pages/StepFour").then(({ default: StepFourPage }) =>
      document.body.appendChild(StepFourPage)
    );
  } else {
    updateAttr(memoStepFourPage);
  }
  toggleVisibility("StepFourPage");
}

function ThankYou() {
  const memoThankYouPage = document.body.querySelector("#ThankYou");
  if (!memoThankYouPage) {
    import("./pages/ThankYou").then(({ default: ThankYouPage }) =>
      document.body.appendChild(ThankYouPage)
    );
  }
  toggleVisibility("ThankYou");
}

const routes = {
  "#1": StepOne,
  "#2": StepTwo,
  "#3": StepThree,
  "#4": StepFour,
  "#thank-you": ThankYou,
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

//  Initial navigation
navigate("1");
