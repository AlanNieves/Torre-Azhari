# 📁 Estructura del Proyecto - Frontend

## 🎯 Patrón de Organización: Route Colocation

Este proyecto sigue el patrón **Route Colocation** recomendado por Next.js 13+ (App Router), donde cada ruta mantiene sus componentes específicos cerca de donde se usan.

---

## 📂 Estructura Actual

```
frontend/src/
├── app/                              # App Router (Next.js 13+)
│   ├── homepage/                     # 🏠 Página principal (/)
│   │   └── components/               # Componentes específicos
│   │       ├── Hero.tsx
│   │       ├── IntroText.tsx
│   │       ├── WhyAzhari.tsx
│   │       ├── BrandCTA.tsx
│   │       └── Location.tsx
│   │
│   ├── proyectos/                    # 🏢 Ruta /proyectos
│   │   ├── components/               # Componentes específicos
│   │   │   ├── ProjectsHero.tsx
│   │   │   └── ProjectsGrid.tsx
│   │   ├── _lib/                     # Lógica y datos
│   │   │   └── projects.ts
│   │   ├── page.tsx                  # Página principal
│   │   └── [slug]/                   # Rutas dinámicas (futuro)
│   │       └── page.tsx
│   │
│   ├── sobre-azhari/                 # ℹ️ Ruta /sobre-azhari
│   │   ├── components/               # Componentes específicos
│   │   │   └── AboutAzhari.tsx
│   │   └── page.tsx                  # Página principal
│   │
│   ├── api/                          # API Routes
│   │   └── leads/
│   │       └── route.ts
│   │
│   ├── page.tsx                      # Home page
│   ├── layout.tsx                    # Layout principal
│   └── globals.css                   # Estilos globales
│
├── shared/                           # Componentes compartidos globalmente
│   ├── LeadForm.tsx                  # 📝 Formulario usado en múltiples páginas
│   ├── ProjectsPreview.tsx           # 🏢 Preview de proyectos (home)
│   │
│   ├── layout/                       # Componentes de estructura global
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   └── ui/                           # Componentes UI reutilizables
│       ├── OptimizedImage.tsx
│       └── InteractiveMap.tsx
│
├── types/                            # TypeScript types
│   ├── project.ts                    # Tipos para proyectos
│   └── lead.ts                       # Tipos para leads
│
└── lib/                              # Utilidades y funciones compartidas
    ├── api.ts
    ├── constants.ts
    └── seo.ts
```

---

## 📋 Convenciones

### ✅ Carpetas con prefijo `_`
- **`_lib/`**: Lógica, datos y utilidades de una ruta
- El prefijo `_` evita que Next.js las trate como rutas

### 🎯 Cuándo usar cada ubicación

#### `app/{ruta}/components/`
Componentes que **SOLO** se usan en esa ruta específica:
- `Hero.tsx` → Solo en home (`/`), dentro de `homepage/components/`
- `ProjectsHero.tsx` → Solo en `/proyectos`, dentro de `proyectos/components/`
- `AboutAzhari.tsx` → Solo en `/sobre-azhari`, dentro de `sobre-azhari/components/`

#### `shared/` (raíz)
Componentes usados en **2+ páginas diferentes**:
- `LeadForm.tsx` → Home, Proyectos, Sobre Azhari
- `ProjectsPreview.tsx` → Home y potencialmente otras páginas

#### `shared/layout/`
Componentes de **estructura global**:
- `Navbar.tsx` → Usado en layout principal
- `Footer.tsx` → Usado en layout principal

#### `shared/ui/`
Componentes **genéricos y reutilizables** (sin lógica de negocio):
- `OptimizedImage.tsx` → Wrapper de next/image
- `InteractiveMap.tsx` → Componente de mapa genérico
- Botones, Cards, Modals, etc.

---

## 🔄 Rutas de Importación

### Desde página principal (`app/page.tsx`):
```tsx
import Hero from "./homepage/components/Hero";
import LeadForm from "@/shared/LeadForm";
import ProjectsPreview from "@/shared/ProjectsPreview";
```

### Desde proyectos (`app/proyectos/page.tsx`):
```tsx
import ProjectsHero from "./components/ProjectsHero";
import { getAllProjects } from "./_lib/projects";
import LeadForm from "@/shared/LeadForm";
```

### Desde sobre-azhari (`app/sobre-azhari/page.tsx`):
```tsx
import AboutAzhari from "./components/AboutAzhari";
import LeadForm from "@/shared/LeadForm";
```

### Desde layout (`app/layout.tsx`):
```tsx
import Navbar from "@/shared/layout/Navbar";
import Footer from "@/shared/layout/Footer";
```

---

## ✨ Beneficios de esta Estructura

1. **Locality of Behavior**: Código relacionado está junto (route colocation)
2. **Consistencia total**: Todas las rutas usan la misma estructura `{ruta}/components/`
3. **Fácil mantenimiento**: Patrón predecible en todas las páginas
4. **Escalabilidad**: Nueva ruta = copiar el patrón establecido
5. **Estándar de la industria**: Patrón recomendado por Vercel/Next.js
6. **Sin duplicación**: Un solo lugar para cada componente compartido
7. **Claridad**: `shared/` es claramente global, `{ruta}/components/` es local

---

## 🚀 Próximos Pasos

### Para agregar una nueva ruta:
1. Crear `app/{nueva-ruta}/page.tsx`
2. Crear `app/{nueva-ruta}/components/` para componentes específicos
3. Crear `app/{nueva-ruta}/_lib/` si necesitas lógica/datos específicos
4. Usar `shared/` solo para componentes compartidos (2+ páginas)

### Ejemplo: Agregar página de contacto
```
app/contacto/
├── components/
│   ├── ContactHero.tsx
│   ├── ContactInfo.tsx
│   └── ContactMap.tsx
├── _lib/
│   └── contact-info.ts
└── page.tsx
```

### 📦 Componentes compartidos
Si un componente se usa en 2+ páginas: `shared/{ComponentName}.tsx`  
Si es UI genérico sin lógica de negocio: `shared/ui/{ComponentName}.tsx`  
Si es estructura global (layout): `shared/layout/{ComponentName}.tsx`

---

## 📚 Referencias

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Project Organization](https://nextjs.org/docs/app/building-your-application/routing/colocation)
- [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
