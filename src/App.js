import { InputComponent, InputEvents } from "./components/index";

// Create the components
const Name = InputComponent("text", "name", "Name", "e.g. Stephen King");
const Email = InputComponent(
  "email",
  "email",
  "Email Address",
  "e.g. stephenking@email.com"
);
const PhoneNumber = InputComponent(
  "tel",
  "tel",
  "Phone Number",
  "e.g. +1 234 567 890"
);

// Add the events
const { checkErrorName, checkErrorEmail, checkErrorTel, insertErrorMessage } =
  InputEvents;

Name.addEventListener("input", checkErrorName);
const ErrorName = Name.querySelector(".error-message");
insertErrorMessage("errorNameEvent", ErrorName);

Email.addEventListener("input", checkErrorEmail);
const ErrorEmail = Email.querySelector(".error-message");
insertErrorMessage("errorEmailEvent", ErrorEmail);

PhoneNumber.addEventListener("input", checkErrorTel);
const ErrorPhone = PhoneNumber.querySelector(".error-message");
insertErrorMessage("errorTelEvent", ErrorPhone);
// Make the page

document.body.appendChild(Name);
document.body.appendChild(Email);
document.body.appendChild(PhoneNumber);
