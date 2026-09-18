import { getItineraryEvents } from './src/utils/generateEventPdf.js';
const rawEvents = [
  {
    name: "Phere",
    meal: "Dinner to follow",
    mealTime: "8:00 PM",
    day: "Sunday",
    date: "December 6, 2026",
    time: "5:00 PM",
  }
];
console.log(getItineraryEvents(rawEvents));
