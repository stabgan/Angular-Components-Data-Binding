# 🎮 Angular Odd/Even Counter Game

An interactive number counter game built with **Angular 8** that demonstrates core data binding concepts — property binding, event binding, and component communication using `@Input()` and `@Output()` decorators.

Press **Start** to kick off a timer that increments a counter every second. Each number is classified as odd or even and rendered in its own styled component. Press **Stop** to pause at any time.

---

## 🧩 Project Structure

```
src/app/
├── app.component.*          # Root — routes numbers to odd/even lists
├── game-control/            # Start/Stop buttons, emits counter via @Output()
├── odd/                     # Displays odd numbers (blue text)
└── even/                    # Displays even numbers (green text)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| ⚡ Framework | Angular 8.2 |
| 🟦 Language | TypeScript 3.5 |
| 🎨 Styling | Bootstrap 3.4 + component-scoped CSS |
| 📦 Package Manager | npm |
| 🧪 Unit Tests | Karma + Jasmine |
| 🔬 E2E Tests | Protractor |
| 🔧 CLI | Angular CLI 8.3 |

---

## 📦 Key Dependencies

| Package | Version |
|---------|---------|
| `@angular/core` | ~8.2.14 |
| `@angular/cli` | ~8.3.21 |
| `bootstrap` | ^3.4.1 |
| `rxjs` | ~6.4.0 |
| `typescript` | ~3.5.3 |
| `zone.js` | ~0.9.1 |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/stabgan/Angular-Components-Data-Binding.git
cd Angular-Components-Data-Binding

# Install dependencies
npm install

# Start the dev server
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

### Other Commands

```bash
ng build              # Build for development
ng build --prod       # Production build (output → dist/assign3)
ng test               # Run unit tests via Karma
ng e2e                # Run end-to-end tests via Protractor
ng lint               # Lint the project with TSLint
```

---

## 🐛 Known Issues

- Clicking **Start** multiple times without stopping first spawns duplicate intervals, causing the counter to increment faster than intended. A guard or `clearInterval` before `setInterval` would fix this.
- The `interval` property in `GameControlComponent` is untyped (`any` implicit) — should be typed as `ReturnType<typeof setInterval>` or `number`.
- Angular 8 is end-of-life. Several Dependabot PRs are open for vulnerable transitive dependencies (lodash, handlebars, elliptic, etc.).
- No `trackBy` function on the `*ngFor` directives — may cause unnecessary re-renders as the lists grow.
- The page title is the default "Assign3" from the CLI scaffold.

---

## 📄 License

No license specified.
