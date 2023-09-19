import { Form, Card, Progress, ThankYou } from "../components/index";

// Create the components
const ThankYouPage = Form("ThankYou");
const ProgressFour = Progress(4);
const Finishing = Card();
const ThankYouMessage = ThankYou();

// Add the events

// Make the page
const stepSection = Finishing.querySelector("section");

stepSection.appendChild(ThankYouMessage);

ThankYouPage.appendChild(ProgressFour);
ThankYouPage.appendChild(Finishing);

export default ThankYouPage;
