# 🚀 Premium Portfolio Website

A modern, premium, and fully responsive dark-mode portfolio website with glassmorphism effects, neon red glows, smooth transitions, typewriter animations, and custom vector icons.

## 📂 Project Structure

- `index.html` - The structural markup and entry point.
- `style.css` - Custom CSS design system, colors, glassmorphism cards, glowing effects, and floating animations.
- `data.js` - **The only file you need to modify!** It stores your name, roles, skills, projects, and career timeline.
- `script.js` - Logic for typewriter animation, scroll-triggered progress bar, navigation highlights, and the interactive contact success popup.

## 🛠️ How to Customize Your Info

You don't need to change any HTML or CSS files. Open **`data.js`** in your text editor and modify the values:

### 1. Update Name and Roles
```javascript
name: "Your Name", // Will update the header logo initial, main title, and footer copyright automatically!
roles: ["Tech Enthusiast", "Full Stack Developer", "Software Engineer"], // Roles for the typewriter animation
```

### 2. Update Stats
```javascript
stats: [
  { value: "12", label: "Projects Built" },
  { value: "6", label: "Languages" },
  ...
]
```

### 3. Update Skills (Will automatically generate progress bars)
```javascript
skills: [
  { name: "Python", level: 90, icon: "python" },
  { name: "JavaScript", level: 85, icon: "javascript" },
  ...
]
```

### 4. Update Projects
```javascript
projects: [
  {
    title: "Project Name",
    description: "A short description of your project...",
    tags: ["HTML", "CSS", "JS"],
    github: "GitHub Link",
    live: "Live Preview Link",
    icon: "code" // Choose from: 'weather', 'heart', 'gift', 'qr', 'check', 'code'
  },
  ...
]
```

## 💻 How to Run Locally

Since this is a clean frontend web project, you can run it in two easy ways:

### Method 1: Just Double Click
Simply double-click the `index.html` file in your file explorer to open it in your web browser.

### Method 2: Python Local Server (Recommended for perfect asset loading)
Open your terminal (PowerShell / Command Prompt) in the project folder and run:
```bash
python -m http.server 8000
```
Then, open your browser and navigate to:
[http://localhost:8000](http://localhost:8000)
