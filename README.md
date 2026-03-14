# Angular Components & Data Binding

A small Angular app demonstrating **component communication** through custom events (`@Output`) and property binding (`@Input`). A timer emits incrementing numbers, which are sorted into odd and even lists displayed by child components.

## How It Works

1. **GameControlComponent** — Start/Stop buttons control a `setInterval` timer that emits an incrementing counter every second.
2. **AppComponent** — Listens to the `intervalFired` event and routes each number to the correct array (odd or even).
3. **OddComponent / EvenComponent** — Receive a number via `@Input` and display it with color-coded text (blue for odd, green for even).

```
AppComponent
├── GameControlComponent   @Output() intervalFired → emits numbers
├── OddComponent[]         @Input('odd') number    ← receives odd numbers
└── EvenComponent[]        @Input('even') number   ← receives even numbers
```

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| 🅰️ Angular | 8.2 | Component framework |
| 📘 TypeScript | 3.5 | Type-safe JavaScript |
| 🎨 Bootstrap | 3.4 | UI styling |
| 🧪 Karma + Jasmine | — | Unit testing |
| 🔬 Protractor | 5.4 | E2E testing |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4200)
ng serve

# Run unit tests
ng test

# Production build
ng build --prod
```

## Key Concepts Demonstrated

- `@Input()` — parent-to-child data binding with alias (`@Input('odd')`)
- `@Output()` + `EventEmitter` — child-to-parent event communication
- `*ngFor` with `trackBy` — efficient rendering of dynamic lists
- `OnDestroy` lifecycle hook — cleaning up `setInterval` to prevent memory leaks
- Guard pattern — preventing multiple overlapping timers on repeated Start clicks

## ⚠️ Known Issues

- Built on **Angular 8** which is end-of-life. A migration to Angular 16+ (standalone components, signals) would be the natural next step.
- The `docs/` folder contains a stale pre-built deployment from the original Angular CLI scaffold.
- Bootstrap 3 is also EOL; upgrading to Bootstrap 5 would drop the jQuery dependency.

## License

This project is available as open source.
