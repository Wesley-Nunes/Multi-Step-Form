import InputEvents from "../Input/Input.Event";

function validateFormData(formData, formId) {
  if (formId === "StepOnePage") {
    const { checkErrorName, checkErrorEmail, checkErrorTel } = InputEvents;
    const name = formData.get("name");
    const email = formData.get("email");
    const tel = formData.get("tel");

    const nameError = checkErrorName({ target: { value: name } });
    const emailError = checkErrorEmail({ target: { value: email } });
    const telError = checkErrorTel({ target: { value: tel } });

    return !(nameError || emailError || telError);
  } else if (formId === "StepTwoPage") {
    const billingCycle = formData.get("billing-cycle");
    formData.append("billing-cycle", billingCycle ? "Yearly" : "Monthly");

    const plan = formData.get("plan");
    const planElement = document.querySelector(`#${plan}`);
    const price = planElement.querySelector(".option-component__price");
    formData.append(
      "plan-price",
      billingCycle ? price.dataset.yearPrice : price.dataset.monthPrice
    );
  } else if (formId === "StepThreePage") {
    const billingCycle = sessionStorage.getItem("billing-cycle");

    if (!billingCycle) {
      return false;
    }
    const addons = [
      ["online-service", formData.get("online-service")],
      ["larger-storage", formData.get("larger-storage")],
      ["customizable-profile", formData.get("customizable-profile")],
    ];

    for (const [key, value] of addons) {
      if (value) {
        const addOnElement = document.querySelector(`#${key}`).parentElement;
        const price = addOnElement.querySelector(".checkbox-component__price");

        formData.append(
          `${key}-price`,
          billingCycle === "Yearly"
            ? price.dataset.yearPrice
            : price.dataset.monthPrice
        );
      } else {
        formData.delete(key);
        sessionStorage.removeItem(key);
        sessionStorage.removeItem(`${key}-price`);
      }
    }
  }

  return true;
}

function saveData(formData) {
  for (const [key, value] of formData.entries()) {
    sessionStorage.setItem(key, value);
  }
}

function nextStep(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const isValid = validateFormData(formData, form.id);
  if (isValid) {
    saveData(formData);
    const nextStepHash =
      form.id === "StepFourPage" ? "thank-you" : +location.hash.slice(1) + 1;
    location.hash = nextStepHash;
  }
}

export default { nextStep };
