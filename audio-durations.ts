import fs from "fs";
import path from "path";
import { parseFile } from "music-metadata";

const fps = 30;

const audioSources = [
  "/sounds/effects/intro.mp3",
  "/sounds/voices/voice1_en.mp3",
  "/sounds/countdown.mp3",
  "/sounds/voices/voice1_so.mp3",
  "/sounds/voices/voice2_en.mp3",
  "/sounds/voices/voice2_so.mp3",
  "/sounds/voices/voice3_en.mp3",
  "/sounds/voices/voice3_so.mp3",
  "/sounds/effects/pause1.mp3",
  "/sounds/voices/voice4_en.mp3",
  "/sounds/voices/voice4_so.mp3",
  "/sounds/voices/voice5_en.mp3",
  "/sounds/voices/voice5_so.mp3",
  "/sounds/voices/voice6_en.mp3",
  "/sounds/voices/voice6_so.mp3",
  "/sounds/effects/pause2.mp3",
  "/sounds/voices/voice7_en.mp3",
  "/sounds/voices/voice7_so.mp3",
  "/sounds/voices/voice8_en.mp3",
  "/sounds/voices/voice8_so.mp3",
  "/sounds/voices/voice9_en.mp3",
  "/sounds/voices/voice9_so.mp3",
  "/sounds/voices/voice10_en.mp3",
  "/sounds/voices/voice10_so.mp3",
  "/sounds/effects/end.mp3"
];

const basePath = path.resolve(__dirname, "../../public");

async function main() {
  const durations: Record<string, number> = {};

  for (const relativePath of audioSources) {
    const key = path.basename(relativePath).replace(".mp3", "");
    const fullPath = path.join(basePath, relativePath);

    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️ File not found: ${fullPath}, skipping.`);
      continue;
    }

    try {
      const metadata = await parseFile(fullPath);
      const durationSec = metadata.format.duration;

      if (!durationSec) {
        console.warn(`⚠️ Could not read duration of ${fullPath}, skipping.`);
        continue;
      }

      const frameCount = Math.round(durationSec * fps);
      durations[key] = frameCount;

      console.log(`${key}: ${frameCount} frames`);
    } catch (err) {
      console.error(`❌ Error reading ${fullPath}:`, err);
    }
  }

  const content = `export const durations = ${JSON.stringify(durations, null, 2)};\n`;
  fs.writeFileSync(path.resolve(__dirname, "durations.ts"), content);

  console.log("✅ durations.ts generated with frame-based durations only.");
}

main();
