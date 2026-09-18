import { getWhatsAppShareText, getItineraryEvents } from "./src/utils/generateEventPdf.js";
import content from "./src/content.js";
const text = getWhatsAppShareText({ partner1: "Mahek", partner2: "Yash" }, content.events, null);
console.log(text);
