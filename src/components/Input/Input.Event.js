import pubSub from "../../pubsub";

const fieldRequired = "This Field is Required";
const onlyText = "Should contain only text";
const charLimit = (n) => `Should be greater than ${n} character`;

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
}

/**
 * checkErrorEmail
 * @param {InputEvent} e
 */
function checkErrorEmail(e) {
  const message = e.target.value;
  const limit = 4;
  let errorMessage = "";

  if (!message) {
    errorMessage = fieldRequired;
  } else if (message.length <= limit) {
    errorMessage = charLimit(limit);
  }

  pubSub.publish("errorEmailEvent", errorMessage);
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
}

function insertErrorMessage(eventName, errorComponent) {
  pubSub.subscribe(eventName, (errorMessage) => {
    errorComponent.textContent = errorMessage;
  });
}

export default {
  checkErrorName,
  checkErrorEmail,
  checkErrorTel,
  insertErrorMessage,
};
