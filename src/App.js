import { Input, InputEvents, Card } from "./components/index";
import "./styles/global.css";
import "./styles/normalize.css";
import "./styles/variables.css";

// Create the components
const PersonalInfo = Card(
  "Personal info",
  "Please provide your name, email address, and phone number."
);
const Name = Input("text", "name", "Name", "e.g. Stephen King");
const Email = Input(
  "email",
  "email",
  "Email Address",
  "e.g. stephenking@lorem.com"
);
const PhoneNumber = Input("tel", "tel", "Phone Number", "e.g. +1 234 567 890");

// Add the events
const { checkErrorName, checkErrorEmail, checkErrorTel, insertErrorMessage } =
  InputEvents;

Name.children[0].addEventListener("input", checkErrorName);
const ErrorName = Name.querySelector(".input-component__error-msg");
insertErrorMessage("errorNameEvent", ErrorName);

Email.children[0].addEventListener("input", checkErrorEmail);
const ErrorEmail = Email.querySelector(".input-component__error-msg");
insertErrorMessage("errorEmailEvent", ErrorEmail);

PhoneNumber.children[0].addEventListener("input", checkErrorTel);
const ErrorPhone = PhoneNumber.querySelector(".input-component__error-msg");
insertErrorMessage("errorTelEvent", ErrorPhone);

// Make the page
const stepSection = PersonalInfo.querySelector("section");
stepSection.appendChild(Name);
stepSection.appendChild(Email);
stepSection.appendChild(PhoneNumber);

document.body.appendChild(PersonalInfo);
