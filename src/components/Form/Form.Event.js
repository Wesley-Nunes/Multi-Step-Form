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
    formData.append("billing-cycle", billingCycle ? "year" : "month");
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
    const nextStepHash = +location.hash.slice(1) + 1;
    location.hash = nextStepHash;
  }
}

export default { nextStep };
