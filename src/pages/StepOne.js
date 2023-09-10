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
const StepOne = Form("StepOnePage");
const ProgressOne = Progress(1);
const PersonalInfo = Card(
  "Personal info",
  "Please provide your name, email address, and phone number.",
  "section"
);
const Name = Input("text", "name", "Name", "e.g. Stephen King");
const Email = Input(
  "email",
  "email",
  "Email Address",
  "e.g. stephenking@lorem.com"
);
const PhoneNumber = Input("tel", "tel", "Phone Number", "e.g. +1 234 567 890");
const Nav = Navigation("firstPage");

// Add the events
const { checkErrorName, checkErrorEmail, checkErrorTel, insertError } =
  InputEvents;
const { nextStep } = FormEvents;
Name.addEventListener("input", checkErrorName);
insertError("errorNameEvent", Name);

Email.addEventListener("input", checkErrorEmail);
insertError("errorEmailEvent", Email);

PhoneNumber.addEventListener("input", checkErrorTel);
insertError("errorTelEvent", PhoneNumber);

StepOne.addEventListener("submit", nextStep);

// Make the page
const stepSection = PersonalInfo.querySelector("section");

stepSection.appendChild(Name);
stepSection.appendChild(Email);
stepSection.appendChild(PhoneNumber);

StepOne.appendChild(ProgressOne);
StepOne.appendChild(PersonalInfo);
StepOne.appendChild(Nav);

export default StepOne;
