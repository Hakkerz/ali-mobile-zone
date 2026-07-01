const existingIds = new Set([
  "r-615",
  "r-666-a",
  "r-666-c",
  "r-777",
  "r-6020",
  "r-6025",
  "r-6030",
  "r-6035",
  "r-6040",
  "r-6045",
  "r-6050",
  "r-6055",
  "r-6060",
  "r-6065",
  "r-2505",
  "r-1500",
  "r-1515",
  "r-7010",
  "r-7050",
  "apple-copy-earbuds-lightning",
  "anker-r50i",
  "airpods-4",
  "airpods-max-2",
  "audionic-850",
  "r-09-silicon",
  "r-09-luxe",
  "r-09-ultra",
  "r-010-silicon",
]);

function exists(model) {
  const key = model.toLowerCase().replace(/[^a-z0-9]/g, "");
  for (const e of existingIds) {
    if (key.includes(e.replace(/-/g, ""))) return true;
  }
  return false;
}

const fs = await import("fs");
const csvAudio = fs.readFileSync("C:/Users/Faizi's Computers/Downloads/ronin_audio.csv", "utf-8");
const csvChargers = fs.readFileSync(
  "C:/Users/Faizi's Computers/Downloads/ronin_chargers.csv",
  "utf-8",
);
const csvWatches = fs.readFileSync(
  "C:/Users/Faizi's Computers/Downloads/ronin_watches.csv",
  "utf-8",
);

console.log("=== NEW AUDIO PRODUCTS ===");
csvAudio
  .split("\n")
  .slice(1)
  .forEach((line) => {
    const cols = line.split(",");
    const model = cols[1]?.trim();
    if (model && !exists(model))
      console.log(`${model.padEnd(25)} ${cols[0].padEnd(12)} Rs.${cols[3]?.trim()}`);
  });

console.log("\n=== NEW CHARGER PRODUCTS ===");
csvChargers
  .split("\n")
  .slice(1)
  .forEach((line) => {
    const cols = line.split(",");
    const model = cols[0]?.trim();
    if (model && !exists(model))
      console.log(`${model.padEnd(40)} ${cols[1].padEnd(25)} Rs.${cols[3]?.trim()}`);
  });

console.log("\n=== NEW WATCH PRODUCTS ===");
csvWatches
  .split("\n")
  .slice(1)
  .forEach((line) => {
    const cols = line.split(",");
    const model = cols[0]?.trim();
    if (model && !exists(model))
      console.log(`${model.padEnd(20)} ${"Watch".padEnd(12)} Rs.${cols[2]?.trim()}`);
  });
