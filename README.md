# Test Automation Frontend - Serenity/JS + Playwright + Cucumber + Screenplay

Este proyecto implementa **automatización de pruebas frontend** para los módulos de Siigo, utilizando el patrón **Screenplay**, **Cucumber** (BDD) y **Serenity/JS** con **Playwright**.  

Los reportes se generan en **Serenity BDD** y se publican automáticamente en **GitHub Pages**.

---

## 📂 Estructura del proyecto

```bash
src/
└── com/siigo/certification/front/
    ├── Interactions       # Interacciones genéricas
    ├── models             # Modelos de datos
    ├── questions          # Questions para validar resultados
    ├── steps              # Step definitions
    ├── tasks              # Tasks del patrón Screenplay
    ├── userInterface      # Selectores de UI
    └── utils              # Utilidades generales

support/                   # Configuración global, hooks, etc.
test/features/             # Features de Cucumber
target/site/serenity/      # Reportes generados por Serenity
package.json               # Scripts y dependencias
```


## 🛠 Instalación y ejecución

1. Instala las dependencias:

```bash
npm i

```
2. Ejecuta las pruebas:
```bash
npm test
```
3. Genera reportes completos de Serenity BDD:

```bash
npm run report:full
o
npx serenity-bdd run
```


## 🚀 GitHub Actions Workflow

**Archivo:** `.github/workflows/performance.yml`

El workflow realiza:

- Ejecutar pruebas frontend con **Serenity/JS + Cucumber + Playwright** y generar reportes JSON en `target/site/serenity/`.
- Subir reportes como artifacts.
- Publicar dashboard actualizado en **GitHub Pages** desde `target/site/serenity/`.


## 🚀 Enlaces de interés

- **Workflow GitHub Actions:** [https://github.com/CristianHdez90/TestAutoFrontend/actions](https://github.com/CristianHdez90/TestAutoFrontend/actions)  
- **Dashboard GitHub Pages (Serenity BDD):** [https://cristianhdez90.github.io/TestAutoFrontend/](https://cristianhdez90.github.io/TestAutoFrontend/)
