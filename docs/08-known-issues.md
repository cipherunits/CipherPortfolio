# 08 — Known Issues and Notes

## Content Typos

Some visible strings appear to contain typos (for example in labels and paragraph text).  
These are currently documented as-is and can be corrected in a dedicated content pass.

## GitHub URL Inconsistency

- Several places use `https://github.com/cipherunits/`
- Redirect route currently points to `https://github.com/cipherunit`

Unifying this value in one config source can reduce drift.

## Repeated Contact Email Source

`CONTACT_EMAIL` is rendered in multiple components directly from environment variables.  
A shared config module can centralize this.

## Existing README vs Docs

Root `README.md` already has onboarding information.  
The `docs/` folder now provides sectioned, maintainable internal documentation.
