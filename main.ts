import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One-line excuse in the agent's own voice: context-window premise, punchline last.
const ENTRY = 'My context window is 200,000 tokens. The deadline was token 200,001.';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? 'out';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY);
