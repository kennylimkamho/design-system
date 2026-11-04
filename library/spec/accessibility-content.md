# Accessibility, localization and content

For the normative content-placement rule—five moments, three disclosure layers and editorial budgets—see [Content timing · 資訊跟時刻走](content-timing.md). This document covers language and accessibility details, not a competing content hierarchy.

## Acceptance baseline

- Visible keyboard focus on every control, including table cells/actions. Never globally remove outlines.
- Named navigation landmarks, real links for destinations, real buttons for commands, labels associated with inputs.
- Icons are decorative when adjacent text names the control; icon-only controls have an explicit accessible action name.
- Tabs/panels have working ID relationships; current navigation and selected data filters use appropriate state semantics.
- Aim for 4.5:1 normal text, 3:1 large text and required non-text control contrast. Test actual token pairs, not only palette swatches; disabled and decorative exceptions do not justify unreadable helper text.
- Product touch target is 44×44px. WCAG 2.2 AA target minimum is 24×24px with exceptions; do not falsely label every sub-44px desktop target a violation.
- Respect reduced motion, zoom, text resizing, keyboard and touch. No hover-exclusive necessary action.
- Dialog native focus behavior, screen-reader announcements and touch scrolling require real-browser/manual QA; static validation cannot certify these.

References: [WCAG target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), [WAI tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

## Language

- Complete the selected locale; never surface a translation key. If a key is missing, use a deliberate understandable fallback and log it for repair.
- Separate `zh-Hant`, `zh-Hans` and English. Conversion is a draft aid, not editorial approval; Simplified/Traditional vocabulary and terminology require review.
- Build a shared glossary: 联系人/聯絡人, 指派, 標籤, 訊息流程, 廣播, channels, and status terms. Product nouns may remain English only by an explicit glossary rule.
- Use sentence case in English controls, short direct task language, no shame-based decline labels.
- Localize dates/numbers/currency using actual locale and account timezone. Do not hardcode “Sept”, currency separators or ambiguous day/month values.
- Empty/error/permission states describe a cause and recovery; “No items Exist” is not a universal empty message.

## Evidence limits

The historical audit is a local dirty-development snapshot, not a certification of main or production. Screenshots show visual defects; backend behavior and permissions need separate checks. The draft does not solve those defects merely by documenting them.
