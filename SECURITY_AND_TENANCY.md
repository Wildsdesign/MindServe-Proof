# Security and Tenancy

MindServe's public proof boundary focuses on posture, not implementation.

## Facility Boundary

Facility context is the central isolation concept. Operator identity, surface
access, and data access are designed around the facility the user is allowed to
work in.

## Auth Posture

At a public level, the suite demonstrates:

- operator authentication
- scoped facility context
- token-based session flow
- separate kiosk/session patterns where needed
- role-aware surfaces as the product matures

The private production repo contains the implementation details. They are not
included here.

## Data Posture

This proof repo does not include schema details or endpoint maps. The important
public claim is architectural:

> The shared data foundation is designed so every surface sees the same business
> truth without exposing another facility's data.

## Operational Security

The suite is built with:

- private source control
- cloud-hosted managed services
- environment-based configuration
- no secrets in source
- deployment automation
- docs and runbooks for handoff

## What We Avoid Publishing

- token internals
- route names
- database policy details
- tenant table layouts
- real facility identifiers
- deployment resource names
