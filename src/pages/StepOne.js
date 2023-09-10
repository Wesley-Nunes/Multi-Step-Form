import {
  Form,
  FormEvents,
  Card,
  Input,
  InputEvents,
  Navigation,
  Progress,
} from "../components/index";
import "../styles/global.css";
import "../styles/normalize.css";
import "../styles/variables.css";

// Create the components
const StepOne = Form();
const ProgressOne = Progress();
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
const Nav = Navigation();

// Add the events
const { checkErrorName, checkErrorEmail, checkErrorTel, insertErrorMessage } =
  InputEvents;
const { nextStep } = FormEvents;
Name.addEventListener("input", checkErrorName);
const ErrorName = Name.querySelector(".input-component__error-msg");
insertErrorMessage("errorNameEvent", ErrorName);

Email.addEventListener("input", checkErrorEmail);
const ErrorEmail = Email.querySelector(".input-component__error-msg");
insertErrorMessage("errorEmailEvent", ErrorEmail);

PhoneNumber.addEventListener("input", checkErrorTel);
const ErrorPhone = PhoneNumber.querySelector(".input-component__error-msg");
insertErrorMessage("errorTelEvent", ErrorPhone);

StepOne.addEventListener("submit", nextStep);

// Make the page
const stepOneProgress = ProgressOne.children[0];
stepOneProgress.classList.add("progress-component__step--enabled");
const stepSection = PersonalInfo.querySelector("section");
const goBackBtn = Nav.querySelector(".navigation-component--go-back");

StepOne.appendChild(ProgressOne);
stepSection.appendChild(Name);
stepSection.appendChild(Email);
stepSection.appendChild(PhoneNumber);
StepOne.appendChild(PersonalInfo);

goBackBtn.style.visibility = "hidden";
StepOne.appendChild(Nav);

export default StepOne;
