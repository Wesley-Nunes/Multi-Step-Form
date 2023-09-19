import {
  Form,
  FormEvents,
  Card,
  Navigation,
  Progress,
  Checkbox,
  CheckboxEvents,
} from "../components/index";

// Create the components
const StepThree = Form("StepThreePage");
const ProgressThree = Progress(3);
const Addon = Card(
  "Pick add-ons",
  "Add-ons help enhance your gaming experience."
);
const OnlineService = Checkbox(
  "online-service",
  { title: "Online service", description: "Access to multiplayer games" },
  { month: 1, year: 10 }
);
const LargerStorage = Checkbox(
  "larger-storage",
  { title: "Larger storage", description: "Extra 1TB of cloud save" },
  { month: 2, year: 20 }
);
const CustomizableProfile = Checkbox(
  "customizable-profile",
  {
    title: "Customizable Profile",
    description: "Custom theme on your profile",
  },
  { month: 2, year: 20 }
);
const Nav = Navigation();

// Add the events
const { nextStep } = FormEvents;
const { selectCheckbox } = CheckboxEvents;

OnlineService.addEventListener("click", selectCheckbox);
LargerStorage.addEventListener("click", selectCheckbox);
CustomizableProfile.addEventListener("click", selectCheckbox);

StepThree.addEventListener("submit", nextStep);

// Make the page
const stepSection = Addon.querySelector("section");

stepSection.appendChild(OnlineService);
stepSection.appendChild(LargerStorage);
stepSection.appendChild(CustomizableProfile);

StepThree.appendChild(ProgressThree);
StepThree.appendChild(Addon);
StepThree.appendChild(Nav);

export default StepThree;
