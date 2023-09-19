import pubSub from "../../pubsub";

const fieldRequired = "This Field is Required";
const onlyText = "Should contain only text";
const charLimit = (n) => `At least ${n + 1} characters`;
const wrongEmailFormatMessage = "Wrong email format";

/**
 * checkErrorName
 * @param {InputEvent} e
 */
function checkErrorName(e) {
  const message = e.target.value;
  const limit = 1;
  let errorMessage = "";

  if (!message) {
    errorMessage = fieldRequired;
  } else if (!isNaN(+message)) {
    errorMessage = onlyText;
  } else if (message.length <= limit) {
    errorMessage = charLimit(limit);
  }

  pubSub.publish("errorNameEvent", errorMessage);

  return errorMessage;
}

/**
 * checkErrorEmail
 * @param {InputEvent} e
 */
function checkErrorEmail(e) {
  const message = e.target.value;
  const limit = 4;
  const wrongEmailFormat =
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(message);
  let errorMessage = "";

  if (!message) {
    errorMessage = fieldRequired;
  } else if (message.length <= limit) {
    errorMessage = charLimit(limit);
  } else if (wrongEmailFormat) {
    errorMessage = wrongEmailFormatMessage;
  }

  pubSub.publish("errorEmailEvent", errorMessage);

  return errorMessage;
}

/**
 * checkErrorTel
 * @param {InputEvent} e
 */
function checkErrorTel(e) {
  const message = e.target.value;
  const limit = 7;
  let errorMessage = "";

  if (!message) {
    errorMessage = fieldRequired;
  } else if (message.length <= limit) {
    errorMessage = charLimit(limit);
  }

  pubSub.publish("errorTelEvent", errorMessage);

  return errorMessage;
}

/**
 * insertError
 * @param {string} eventName - The name of the event to subscribe.
 * @param {HTMLElement} inputComponent - The Input Component
 */
function insertError(eventName, inputComponent) {
  pubSub.subscribe(eventName, (errorMessage) => {
    const error = inputComponent.querySelector(".input-component__error-msg");
    const input = inputComponent.querySelector("input");

    error.textContent = errorMessage;

    if (errorMessage) {
      input.classList.add("input-component__input--error");
    } else {
      input.classList.remove("input-component__input--error");
    }
  });
}

export default {
  checkErrorName,
  checkErrorEmail,
  checkErrorTel,
  insertError,
};
