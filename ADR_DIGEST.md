# ADR Digest

Selected suite-level decisions from MindServe, rewritten for public review and
kept away from cloneable implementation detail.

## Suite Foundation

**Decision:** Build MindServe as a connected suite with a shared operational
foundation and separate operator-facing surfaces.

**Why it matters:** The suite can present focused workflows without fragmenting
the underlying business truth.

## Facility-Scoped Multi-Tenancy

**Decision:** Treat facility context as the root operational boundary.

**Why it matters:** Hospital and cafeteria operations require strict separation
between facilities. The product design starts from that separation instead of
adding it later.

## Unified Deployment Philosophy

**Decision:** Keep deployment paths simple and cloud-native: managed backend,
static frontend surfaces, automated deploys.

**Why it matters:** Small teams and AI-assisted development benefit from a
deployment model that is boring, repeatable, and easy to hand off.

## Architectural Hardening Target

**Decision:** Move toward stronger layer boundaries, validation coverage,
security posture, and CI enforcement over time.

**Why it matters:** The suite is meant to become a foundation for future
vertical products. Foundations need hardening, not just features.

## Intelligence-Layer Direction

**Decision:** Treat structured data and capability surfaces as future inputs to
intelligence-composed workflows.

**Why it matters:** The long-term product shape is not more dashboards for every
possible question. It is a correct operational foundation that can support
intelligence-composed artifacts.

## Role-Specific Interfaces

**Decision:** Different operator jobs deserve different interface grammars.

**Why it matters:** A cashier, manager, and director do not need the same screen.
They need the same truth presented through different workflows.
