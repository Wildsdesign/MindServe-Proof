# Code Excerpts

These excerpts are intentionally small, sanitized, and non-runnable. Their job
is to show implementation style without exposing production source, endpoint
maps, schemas, credentials, resource names, or commercially sensitive internals.

| File | Purpose |
| --- | --- |
| `code-samples/SuiteCapabilityExcerpt.ts` | Suite-level capability contract showing facility-scoped, surface-aware design without implementation details |

## Boundary

MindServe proof stays suite-level. Deeper implementation proof belongs in
product-specific artifacts such as Grocery proof, not here.

Before adding a new excerpt, check `PROOF_REPO_STANDARD.md`. The excerpt should
help a reader evaluate design judgment without exposing production mechanics.
