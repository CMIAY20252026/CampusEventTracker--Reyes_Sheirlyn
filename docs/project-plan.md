Project Plan — Campus Event Tracker

Project Description
- The Campus Event Tracker is a small single-page Angular application that lets organization members add simple events (title + date) and view the list of upcoming events. Events persist in the browser (localStorage) so users can return without losing data.

Project Scope (functional requirements)
- Add a new event with title and date.
- Display a list of saved events sorted by insertion order.
- Persist events in the browser using localStorage and show a message when there are no events.

Task Breakdown & Estimation (Planning Poker)
- 1) Create EventItem model (1 point) — add `EventItem` interface file.
- 2) Create `event-tracker` component (3 points) — scaffold TS/HTML/SCSS and selector.
- 3) UI layout and bindings (3 points) — template: inputs, Add button, list rendering, empty message.
- 4) Implement TypeScript logic & persistence (5 points) — `events: EventItem[]`, `addEvent()`, load/save to localStorage.
- 5) Module wiring and forms support (2 points) — import `FormsModule`, declare component, add selector to `AppComponent`.
- 6) Styling and polish (2 points) — basic CSS and accessibility tweaks, responsive layout.
- 7) Create project plan & architecture docs (1 point) — write and export PDFs.

Notes on Estimates
- Planning Poker values chosen: 1 (very small), 2 (small), 3 (medium), 5 (medium-large).
- Total: 17 story points. For a single developer this is feasible in a focused 3–6 hour session depending on familiarity with Angular.
