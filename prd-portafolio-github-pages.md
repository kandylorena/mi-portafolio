# Product Requirement Document (PRD) - Portafolio Personal

## 1. Visión General del Producto
* **Objetivo:** Crear una landing page estática e interactiva hospedada en GitHub Pages que sirva como portafolio profesional.
* **Fase Actual:** **Prototipado y Pruebas de UI.** En esta etapa, el sitio utilizará **4 proyectos ficticios** para validar el diseño, la disposición de las tarjetas (cards) y la interactividad, antes de subir los proyectos reales.
* **Métricas de Éxito:**
    * Diseño 100% responsivo (móvil, tablet y escritorio).
    * Consistencia visual en la cuadrícula (grid) de proyectos.

## 2. Stack Tecnológico Propuesto
* **Frontend:** HTML5, CSS3 (con CSS Grid/Flexbox o Tailwind CSS), JavaScript Vanilla.
* **Hosting:** GitHub Pages.
* **Imágenes de Prueba:** Unsplash Source o Placeholder.com (ej. `https://via.placeholder.com/600x400`) para simular los screenshots.

## 3. Requisitos Funcionales (Estructura con Datos Ficticios)

### A. Hero Section (Introducción)
* Texto temporal para validar fuentes y tamaños (ej. *¡Hola! Soy [Tu Nombre], Full Stack Developer*).

### B. Sección de Proyectos (Ficticios para Pruebas de UI)
Para probar la flexibilidad de la interfaz (títulos largos, descripciones variables y diferentes cantidades de tecnologías), se implementarán las siguientes **4 tarjetas de prueba**:

| ID | Proyecto Ficticio | Descripción de Prueba (UI Test) | Badges (Tecnologías) | Enlaces de Prueba |
| :--- | :--- | :--- | :--- | :--- |
| **01** | **CryptoSphere Dashboard** | Un panel de control interactivo para rastrear criptomonedas en tiempo real. Diseñado para probar gráficos y modo oscuro. | React, Tailwind CSS, Chart.js, API | GitHub / Live Demo |
| **02** | **EcoMarket E-Commerce** | Tienda en línea enfocada en productos ecológicos. Ideal para probar layouts de cuadrícula de productos y filtros de búsqueda. | Next.js, Stripe, Node.js, MongoDB | GitHub / Live Demo |
| **03** | **TaskFlow Pro (SaaS)** | Herramienta de gestión de tareas estilo Kanban para equipos remotos. Flujo de prueba para arrastrar y soltar elementos. | TypeScript, Vue.js, Firebase | GitHub / Live Demo |
| **04** | **ChefBot - AI Recipe Generator** | Aplicación móvil-first que genera recetas personalizadas basadas en los ingredientes que tienes en tu refrigerador usando IA. | Python, Flutter, OpenAI API | GitHub / Live Demo |

> **Nota de UI:** Los proyectos 01 y 04 tienen títulos y tecnologías cortas, mientras que el 02 y 03 tienen textos más largos. Esto servirá para asegurar que las tarjetas mantengan el mismo alto (`equal height columns`) y no se rompa el diseño.

### C. Habilidades Técnicas (Skills)
* Bloques visuales para iconos de prueba.

### D. Formulario de Contacto / Footer
* Iconos de redes sociales con estados `:hover` activos.

## 4. Requisitos No Funcionales (Enfoque en UI)
* **Grid/Flexbox Test:** La sección de proyectos debe acomodarse automáticamente: 1 columna en móvil, 2 columnas en tablet y 2 o 3 columnas en pantallas de escritorio.
* **Efectos Visuales (Microinteracciones):** Las tarjetas de los proyectos deben tener un efecto de elevación (`box-shadow` o `scale`) al pasar el cursor (hover) para denotar clickabilidad.

## 5. Siguientes Pasos de Desarrollo
1. Maquetar el HTML base de la sección de proyectos repitiendo la estructura de la tarjeta 4 veces.
2. Aplicar los estilos CSS para que los 4 proyectos ficticios se vean alineados y estéticos.