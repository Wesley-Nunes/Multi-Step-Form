const markText = (e) => {
  const [month, year] = e.currentTarget.querySelectorAll("span");
  if (e.target.checked) {
    month.classList.remove("switch-component--selected-option");
    year.classList.add("switch-component--selected-option");
  } else {
    month.classList.add("switch-component--selected-option");
    year.classList.remove("switch-component--selected-option");
  }
};
const toggleBillingPeriod = (e) => {
  const options =
    e.currentTarget.parentElement.querySelectorAll(".option-component");
  for (const option of options) {
    const priceText = option.querySelector(".option-component__price");
    const extraText = option.querySelector(".option-component__extra");
    if (e.target.checked) {
      const yearPrice = priceText.dataset.yearPrice;
      priceText.textContent = `$${yearPrice}/yr`;
      extraText.classList.remove("option-component__extra--hidden");
    } else {
      const monthPrice = priceText.dataset.monthPrice;
      priceText.textContent = `$${monthPrice}/mo`;
      extraText.classList.add("option-component__extra--hidden");
    }
  }
};

export default {
  markText,
  toggleBillingPeriod,
};
