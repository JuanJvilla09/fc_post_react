# 🕷️ fcPost - Interactive Facebook Post Clone

> **Una experiencia inmersiva de publicación social inspirada en Spider-Man**

Un clon minimalista pero poderoso de las publicaciones de Facebook desarrollado con React y Vite, que simula una experiencia interactiva de redes sociales con funcionalidades dinámicas de likes y comentarios. Este proyecto no es simplemente una réplica estática; es una demostración viva de cómo las tecnologías modernas de frontend pueden crear experiencias de usuario envolventes y responsivas.


## 🌟 Características Principales

### 💫 Interactividad Dinámica
- **Sistema de Likes Reactivo**: Implementación en tiempo real de contadores de likes con feedback visual inmediato
- **Gestión de Comentarios Avanzada**: Sistema completo de agregar, mostrar y persistir comentarios con validación automática
- **UI/UX Responsiva**: Diseño adaptativo que mantiene la funcionalidad en diferentes dispositivos y resoluciones

### 🎭 Temática Inmersiva
- **Narrativa de Spider-Man**: Integración temática completa con contenido, imágenes y personalidad del universo Spider-Man
- **Interacciones de Venom**: Comentarios pre-cargados que simulan las icónicas interacciones entre Spider-Man y Venom
- **Elementos Visuales Cohesivos**: Avatares, imágenes y contenido textual alineados con la temática superheroica

### 🏗️ Arquitectura Técnica Robusta
- **Componentes Modulares**: Arquitectura basada en componentes reutilizables y mantenibles
- **Estado Centralizado**: Gestión eficiente del estado usando React Hooks con patrones optimizados
- **Renderizado Condicional**: Implementación inteligente de mostrar/ocultar elementos basado en el estado de la aplicación

## 🚀 Instalación y Configuración

### Prerrequisitos
```bash
# Verificar versión de Node.js (recomendado: 18+ o 20+)
node --version

# Verificar npm
npm --version
```

### 🔧 Pasos de Instalación

1. **Clonar el Repositorio**
```bash
git clone https://github.com/tu-usuario/fcPost.git
cd fcPost
```

2. **Navegar al Directorio del Proyecto**
```bash
cd fcbookPost
```

3. **Instalar Dependencias**
```bash
npm install
```

4. **Ejecutar en Modo Desarrollo**
```bash
npm run dev
```

5. **Abrir en el Navegador**
   - El proyecto se ejecutará en `http://localhost:5173`
   - Vite proporciona hot-reload automático para desarrollo eficiente

## 📋 Scripts Disponibles

| Comando | Descripción | Uso |
|---------|-------------|-----|
| `npm run dev` | Inicia el servidor de desarrollo con hot-reload | Desarrollo activo |
| `npm run build` | Construye la aplicación para producción | Deploy y distribución |
| `npm run lint` | Ejecuta ESLint para análisis de código | Control de calidad |
| `npm run preview` | Previsualiza el build de producción | Testing pre-deploy |

## 🏛️ Arquitectura del Proyecto

### 📁 Estructura de Directorios
```
fcbookPost/
├── src/
│   ├── components/
│   │   ├── Post.jsx              # Componente principal
│   │   ├── CommentForm.jsx       # Formulario de comentarios
│   │   └── ListComment.jsx       # Lista de comentarios
│   ├── App.jsx                   # Componente raíz
│   ├── main.jsx                  # Punto de entrada React
│   ├── App.css                   # Estilos principales
│   └── index.css                 # Estilos globales
├── public/                       # Archivos estáticos
├── package.json                  # Configuración y dependencias
├── vite.config.js               # Configuración de Vite
└── eslint.config.js             # Configuración de ESLint
```

### 🧩 Componentes y Responsabilidades

#### `Post.jsx` - El Corazón de la Aplicación
- **Gestión de Estado Completa**: Maneja likes, visibilidad de comentarios y datos de comentarios
- **Lógica de Negocio**: Implementa la funcionalidad core de interacción social
- **Coordinación de Componentes**: Actúa como contenedor inteligente para componentes hijos

#### `CommentForm.jsx` - Captura de Input del Usuario
- **Formulario Controlado**: Input validado en tiempo real con React hooks
- **Comunicación Ascendente**: Utiliza callbacks para enviar datos al componente padre
- **UX Optimizada**: Validación automática y limpieza de formulario post-submit

#### `ListComment.jsx` - Renderizado de Comentarios
- **Renderizado Eficiente**: Utiliza keys únicas para optimización de React
- **Presentación Consistente**: Mantiene formato visual uniforme para todos los comentarios
- **Escalabilidad**: Diseñado para manejar listas dinámicas de cualquier tamaño

## 🎨 Diseño y Estilado

