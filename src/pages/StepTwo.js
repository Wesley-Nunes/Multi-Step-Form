import {
  Form,
  FormEvents,
  Card,
  Navigation,
  Progress,
  Option,
  OptionEvents,
  Switch,
  SwitchEvents,
} from "../components/index";
import "../styles/global.css";
import "../styles/normalize.css";
import "../styles/variables.css";

// Create the components
const StepTwo = Form("StepTwoPage");
const ProgressTwo = Progress(2);
const Plan = Card(
  "Select your plan",
  "You have the option of monthly or yearly billing."
);

const Arcade = Option("../public/icon-arcade.svg", "Arcade", {
  month: 9,
  year: 90,
});
const Advanced = Option("../public/icon-advanced.svg", "Advanced", {
  month: 12,
  year: 120,
});
const Pro = Option("../public/icon-pro.svg", "Pro", {
  month: 15,
  year: 150,
});
const Toggle = Switch();

const Nav = Navigation();

// Add the events
const { nextStep } = FormEvents;
const { selectOption } = OptionEvents;
const { markText, toggleBillingPeriod } = SwitchEvents;

Arcade.addEventListener("click", selectOption);
Advanced.addEventListener("click", selectOption);
Pro.addEventListener("click", selectOption);

Toggle.addEventListener("input", markText);
Toggle.addEventListener("input", toggleBillingPeriod);

StepTwo.addEventListener("submit", nextStep);

// Make the page
const stepSection = Plan.querySelector("section");

stepSection.appendChild(Arcade);
stepSection.appendChild(Advanced);
stepSection.appendChild(Pro);

Plan.appendChild(Toggle);

StepTwo.appendChild(ProgressTwo);
StepTwo.appendChild(Plan);
StepTwo.appendChild(Nav);

export default StepTwo;
