import InputEvents from "../Input/Input.Event";

function validateFormData(formData) {
  const { checkErrorName, checkErrorEmail, checkErrorTel } = InputEvents;
  const name = formData.get("name");
  const email = formData.get("email");
  const tel = formData.get("tel");

  const nameError = checkErrorName({ target: { value: name } });
  const emailError = checkErrorEmail({ target: { value: email } });
  const telError = checkErrorTel({ target: { value: tel } });

  return !(nameError || emailError || telError);
}

function saveData(formData) {
  for (const [key, value] of formData.entries()) {
    sessionStorage.setItem(key, value);
  }
}

function nextStep(e) {
  e.preventDefault();
  const form = document.querySelector("form");
  const formData = new FormData(form);
  const isValid = validateFormData(formData);
  if (isValid) {
    saveData(formData);
    const nextStepHash = +location.hash.slice(1) + 1;
    location.hash = nextStepHash;
  }
}

export default { nextStep };
