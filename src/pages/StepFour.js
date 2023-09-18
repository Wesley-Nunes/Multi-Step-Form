import {
  Form,
  FormEvents,
  Card,
  Navigation,
  Progress,
  Items,
} from "../components/index";

// Create the components
const StepFour = Form("StepFourPage");
const ProgressFour = Progress(4);
const Finishing = Card(
  "Finishing up",
  "Double-check everything looks OK before confirming."
);
const ItemsComponent = Items();

const Nav = Navigation("fourthPage");

// Add the events
const { nextStep } = FormEvents;

StepFour.addEventListener("submit", nextStep);

// Make the page
const stepSection = Finishing.querySelector("section");

stepSection.appendChild(ItemsComponent);

StepFour.appendChild(ProgressFour);
StepFour.appendChild(Finishing);
StepFour.appendChild(Nav);

export default StepFour;
