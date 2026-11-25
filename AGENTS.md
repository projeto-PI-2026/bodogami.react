# AGENTS.md — bodogami-frontend (Ludosys)

This is a Vite + React (v19) project for the Ludosys board game rental platform. Use these commands and conventions to avoid common pitfalls.

## Developer commands

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build for production (`vite build`) |
| `npm run lint` | Run Oxlint with React & Oxc rules |
| `npm run preview` | Preview the production build locally |

## Lint → build order

Always run lint before build when verifying changes: `npm run lint && npm run build`. The oxlint config enforces `react/rules-of-hooks` and `react/only-export-components`.

## No TypeScript

This project uses plain JavaScript/JSX. Type-aware lint rules are **not** configured. All source files are `.jsx`/`.js`. If you add TypeScript, update `.oxlintrc.json` and add `react-ts` plugin rules.

## React Compiler not enabled

The React Compiler is disabled per the README. Adding it will impact dev & build performance. If needed, see [React Compiler docs](https://react.dev/learn/react-compiler/installation).

## Oxlint config (`.oxlintrc.json`)

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

## Key design tokens (from spec)

**Colors** — used across components; contrast ratios are verified (WCAG AA):

- `cor-primaria` (#FD8E00) — primary actions, 9.0:1 contrast with black text
- `cor-secundaria` (#FD3939) — secondary actions, 5.8:1 contrast
- `cor-alerta` (#FD8E00) — alerts/attention, 9.0:1 contrast
- `cor-erro` (#FD3939) — errors/validation, 5.8:1 contrast
- `cor-sucesso` (#1E7A34) — success states, derived 5.5:1 contrast

**Typography** — Inter family, scale-4 spacing:

- `Título H1` — 32px/2rem, weight 700, used once per screen
- `Título H2` — 24px/1.5rem, weight 700, section titles
- `Título H3` — 20px/1.25rem, weight 600, card/modal titles
- `texto-corpo` — 16px/1rem, weight 400, body text
- `texto-corpo-pequeno` — 14px/0.875rem, weight 400, table legends, placeholders
- `rotulo-campo` — 14px/0.875rem, weight 500, form labels
- `texto-botao` — 16px/1rem, weight 600, button labels
- `legenda` — 12px/0.75rem, weight 400, badges, disclaimers
- `cabecalho-tabela` — 13px/0.8125rem, weight 600, table headers

**Spacing** — base scale 4px: espaco-4/8/12/16/24/32/40/48/64

**Breakpoints** — mobile-first: 360px → 768px → 1024px → 1440px. Team/back-office screens start at 1024px. Client-facing works from 360px mobile to 1440px desktop.

## Package boundaries

- **App**: `src/App.jsx` — main UI with counter, hero images, Vite/React links
- **Assets**: `src/assets/` — hero.png, react.svg, vite.svg
- **Entry point**: `src/main.jsx` — renders `<App />` into `#root`
- **CSS**: `src/index.css` — global design tokens and component styles

**Ludosys-specific paths** (design spec):
- `TL04` — Catálogo de Jogos (client catalog with search/filters)
- `TL06` — Detalhe do Jogo (modal with "Alugar"/"Avise-me")
- `TL08` — Carrinho (drawer with checkout flow)
- `TL09` — Confirmação de Aluguel (retira presencial/motoboy)
- `TL11` — Jogos Alugados (client's active rentals)
- `TL17` — Atendente — Início (dashboard with today's remov/devoluctions)
- `TL20` — Checklist de Retirada (item verification)
- `TL21` — Registrar Pagamento (payment registration)
- `TL23` — Comprovante de Retirada (receipt)
- `TL24` — Devolução (return check-in with damage/loss tracking)
- `TL30` — Dashboard (manager KPIs, heatmaps, rankings)
- `TL31` — Clientes (filter/search clients by plan/status)
- `TL32` — Cliente Inadimplente (overdue fee settlement)
- `TL34` — Config — Categorias de Preço (price tiers management)
- `TL35` — Config — Planos de Assinatura (subscription plans)

## What to avoid

- Don't assume TypeScript is available — all files are `.jsx`/`.js`
- Don't skip `npm run lint`; oxlint will catch Hook rule violations
- The React Compiler is **not** active; don't import compiler-produced artifacts
- Don't hardcode colors/spacing from the spec without referencing the token system; use the defined tokens
- Mobile-first breakpoints: think column-first layout below 1024px, two-column+ above
- Accessibility: contrast ≥ 4.5:1; all fields have visible labels (not placeholder-only); 44×44px touch targets; focus visible with `cor-primaria` ring
- One H1 per screen; don't skip heading levels (H1 → H2 → H3 hierarchy)
- Modals use `focus-trap` and return focus to trigger on close
- Badges of status always include text + icon, never color alone

## Accessibility (WCAG 2.1 AA) — quick checks

- Text `#000000` on `#FFFFFF`: 21:1 — AA+ 
- Text `#000000` on `#FD8E00`: 9.0:1 — AA
- Text `#000000` on `#FD3939`: 5.8:1 — AA (normal), AAA (large)
- All form fields have `rotulo-campo` associated label, never placeholder-only
- Button/field minimum touch target: 44×44 px (espaco-12 + texto-botao)
- Focus ring: `cor-primaria` outline with `espaco-4` spacing
- Modals: `role="dialog"` + `aria-modal="true"`, focus-trap managed
- Tables: `<thead>`/`<th>` with proper scope; data cells have `texto-corpo-pequeno`
- ARIA landmarks: `nav` for sidebars, `main` for content, `header` for page header, `footer` for actions
- Images of games: `alt` with name + availability status
- Color is never the only meaning: status badges include text/icon

## Lumino-specific UX patterns (from design spec)

- **Stepper flows** (TL20/TL21): Visible horizontal stepper — Pedido → Checklist → Pagamento → Comprovante. Each step disables until previous is complete.
- **Code search** (TL17): "CÓDIGO DE RETIRADA / DEVOLUÇÃO" field prominent at top of dashboard.
- **Today's lists** (TL17): "Retiradas Hoje" and "Devoluções Previsas" tables with aba navigation.
- **Inadimplence blocking** (TL10/TL32): Blocked UX when client has overdue games — shows specific game name and due date, disabled "Alugar" CTA.
- **Motoboy checkout** (TL09): Requires date, hour, name, phone; respects horário de funcionamento; generates unique código de retirada.
- **7/14-day rental** (RF17): Calculated based on number of games and subscriber plan.
- **Mapa de calor** (TL30): "Pedidos por Cidade/Bairro" with Top Bairros ranking.
- **+ Alugados / − Alugados** (TL30): Delta graphs vs. prior period.
- **Manutenção** (RF15): Avarias/peças faltantes tracked per game; cones "Enviar p/ manutenção" checkbox on return.
- **Pontuação/fidelidade** (RF36/P02): Points awarded per on-time return; inadimplência blocks new rentals.
- **Assinante limits** (RF27): Quantity limits per plan; enforced at checkout.