### 🌃 Modo Oscuro por Defecto
- **Paleta de Colores Profesional**: Esquema de colores inspirado en Facebook Dark Mode
- **Contraste Óptimo**: Asegura legibilidad y accesibilidad en todas las condiciones
- **Coherencia Visual**: Elementos UI consistentes en toda la aplicación

### 📱 Responsividad
- **Mobile-First Approach**: Diseño optimizado para dispositivos móviles
- **Breakpoints Inteligentes**: Adaptación fluida a diferentes tamaños de pantalla
- **Touch-Friendly**: Elementos interactivos optimizados para touch interfaces

## ⚡ Tecnologías y Dependencias

### 🎯 Stack Principal
- **React 19.1.1**: La última versión estable con optimizaciones de rendering
- **Vite 7.1.2**: Build tool ultra-rápido con HMR instantáneo
- **JavaScript ES6+**: Sintaxis moderna y funcionalidades avanzadas

### 🛠️ Herramientas de Desarrollo
- **ESLint**: Análisis estático de código con reglas específicas para React
- **React Hooks ESLint Plugin**: Reglas especializadas para hooks
- **React Refresh**: Hot reloading optimizado para componentes React

### 📦 Configuración de Build
- **Vite Plugin React**: Integración optimizada React-Vite
- **ES Modules**: Arquitectura modular moderna
- **Tree Shaking**: Eliminación automática de código no utilizado

## 🎮 Funcionalidades Interactivas

### 👍 Sistema de Likes
```javascript
// Implementación reactiva con feedback inmediato
let [likes, setLikes] = useState(0);
let updateLikes = () => setLikes(likes + 1);
```

### 💬 Gestión de Comentarios
```javascript
// Estado para comentarios con persistencia local
let [listData, setListData] = useState(listComentarios);
let [textComment, setTextComment] = useState("");

// Actualización automática con useEffect
useEffect(() => {
    if(textComment) {
        setListData([...listData, {id: id, text: textComment}]);
        setId(id + 1);
    }
}, [textComment]);
```

### 🔄 Renderizado Condicional
```javascript
// Mostrar/ocultar secciones basado en estado
{comment && <CommentForm getCommentData={getCommentData} />}
{comentario.trim() && (
    <button className="comment-submit" onClick={handleSubmit}>
        Post
    </button>
)}
```

## 🎭 Contenido Temático

### 🕷️ Narrativa Spider-Man
El proyecto incorpora una narrativa cohesiva que incluye:
- **Post Principal**: Reflexiones nocturnas de Spider-Man sobre su vida heroica
- **Comentarios de Venom**: Interacciones humorísticas y características del simbionte
- **Elementos Visuales**: Imágenes temáticas que complementan la narrativa

### 🌃 Ambientación Nocturna
- **Imágenes de Nueva York**: Paisajes urbanos nocturnos que establecen el mood
- **Paleta de Colores**: Tonos oscuros que reflejan el ambiente nocturno de la ciudad

## 🚀 Posibles Mejoras y Extensiones

### 🔮 Funcionalidades Futuras
- **Sistema de Respuestas**: Comentarios anidados y threads de conversación
- **Reacciones Múltiples**: Más allá del like básico (love, laugh, angry, etc.)
- **Persistencia de Datos**: Integración con localStorage o base de datos
- **Autenticación**: Sistema de usuarios y perfiles personalizados
- **Tiempo Real**: WebSockets para actualizaciones en vivo
- **Multimedia**: Soporte para imágenes y videos en comentarios

### 🎨 Mejoras de UI/UX
- **Animaciones**: Transiciones suaves y micro-interacciones
- **Temas Personalizables**: Múltiples esquemas de color
- **Accessibility**: Mejoras en navegación por teclado y screen readers
- **Performance**: Lazy loading y optimizaciones de rendering

## 🤝 Contribuciones

### 📝 Cómo Contribuir
1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abre** un Pull Request

### 🐛 Reportar Issues
- Utiliza el sistema de issues de GitHub
- Proporciona steps to reproduce
- Incluye screenshots si es relevante
- Especifica versión de navegador y OS

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- Email: tu.email@ejemplo.com

## 🙏 Agradecimientos

- **React Team**: Por la increíble biblioteca y ecosistema
- **Vite Team**: Por la herramienta de build súper rápida
- **Marvel**: Por el universo Spider-Man que inspira este proyecto
- **Comunidad Open Source**: Por las herramientas y recursos que hacen posible este tipo de proyectos

---

<div align="center">

**¿Te gustó el proyecto? ¡Dale una ⭐ al repositorio!**

[🚀 Ver Demo en Vivo](#) | [📝 Documentación Completa](#) | [🐛 Reportar Bug](https://github.com/tu-usuario/fcPost/issues)

</div>

---

> *"With great power comes great responsibility"* - Spider-Man

*Este proyecto es una demostración educativa y no está afiliado oficialmente con Marvel Comics o Sony Pictures.*

Con amor JJDev ❤️