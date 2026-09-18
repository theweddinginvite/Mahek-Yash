import { getWhatsAppShareText } from "./src/utils/generateEventPdf.js";
const couple = { partner1: "Mahek", partner2: "Yash" };
const events = [
  { name: "HALDI", day: "Saturday", displayDate: "December 5, 2026", displayTime: "12:30 PM", description: "A joyful and vibrant ceremony of turmeric blessings, love, and sunny smiles.", attire: "Shades of Pink" },
  { name: "LUNCH", day: "Saturday", displayDate: "December 5, 2026", displayTime: "1:30 PM" },
  { name: "ENGAGEMENT & SANGEET", day: "Saturday", displayDate: "December 5, 2026", displayTime: "5:00 PM", description: "An enchanting evening of music, dance performances, and celebration.", attire: "Glam and Glitter" },
  { name: "GODH BHARAI & SAGAI", day: "Saturday", displayDate: "December 5, 2026", displayTime: "7:00 PM", description: "Traditional blessings and auspicious ring ceremony with family & loved ones.", attire: "Glam and Glitter" },
  { name: "DINNER", day: "Saturday", displayDate: "December 5, 2026", displayTime: "8:00 PM" },
  { name: "JAIMAAL", day: "Sunday", displayDate: "December 6, 2026", displayTime: "1:00 PM", description: "The auspicious floral garland exchange marking the union of bride and groom.", attire: "Ethnic Wear" },
  { name: "GALA LUNCH", day: "Sunday", displayDate: "December 6, 2026", displayTime: "2:00 PM" },
  { name: "PHERE", day: "Sunday", displayDate: "December 6, 2026", displayTime: "5:00 PM", description: "The seven sacred vows around the holy agni solemnizing the sacred marriage bond.", attire: "Ethnic Wear" }
];
const venue = { name: "The Resort", address: "Resort address", helpdesk: "12345", googleMapsUrl: "http://g.co", directionUrl: "http://g.co" };
const text = getWhatsAppShareText(couple, events, venue);
console.log("Length:", text.length);
console.log(text);
