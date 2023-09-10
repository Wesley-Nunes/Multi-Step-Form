import {
  Form,
  FormEvents,
  Card,
  Navigation,
  Progress,
} from "../components/index";
import "../styles/global.css";
import "../styles/normalize.css";
import "../styles/variables.css";

// Create the components
const StepTwo = Form("StepTwoPage");
const ProgressOne = Progress(2);
const Plan = Card(
  "Select your plan",
  "You have the option of monthly or yearly billing.",
  "select"
);

//

const Nav = Navigation();

// Add the events
const { nextStep } = FormEvents;
StepTwo.addEventListener("submit", nextStep);

// Make the page
// const stepTwoProgress = ProgressOne.children[1];
// stepTwoProgress.classList.add("progress-component__step--enabled");
// const stepSection = Plan.querySelector("section");

StepTwo.appendChild(ProgressOne);
// stepSection.appendChild(Name);
// stepSection.appendChild(Email);
// stepSection.appendChild(PhoneNumber);
StepTwo.appendChild(Plan);

StepTwo.appendChild(Nav);

export default StepTwo;
