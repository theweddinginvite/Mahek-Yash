import { getWhatsAppVenueShareText } from "./src/utils/generateVenuePdf.js";
import content from "./src/content.js";

const text = getWhatsAppVenueShareText({ partner1: "Mahek", partner2: "Yash" }, content.venue);
console.log(text);
