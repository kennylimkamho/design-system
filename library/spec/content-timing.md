# Content timing · 資訊跟時刻走

**Status:** ChatDaddy design-system content-layer draft, 2026-09-30. This is an authoring and review rule, not a claim that the App, backend, prices, platform policy or all P1–P4 page patterns have been migrated. The supplied “Setup and monitor patterns” HTML is structural reference material; its unrelated brands, fonts, colors and product assertions are not imported.

## Core rule

First choose the user's task and page structure. Then decide **what information the user needs at this moment**. A content block without a moment, decision, next action, or legal/operational reason does not earn permanent screen space. Brevity must never hide decision-critical facts.

| Moment | User's question | Placement | ChatDaddy example |
| --- | --- | --- | --- |
| **決定 · Decide** | 我應唔應該做？ | Before commitment, directly visible | Verified price, permission, risk, irreversible consequence of a channel connection |
| **行動 · Act** | 我而家做咩？ | Beside the relevant control | QR instructions adjacent to the QR; a precise action label |
| **補救 · Recover** | 點解唔得？點返去？ | When a failure actually occurs, in context | Expired QR → regenerate and retry without losing progress |
| **使用 · Use safely** | 點樣用得好、用得安全？ | Where the risky or meaningful use happens | Recipient/scope check before a Broadcast is sent |
| **參考 · Reference** | 我想深入了解 | Voluntary Help center / Learn more | Full policy, technical constraints, provider documentation |

Do not classify a known fee or irreversible consequence as “reference” merely to keep the page tidy. A known risk belongs at Decide or Use, even if no error has happened. Reserve Recover for contingent failures; do not front-load every possible timeout into the happy path.

## Seven authoring principles

1. **一個畫面，一個任務。** Give each task surface one clear primary action. Supporting information serves that action. Secondary controls can remain, but should not compete. Deletion test: if removing a sentence would not change a decision or make the task fail, remove or move it.
2. **知情權與有用資料分開。** Verified costs, risks, irreversibility, legal responsibility and material permission effects stay directly visible before commitment. Optional optimization tips and deeper explanation can be disclosed later. Never replace a required disclosure with a Help link.
3. **三層披露。** Layer 0 is visible: decision-critical facts and the current action. Layer 1 is an explicit expansion or Learn more for useful supporting details. Layer 2 is Help center for full policy and technical reference. The layer does not override legal/accessibility obligations.
4. **護欄勝過教育。** Put a guardrail at the risky action, such as Broadcast review, instead of relying on setup-time onboarding that the user may forget. Explain the consequence and provide a safe next step; do not simply block without reason.
5. **例外在發生時出現。** Timeout, failure and edge-case recovery appear when relevant. This does not suppress predictable, material risk before a decision. Error copy says what happened and how to recover while preserving input/context.
6. **同一件事講一次，用一把聲。** Choose one owner for each message: page, control, status or overlay. Do not repeat the same promise in a title, subtitle, tooltip and dialog. Use the same terms in Traditional Chinese and English; provider terminology remains accurate.
7. **能示範就唔好描述。** A truthful preview, annotated illustration or local example can replace a long procedural paragraph. Media must have a concise text alternative, must not pretend to be live account data, and must not be the only place where a material consequence appears.

## Content budget · default upper bounds

| Pattern | Default budget | If it does not fit |
| --- | --- | --- |
| Wizard step | One-sentence title, one-sentence explanation, up to three key points, one primary button | Move optional detail to Layer 1/2; do not split into extra steps merely to fit copy |
| Warning box | Up to three one-line points | Put the material consequence first; link detailed policy separately |
| Error | What happened + what to do next, in one or two sentences | Keep technical diagnostics in expandable detail or Help; retain user's work |
| Tooltip / hint | One sentence | Move a required label or decision fact into visible UI |

These are editorial pressure tests, not permission to omit a verified fee, risk, mandated notice, accessibility label or necessary recovery instruction. Count by meaningful sentence in each supported language, not arbitrary character count. Review at narrow width and 200% zoom; do not solve overflow by shrinking text below the type scale.

## Three layers in a QR connection example

Assume the connection flow is classified as a **P1 one-shot setup wizard** in the supplied structural reference. The P1–P4 labels are a crosswalk for design discussion, not a claim that every ChatDaddy feature already uses this taxonomy or that a QR code proves which WhatsApp mobile app variant is connected.

| Step / moment | On-screen content | Keep elsewhere |
| --- | --- | --- |
| Before connection · Decide | Real, verified fee/permission/irreversibility if applicable; what account is being connected; one Continue action | Full platform policy → Help center. If facts cannot be verified, do not publish a final claim or enabled commitment CTA. |
| Scan · Act | Scannable QR supplied by the actual flow; short instructions next to it; refresh/expiry state from service | Pricing essay, Broadcast safety advice, every possible error |
| Expired · Recover | “QR 已過期。重新產生後再掃描。” with a working retry; preserve selected channel/context | The same timeout warning on every normal QR screen |
| After connection · Use | Connection status from service; show the next useful task. At Broadcast review, show recipient/scope guardrail before Send. | Preload the full Broadcast policy into connection onboarding |
| Any time · Reference | Optional approved Help article | Do not make Help the only source of decision-critical facts |

Connection success and the first real conversation are separate milestones. Disconnection is shown when supported by actual health data, not inferred from an icon or animated illustration. A proposed notification must respect product capability and permissions.

## Structural pattern × content moment

The supplied reference uses **P1 Wizard**, **P2 Settings form**, **P3 Automation object** and **P4 Workspace** to answer what sort of surface a task needs. This layer does not replace that structural question; it answers how much the surface says and when. If a product flow does not fit the reference taxonomy, classify the real job first rather than forcing a label.

| Structural pattern | Content timing rule | Example |
| --- | --- | --- |
| P1 · one-shot wizard | Decision facts before commit; procedural copy beside the control; contingent errors only on failure | Connect channel |
| P2 · settings form | Consequences near the changed setting; only contextual help for advanced details; save result only after confirmation | Business hours |
| P3 · automation object | Guardrails at Test/Publish; operational status and recovery when a run fails; full logic in reference | Message flow or bot |
| P4 · workspace | Persistent identity/status for ongoing work; short in-context instructions; secondary actions on hover/focus/touch | Inbox |

## Review template

Frames are functional, not decoration: use them for an actionable component, a meaningful data collection or a necessary warning. Do not box every paragraph, repeat a heading in a visual, or scatter the same specimen/version disclaimer across corners. Document metadata can be consolidated into a disclosure; verified product costs, risks and irreversible consequences must still remain visible at the decision point.

For every non-trivial content block, record: **user task → moment → fact/source → placement/layer → action or consequence → owner**. Mark missing pricing, policy, backend status or permission evidence as unresolved; never fill gaps with invented claims. Then ask:

- If removed, could the user make the wrong decision or fail the current task? If no, remove or demote.
- Is a verified fee, risk, legal duty or irreversible effect directly visible before commitment?
- Is each instruction next to the control it explains, including at narrow width?
- Does the error appear only when true, name recovery, and preserve user input?
- Is a safety guardrail at the action, not only in onboarding?
- Are repeated title/subtitle/banner/tooltip messages consolidated under one owner?
- Is the example truthful, labelled as sample, and accessible in text?
- Are Traditional Chinese and English variants concise, consistent and complete at 200% zoom?

This chapter is documentation and an offline specimen. It does not connect a channel, generate a real QR, send a Broadcast, change App navigation, or introduce backend capability.
