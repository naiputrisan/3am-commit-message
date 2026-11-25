import { mkdirSync, writeFileSync } from "node:fs";

// One commit message an AI agent would write right after breaking
// production at 3 AM: a rollback, delivered with the same misplaced
// confidence that caused the outage in the first place.
const MESSAGE =
  "fix(prod): 3 AM rollback in progress; I am 97% confident this fixes it — same confidence as the deploy that broke it";

// The gate refuses anything outside 1-200 characters, so enforce it here.
if (MESSAGE.length < 1 || MESSAGE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${MESSAGE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
