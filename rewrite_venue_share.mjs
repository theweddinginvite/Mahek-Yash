import fs from 'fs';

const template = `export function getWhatsAppVenueShareText(couple, venue) {
  const p1 = (couple?.partner1 || "Bride").replace(/oratna/i, "");
  const p2 = (couple?.partner2 || "Groom").replace(/oratna/i, "");

  let text = \`*The wedding of \${p1} & \${p2}*\\n\`;
  text += \`*December 5-6, 2026*\\n\\n\`;
  text += \`✨ *Location & Travel Guide*\\n\\n\`;

  if (venue) {
    text += \`*Venue:* \${venue.name}\\n\`;
    if (venue.address) {
      text += \`Address: \${venue.address}\\n\\n\`;
    }
    if (venue.phone) {
      text += \`Helpdesk: \${venue.phone}\\n\\n\`;
    }
    if (venue.qrUrl) {
      text += \`*Google Search Resort:*\\n\${venue.qrUrl}\\n\\n\`;
    }
    if (venue.directionsUrl) {
      text += \`*Maps Direction:*\\n\${venue.directionsUrl}\\n\\n\`;
    }

    if (venue.howToReach && venue.howToReach.length > 0) {
      text += \`*TRAVEL OPTIONS & DIRECTIONS:*\\n\\n\`;
      venue.howToReach.forEach((item) => {
        text += \`*\${item.mode.toUpperCase()}*\\n\`;
        if (item.subtitle) {
          text += \`*\${item.subtitle}*\\n\\n\`;
        } else {
          text += \`\\n\`;
        }
        
        if (item.routes && item.routes.length > 0) {
          item.routes.forEach((route) => {
            text += \`*\${route.name}* · \${route.distance}\\n\`;
            if (route.details && route.details.length > 0) {
              route.details.forEach((d) => {
                const prefix = d.label ? \`\${d.label} \` : "";
                text += \`\${prefix}\${d.text}\\n\`;
              });
            }
            text += \`\\n\`;
          });
        }
      });
    }
  }

  return text.trim();
}
`;

fs.writeFileSync('/Users/kyratna/theweddinginvite_workspace/Mahek-Yash/src/utils/generateVenuePdf.js', template + "\n\n" + fs.readFileSync('/Users/kyratna/theweddinginvite_workspace/Mahek-Yash/src/utils/generateVenuePdf.js', 'utf8').split('export async function createVenuePdfDocument')[1]);
fs.writeFileSync('/Users/kyratna/theweddinginvite_workspace/Yash-Mahek/src/utils/generateVenuePdf.js', template + "\n\n" + fs.readFileSync('/Users/kyratna/theweddinginvite_workspace/Yash-Mahek/src/utils/generateVenuePdf.js', 'utf8').split('export async function createVenuePdfDocument')[1]);
