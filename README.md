# 🧘‍♀️ Landing Page Yoga

Landing page moderna e inspiracional sobre Yoga con diseño tipo Apple Fitness+, Nike Training Club y Calm.

## 🎨 Características

- **Hero dinámico adaptativo**: Video en desktop, imagen estática en mobile (mejor UX)
- **Swiper carruseles en mobile**: Navegación horizontal intuitiva tipo Instagram/Netflix
- **Diseño responsive** mobile-first (320px - 1440px+)
- **Animaciones suaves** con transiciones CSS
- **Barra superior inteligente** que aparece/desaparece con scroll
- **Botones funcionales** con integración a Google Maps
- **6 secciones completas** con contenido profesional sobre Yoga
- **Paleta de colores** elegante y espiritual (púrpura y rosa)
- **Optimizado para rendimiento**: imágenes estáticas en mobile, video solo en desktop

## 📱 Experiencia Mobile Premium

### Swiper Carruseles (< 768px)

**Secciones con Swiper:**
1. ✅ **Beneficios** - 6 tarjetas deslizables (slidesPerView: 1.2)
2. ✅ **Yoga para todos** - 4 imágenes con efecto centrado (slidesPerView: 1.5)
3. ✅ **Tipos de práctica** - 4 cards horizontales (slidesPerView: 1.1)

**Ventajas UX:**
- 🎯 **Menos scroll vertical** - Contenido más accesible
- 👆 **Interacción natural** - Gestos de swipe familiares
- 📱 **Moderna** - Experiencia tipo app nativa
- 🎨 **Limpia** - Evita el efecto "lista infinita"
- 💚 **Bullets de navegación** - Usuario sabe cuántas cards hay

### Desktop Experience (> 768px)
- Grid tradicional profesional
- Hover effects y transiciones
- Distribución óptima del espacio

## 💡 Decisiones UX/UI Profesionales

### Estrategia de Video Adaptativa

**Mobile (< 768px):**
- ✅ **Hero limpio con imagen** - Primera impresión profesional sin distracciones
- ✅ **Video accesible debajo** - Usuario puede ver el video scrolleando, en tamaño controlado
- ✅ **Carga rápida** - Hero con imagen estática carga instantáneo
- ✅ **Sin problemas de autoplay** - El video en sección dedicada no interfiere
- ✅ **Experiencia intuitiva** - El usuario decide cuándo ver el video
- ✅ **Video con controles** - Usuario puede pausar, ver en fullscreen, etc.

**Desktop (> 768px):**
- ✅ **Video inmersivo en hero** - Pantalla completa con overlay elegante
- ✅ **Autoplay con loop** - Experiencia cinematográfica
- ✅ **Controles disponibles** - Usuario puede pausar/reproducir/ajustar volumen
- ✅ **HD 1080p** - Máxima calidad visual

### ¿Por qué esta estrategia?

Esta solución combina lo mejor de ambos mundos:
1. **Hero profesional** en mobile (imagen estática)
2. **Video accesible** justo debajo (el usuario scrollea 1 segundo y lo ve)
3. **Mejor rendimiento** - La página carga rápido
4. **Control del usuario** - Decide cuándo interactuar con el video

Es la estrategia que usan sitios premium como **Peloton**, **Lululemon** y **Headspace**.

## 📁 Estructura del Proyecto

```
yoga-landing/
│
├── index.html          # Estructura HTML principal
├── style.css           # Estilos personalizados
├── script.js           # Componentes React y funcionalidad
├── package.json        # Configuración del proyecto
├── .gitignore          # Archivos a ignorar en git
├── LICENSE             # Licencia MIT
└── README.md           # Documentación
```

## 🚀 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/yoga-landing.git
   cd yoga-landing
   ```

2. **Abre el proyecto:**
   - Simplemente abre `index.html` en tu navegador
   - No requiere instalación de dependencias
   - Todo carga desde CDN

## 🌐 Despliegue

### GitHub Pages

1. Ve a la configuración de tu repositorio
2. En "Pages", selecciona la rama `main` o `master`
3. Tu sitio estará disponible en: `https://tu-usuario.github.io/yoga-landing`

### Netlify

1. Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)
2. Tu sitio estará online en segundos

### Vercel

```bash
npm i -g vercel
vercel
```

## 🎯 Funcionalidades

### Navegación Inteligente

- **Botón "Descubre sus beneficios"**: Scroll suave a la sección de beneficios
- **Botón "Encuentra un centro cercano"**: Abre Google Maps con búsqueda de centros de Yoga
- **Botón "Explora más"**: Scroll suave a la sección "¿Qué es el Yoga?"

### Barra Superior

- Se oculta cuando estás en el hero (pantalla completa del video)
- Aparece suavemente después de 100px de scroll
- Logos clickeables con enlaces a:
  - [Fundación La Cumbre](http://www.fundacionlacumbre.cl/)
  - [Mindep - Ley del Deporte](http://www.mindep.cl/)

## 🎨 Paleta de Colores

- **Blanco puro**: `#FFFFFF`
- **Gris cálido**: `#F7F7F7`
- **Púrpura profundo**: `#673AB7`
- **Rosa vibrante**: `#FF6B9D`

## 🧘‍♀️ Contenido

### Secciones Principales:

1. **Hero** - Video inmersivo con CTA
2. **Beneficios del Yoga** - 6 beneficios clave con iconos
3. **¿Qué es el Yoga?** - Introducción a la práctica
4. **Tipos de Práctica** - Hatha, Vinyasa, Yin, Ashtanga
5. **Yoga para Todos** - Principiantes, embarazadas, seniors, atletas
6. **Principios del Yoga** - Ahimsa, Pranayama, Dhyana

## 🔧 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **React 18** - Componentes UI
- **Tailwind CSS** - Utilidades de diseño
- **Swiper.js 11** - Carruseles touch en mobile
- **Google Fonts** - Inter & DM Sans

## 📱 Responsive

La landing está optimizada para:
- 📱 Móviles (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktop (1024px+)
- 🖥️ Wide screens (1440px+)

## 🤝 Colaboradores

- **Fundación La Cumbre** - [www.fundacionlacumbre.cl](http://www.fundacionlacumbre.cl/)
- **Mindep - Ley del Deporte** - [www.mindep.cl](http://www.mindep.cl/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## ✨ Créditos

- **Imágenes**: [Unsplash](https://unsplash.com) (libres de derechos)
- **Video**: YouTube - [Yoga Video](https://youtu.be/DIh737Xqs0E)
- **Iconos**: Emojis nativos

---

Hecho con 💜 para promover el bienestar y la conexión interior
