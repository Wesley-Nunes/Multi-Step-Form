import "./Items.Style.css";

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

function ItemsComponent() {
  const template = document.querySelector("#items-component");
  const clone = template.content.cloneNode(true);
  const [plan, onlineService, largeStorage, customizableProfile, total] =
    clone.querySelectorAll(".items-component__item");
  const [planText, planPriceText] = plan.children;
  const [totalText, totalPriceText] = total.children;

  const planValue = sessionStorage.getItem("plan");
  const planPriceValue = sessionStorage.getItem("plan-price");
  const billingCycleValue = sessionStorage.getItem("billing-cycle");
  const onlineServiceValue = sessionStorage.getItem("online-service");
  const onlineServicePriceValue = sessionStorage.getItem(
    "online-service-price"
  );
  const largeStorageValue = sessionStorage.getItem("larger-storage");
  const largeStoragePriceValue = sessionStorage.getItem("larger-storage-price");
  const customizableProfileValue = sessionStorage.getItem(
    "customizable-profile"
  );
  const customizableProfilePriceValue = sessionStorage.getItem(
    "customizable-profile-price"
  );

  planText.firstChild.textContent = `${planValue}(${billingCycleValue})`;
  planPriceText.textContent = getPrice(billingCycleValue, planPriceValue);

  togglePriceVitality(
    onlineServiceValue,
    onlineServicePriceValue,
    onlineService,
    billingCycleValue
  );
  togglePriceVitality(
    largeStorageValue,
    largeStoragePriceValue,
    largeStorage,
    billingCycleValue
  );
  togglePriceVitality(
    customizableProfileValue,
    customizableProfilePriceValue,
    customizableProfile,
    billingCycleValue
  );

  const totalOrder =
    +planPriceValue +
    +onlineServicePriceValue +
    +largeStoragePriceValue +
    +customizableProfilePriceValue;
  totalText.textContent = `Total (${
    billingCycleValue === "Monthly" ? `per month` : `per year`
  })`;
  totalPriceText.textContent = getPrice(billingCycleValue, totalOrder);

  return clone;
}

export default ItemsComponent;
