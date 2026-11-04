# Design decisions in context

Two fictional interaction studies demonstrate how reusable rules respond to different user jobs. Both use illustrative data; neither measures a commercial outcome.

| Context | User job | Design response |
| --- | --- | --- |
| Messaging workspace | Connect a channel, then begin a conversation | Distinguish setup, connected-but-empty and failed states; show the next useful action |
| Offer builder | Choose a service configuration and understand the commitment | Separate included and optional items; reflect selection in a persistent summary |

## Messaging workspace

First use, configuration, active work and a return visit need different information. An unconnected channel explains the connection step; a connected channel with no messages explains what happens next. A failed connection needs a recovery action.

The [complete handbook](../../library/handbook/pages/README.md) preserves source-based examples, implementation links and explicit adoption boundaries. The website's short interaction study illustrates the principle locally.

## Offer builder

Setup, recurring service and optional capabilities answer different questions. The generic example lets someone select an optional item and see the selection reflected in a summary. It does not submit a quote or claim commercial pricing.

## From rule to review

User task → Design decision → Token and component contract → Interactive example → Implementation review.

Detailed source-based cases remain in the handbook's Case Study Library. Its provenance identifies actual source products where needed; the current site's identity is Product Design System.
