# EME Indumentaria — Loki Mode (Especialización Frontend)

Catálogo digital / e-commerce de indumentaria deportiva. Basado en Loki Mode para orquestación autónoma de agentes.

## Quick Start

```bash
# Iniciar Claude Code en el proyecto
claude

# Invocar Loki Mode
# "Loki Mode" para modo autónomo
# O trabajar con skills individuales
```

## Stack Tecnológico

| Componente | Versión | Notas |
|---|---|---|
| **React** | 19 | Componentes funcionales + hooks exclusivamente |
| **Vite** | 7.2 | Bundler — no usar webpack, parcel ni otro |
| **Tailwind CSS** | 4.1 | Utility-first — no CSS modules ni styled-components |
| **React Router** | v7 | Si se requiere enrutamiento |
| **Vitest** | Última | Test runner integrado con Vite |
| **Playwright** | Última | Testing E2E (ver `skills/playwright-skill/`) |

## Estructura del Proyecto

```
EmeIndumentaria/
├── SKILL.md                        # Entry point Loki (ciclo RARV)
├── CLAUDE.md                       # Este archivo — reglas del proyecto
├── autonomy/
│   ├── CONSTITUTION.md             # Contrato comportamental
│   └── hooks/                      # Hooks de Claude Code
├── .claude/settings.json           # Configuración de hooks
├── .loki/
│   ├── CONTINUITY.md               # Memoria volátil de sesión
│   ├── state/                      # Estado del orquestador
│   ├── signals/                    # Comunicación inter-agente
│   ├── ledgers/                    # Registro append-only
│   └── artifacts/                  # Artefactos generados
├── skills/                         # Módulos Loki + skills de dominio
│   ├── 00-index.md                 # Tabla de ruteo de módulos
│   ├── vite-react-config/          # Config Vite 7.x + React 19
│   ├── react-best-practices/       # 45 reglas de Vercel
│   ├── tailwind-design-system/     # Design system con Tailwind
│   ├── tailwind-patterns/          # Patrones de maquetación Tailwind
│   ├── playwright-skill/           # Testing E2E con Playwright
│   └── github-expert/              # GitHub Actions + CI/CD
├── rules/                          # Reglas de dominio del proyecto
│   ├── ui.md                       # Diseño e interfaz
│   └── git.md                      # Convenciones de Git
├── src/                            # Código fuente (por crear)
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   ├── assets/
│   └── context/
└── Imagenes/                       # Assets existentes del catálogo
```

## Ciclo RARV

Cada iteración sigue: **R**eason → **A**ct → **R**eflect → **V**erify

Detalle completo en `SKILL.md`.

## Selección de Modelo

| Tipo de tarea | Modelo | Razón |
|---|---|---|
| Planificación, arquitectura, diseño de sistema | **Opus** | Razonamiento profundo |
| Implementación de features, bugs complejos | **Sonnet** | Carga de desarrollo |
| Tests unitarios, linting, docs, fixes simples | **Haiku** | Rápido, paralelizable |

## Convenciones de Código

- **Componentes**: PascalCase → `ProductCard.jsx`
- **Hooks custom**: camelCase con prefijo `use` → `useCart.js`
- **Utilidades**: camelCase → `formatPrice.js`
- **Archivos**: JSX para componentes con markup, JS para lógica pura
- Un componente por archivo. Export default.
- Props destructuradas en la firma de la función.
- Estado global: Context API + useReducer. Escalar a Zustand solo si se justifica.
- No instalar dependencias sin aprobación del usuario.

## Reglas de UI

Detalle completo en `rules/ui.md`.

- Mobile-first obligatorio con breakpoints `sm`, `md`, `lg`, `xl`.
- Tailwind CSS como sistema de diseño principal.
- Imágenes: WebP preferido, `loading="lazy"` por defecto, `alt` descriptivo obligatorio.
- No usar `!important` salvo casos documentados.

## Seguridad

### Comandos Bloqueados (requieren confirmación explícita)

- `rm -rf` — PROHIBIDO sin confirmación del usuario
- `git push --force` — PROHIBIDO sin confirmación del usuario
- `git reset --hard` — PROHIBIDO sin confirmación del usuario
- Cualquier eliminación recursiva o irreversible

El hook `autonomy/hooks/validate-bash.sh` aplica esta validación automáticamente.

### Seguridad Web

- Sanitizar toda entrada de usuario (prevenir XSS).
- No usar `dangerouslySetInnerHTML` salvo justificación documentada.
- Variables sensibles solo en `.env` (nunca en código fuente).
- `.env` siempre en `.gitignore`.

## Persistencia (Loki Mode)

### Protocolo de Memoria

1. **Al iniciar sesión**: El hook `session-init.sh` carga contexto desde `.loki/`.
2. **Cada turno**: Actualizar `.loki/CONTINUITY.md` con tarea actual, bloqueantes, próximos pasos.
3. **Al completar tarea**: Commit atómico + actualizar CONTINUITY.
4. **Al cerrar sesión**: El hook `store-episode.sh` almacena el episodio.

### Quality Gates

Detalle completo en `skills/quality-gates.md`.

1. Static analysis (ESLint)
2. Type checking (si se usa TypeScript)
3. Unit tests (>80% cobertura en rutas críticas)
4. Integration tests
5. Security scan
6. Code review (3 revisores paralelos en blind review)
7. E2E con Playwright

## Idioma

- **Código**: Inglés (nombres de variables, funciones, componentes).
- **Documentación y comentarios**: Español técnico.
- **Comunicación con el usuario**: Español técnico.
- **Commits**: Español con formato `tipo(alcance): descripción`.

## Skills Disponibles

### Módulos Loki (orquestación)

Cargar 1-2 a la vez según la tarea. Ver `skills/00-index.md` para ruteo.

| Módulo | Uso |
|---|---|
| `model-selection.md` | Selección de modelo y paralelización |
| `quality-gates.md` | Sistema de 7 puertas |
| `testing.md` | Estrategias de testing |
| `agents.md` | Tipos de agente y dispatch |
| `parallel-workflows.md` | Flujos paralelos con worktrees |
| `production.md` | Patrones de producción |
| `troubleshooting.md` | Recuperación de errores |

### Skills de Dominio (frontend)

| Skill | Uso |
|---|---|
| `vite-react-config/` | Config Vite 7.x, optimización de bundles, scaffolding |
| `react-best-practices/` | 45 reglas de rendimiento por prioridad |
| `tailwind-design-system/` | Design tokens, componentes, responsive, dark mode |
| `tailwind-patterns/` | Patrones de maquetación y estilos con Tailwind CSS |

### Skills Universales

| Skill | Uso |
|---|---|
| `playwright-skill/` | Testing E2E, automatización de browser |
| `github-expert/` | GitHub Actions, CI/CD, gestión de repos |

## Auto-Routing de Skills (Antigravity)

El sistema detecta automáticamente qué skills son relevantes para la tarea actual:

- **UserPromptSubmit hook**: Analiza keywords/intents en el prompt y sugiere skills relevantes
- **PreToolUse hook**: Detecta archivos editados y sugiere/bloquea según enforcement level
- **Configuración**: `.claude/skills/skill-rules.json`
- **Documentación**: `skills/skill-developer/SKILL.md`

## Development Guidelines

### Feedback Loop (CRITICO)

Antes de documentar cualquier feature:
1. Verificar que existe — revisar archivos, correr comandos.
2. Ser factual — no documentar lo que no funciona aún.

### Cleanup

Siempre limpiar antes de completar una tarea:
- Matar procesos huérfanos de tests.
- Eliminar archivos temporales.
- Verificar que no quedan recursos abiertos.
