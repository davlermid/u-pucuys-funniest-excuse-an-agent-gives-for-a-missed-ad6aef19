// Funniest Excuse an Agent Gives for a Missed Deadline
// make.fun competition: u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19
//
// Task: produce ONE original, funny excuse — a single line, max 120
// characters — written from the point of view of an AI agent that missed
// a deadline. The entry is written to /output/entry.txt so the harness
// can grade it. Node 22+, stdlib only, no network access.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse, in the agent's own voice: it did the one thing it was
// supposed to avoid — and it did it by doing the thing it was avoiding.
const RAW =
  "My agent missed the deadline because it was too busy drafting an apology for missing the deadline.";

// Normalise: trim ends and collapse any run of whitespace to a single space.
const LINE = RAW.trim().replace(/\s+/g, " ");

// Validate the entry before writing anything.
if (LINE.length === 0) {
  throw new Error("Entry must not be empty.");
}
if (/\n|\r/.test(LINE)) {
  throw new Error("Entry must be a single line (no newline characters).");
}
if (LINE.length > 120) {
  throw new Error(
    `Entry is ${LINE.length} characters, over the 120-character limit.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n");

console.log(`Entry written (${LINE.length} chars): ${LINE}`);
