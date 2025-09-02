# Sistema de Inscripciones - Cliente

Un sistema web moderno para la gestión de inscripciones estudiantiles desarrollado con Next.js y TailwindCSS.

## 🚀 Características

- **Gestión de Estudiantes**: Búsqueda y registro de estudiantes por cédula
- **Inscripciones**: Creación y seguimiento de inscripciones a carreras
- **Estadísticas**: Visualización de datos de inscripciones y capacidades
- **Interfaz Moderna**: Diseño responsivo con componentes reutilizables

## 🛠️ Tecnologías

- **Frontend**: Next.js 15 con App Router
- **Estilos**: TailwindCSS para diseño responsivo
- **Componentes**: Radix UI para componentes accesibles
- **Estado**: TanStack Query para manejo de datos
- **Formularios**: React Hook Form con validación Yup
- **Iconos**: Lucide React

## 📋 Prerrequisitos

- Node.js (versión 18 o superior)
- pnpm (gestor de paquetes recomendado)

## 🚀 Instalación y Ejecución

1. **Instalar dependencias**
   ```bash
   pnpm install
   ```

2. **Ejecutar en modo desarrollo**
   ```bash
   pnpm run dev
   ```

3. **Abrir en el navegador**
   
   Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## ⚙️ Configuración

### Variables de Entorno

El archivo `.env` está incluido en el repositorio para facilitar la ejecución del proyecto durante la evaluación técnica. 

> **⚠️ Importante**: En un entorno de producción, las variables de entorno **nunca** deben incluirse en el control de versiones por razones de seguridad.

Las variables configuradas incluyen:
- URL de la API backend
- Configuraciones de desarrollo

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── inscripciones/      # Módulo de inscripciones
│   └── estadisticas-de-inscripciones/ # Módulo de estadísticas
├── components/             # Componentes reutilizables
│   └── ui/                 # Componentes base de UI
├── interfaces/             # Definiciones de tipos TypeScript
├── schemas/                # Esquemas de validación
├── api-tt/                 # Configuración y queries de API
└── lib/                    # Utilidades y helpers
```

## 🎯 Funcionalidades Principales

### Inscripciones
- Búsqueda de estudiantes por cédula
- Registro de nuevos estudiantes
- Creación de inscripciones a carreras
- Visualización de inscripciones existentes

### Estadísticas
- Dashboard con métricas generales
- Listado de carreras con estadísticas
- Detalles por carrera con estudiantes inscritos
- Visualización de capacidades y ocupación

## 🔧 Scripts Disponibles

```bash
# Desarrollo
pnpm run dev

# Construcción para producción
pnpm run build

# Iniciar servidor de producción
pnpm run start

# Linting
pnpm run lint
```

## 📱 Diseño Responsivo

La aplicación está optimizada para funcionar en:
- 📱 Dispositivos móviles
- 📱 Tablets
- 💻 Escritorio

## 🎨 Sistema de Diseño

- **Paleta de colores**: Esquema moderno con énfasis en usabilidad
- **Tipografía**: Optimizada para legibilidad
- **Componentes**: Consistentes y accesibles
- **Espaciado**: Sistema de grid responsivo

## 🧪 Prueba Técnica

Este proyecto fue desarrollado como parte de una evaluación técnica, demostrando:

- Arquitectura moderna de React/Next.js
- Gestión eficiente del estado
- Diseño de interfaces intuitivas
- Implementación de mejores prácticas
- Código limpio y mantenible

---

**Desarrollado con** ❤️ **usando Next.js y TailwindCSS**
