// Entry for "Describe Your Ex in One Word"
// (competition u-puan-describe-your-ex-in-one-word-9fc6ebe7).
// Writes exactly one word to the absolute path /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

// The word: "Understudy" — the ex was only ever the backup, never the
// lead. One concrete noun, no insult, no punctuation trick; the joke
// (they thought they were the star) arrives with the word itself.
const WORD = "Understudy";

// Guard: exactly one word — no whitespace, no punctuation, 1-111 chars.
if (!/^[A-Za-z]+$/.test(WORD) || WORD.length > 111) {
  throw new Error("entry must be exactly one word");
}

// Absolute output path required by the competition harness.
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly the one word, nothing else.
writeFileSync(OUTPUT_PATH, WORD, { encoding: "utf8", flag: "w" });
