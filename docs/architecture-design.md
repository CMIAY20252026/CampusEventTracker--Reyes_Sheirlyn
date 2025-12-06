Architecture Design — Campus Event Tracker

Chosen Architecture Style
- Component-Based Architecture

Explanation
- The application uses Angular's component-based architecture: the UI and logic are split into small, reusable components. Each component encapsulates its template, styles, and behavior; data flows via component state and bindings. The `event-tracker` component manages event data, input bindings, and display.

Justification
- For a small, single-page app this style keeps code modular and easy to maintain: components map directly to UI parts, require minimal boilerplate, and allow quick testing and reuse. It also leverages Angular's forms and dependency injection if the app grows.
