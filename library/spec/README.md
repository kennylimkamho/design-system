# ChatDaddy next design system · 0.2.0-draft.2

## What is fixed by the request

- The system lives in an independent ChatDaddy GitHub repository.
- Build a distinct ChatDaddy interaction and visual-hierarchy system with its own brand colors.
- Preserve ChatDaddy blue `#0F5BFF`, green `#07CB6E`, real brand marks and existing business behavior.
- Create a coherent new icon direction.
- Establish primary navigation, contextual secondary navigation, then tabs only when semantically appropriate.
- Make rules versionable and usable for incremental work, backed by audit evidence.
- Make rich micro animations part of the interaction language, with accessible static alternatives.

## What remains a proposal

The user has explicitly selected D-01/02/03 for this PR. The [decision register](decisions.json) records that selection, not a package release or engineering approval. Draft tokens, icon artwork, densities and shape choices are not silently wired into existing packages. Motion richness is now an explicit request; see [motion](motion.md).

## Principles

1. **The task before the decoration.** A customer-service inbox is not a pricing page.
2. **One meaning, one pattern.** Navigation, a display mode, a data filter and an action are different things.
3. **Progressive disclosure, not hidden essentials.** Hover may reveal secondary actions; keyboard and touch must have equivalent access.
4. **Preserve context.** Keep selection, URL, scroll position, filters and unsaved-change safeguards through transitions.
5. **Trustworthy feedback.** Show real state and earned progress; never fake success, urgency or completion.
6. **One change at a time.** Tokens → primitive → pattern → page family. Keep application/API logic outside the design layer.

## Page families

The [content timing layer](content-timing.md) sits on top of any chosen family: decide what the user needs to know before commitment, during action, on failure, at risky use and when voluntarily seeking reference. Keep verified costs and consequences visible before commitment.

| Family | Default approach | Valid differences |
|---|---|---|
| Data management | PageHeader + toolbar + DataTable + detail pane | Contacts, Channels, Broadcasts share rules, not identical columns |
| Workspaces | List-detail with persistent context | Inbox/Calls can be compact; composer stays reachable |
| Editors | Canvas/editor + contextual inspectors | Automation must preserve workspace width and unsaved state |
| Settings | Section navigation + grouped fields | Billing long-page anchors are not tabs |
| Analytics | Summary → comparison → drill-down | Date ranges are filters, not functional navigation |
| Login/exploration | Task-first form + optional storytelling | Brand imagery may differ; mobile login must not be displaced |

For feature pages, use the [page-by-page workspace decision contract](feature-workspaces.md) before selecting a table, first-use surface, setup form, or editor.

## Delivery scope

This proposal supplies specifications, machine-readable candidate tokens, actual SVG assets, an interactive offline studio, governance and historical evidence. It is **not** a fully migrated React component library, a production accessibility certification, or an audit of every backend state.
