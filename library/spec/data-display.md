# DataTable and list-detail contract

## Anatomy

1. PageHeader: one meaningful title, scoped count if known, one primary creation action.
2. View/filter area: saved scopes, query, relevant filters, visible active-filter count and clear.
3. Toolbar: secondary commands (import, export, columns, density), with named controls.
4. Data: selection → identity column → key fields → state/time → row overflow.
5. Footer: pagination or load-more, loaded/total wording, selected count and scope.

**Table-title icon is mandatory.** Every data table's visible title pairs a semantically correct module/object icon with its text label. The icon is decorative (`aria-hidden`); the text remains the accessible heading. Use the same identity as its page/navigation context, not an arbitrary chart glyph. A table with no on-screen title needs an explicitly reviewed reason; column headers do not substitute for the table title.

Prefer evolving `frontend-dashboard/ListLayout` and the independent repo's `PaginatedDataGrid` with adapters. Do not introduce a third table engine while writing the rules.

## Cell rules

| Data | Treatment |
|---|---|
| Identity | Primary label + optional secondary context; open with a link/button, not an unnamed clickable div |
| Number/currency | Right-align, locale format, tabular numerals; units clear |
| Full date/time | `Intl.DateTimeFormat` in account/user timezone; preserve full value, wrap or grow the column |
| Relative time | May supplement absolute time; accessible full time available without hover-only dependency |
| Status | Domain-specific label + shape/icon + semantic color; color alone is insufficient |
| Tags | Bounded list + named `+N` disclosure; adding tags stays available even when tags already exist |
| Missing | `—` plus accessible “Not provided” if meaningful; do not confuse with 0, loading, or unknown |
| Long text | Sensible width / wrapping / accessible detail; never clip critical dates or statuses silently |

## Sorting, selection, filters and export are data contracts

- Sorting is either server-wide or explicitly “Loaded items only”. A client-sort of one page must not masquerade as sorting every record.
- Filter/sort/pagination changes have defined URL/reset behavior. Preserve filters in Back navigation and after detail editing.
- Page select-all selects visible loaded rows. “Select all matching N results” is a separate explicit operation supported by the backend.
- A dense table may reveal selection and row overflow on header/row hover, but must also reveal them on focus-within, remain reachable without hover on touch and show selected controls persistently while bulk selection is active. Preserve a usable pointer/touch target when the drawn checkbox becomes smaller.
- Status filter icon, label and semantic color must match the corresponding row status. Test the actual filtered result after selection; a matching label alone is not proof of filtering.
- For campaign results, compare mutually exclusive success/failure/pending counts against one visible denominator before drawing any stacked bar. Never use color-only differentiation, percentages from another scope, or a visual segment that cannot be reconciled with the displayed numbers. A labelled count group is preferable when the bar obscures comparison.
- Export says whether it exports selected rows, filtered results or all records. Do not infer server capability from a button.
- Read-only, missing permission, pending operation and empty results are separate states.
- Bulk destructive action names the affected count and result; confirmation does not broaden selection.

## Hover and mobile

- Row overflow may become prominent on hover **and focus-within**; touch gets an always-reachable control. Assignment/tag shortcuts cannot be hover-only.
- Mobile either uses priority-field cards or a deliberate horizontally scrollable table region with clear context. Do not hide document overflow to conceal a broken layout.
- Keep identity, main status and primary action visible. Secondary commands belong in a labelled overflow.
- A row's data click and inner actions cannot accidentally trigger each other.

## States to demonstrate before adoption

Loading/skeleton; first-use empty with setup action; filtered empty with clear filters; retryable error preserving query; no permission with explanation; loaded zero; long names; RTL if supported; multi-line cells; 1,000+ rows; missing totals; timezone boundary; partial selection.

Studio rows are explicitly fictional and locally sorted. They demonstrate appearance and interaction, **not** a backend export/sort implementation.
