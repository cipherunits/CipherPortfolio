# 🖥️ DevPortfolio - Terminal + Landing

> یک پورتفولیوی تعاملی برای برنامه‌نویسان فرانت‌اند با ترکیب لندینگ پیج مدرن و ترمینال واقعی داخل مرورگر

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-0055FF?logo=framer)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev/)

---

## 📑 فهرست مطالب

- 🎯 هدف پروژه
- 🧠 ایده و کانسپت
- 🏗️ معماری سیستم
- 💻 سیستم ترمینال
- 📋 دستورات (Commands)
- 🎨 طراحی UI / Theme System
- 📂 ساختار پروژه
- 🛠️ تکنولوژی‌ها
- 🚀 Roadmap توسعه
- 🐣 Easter Eggs
- 📱 ریسپانسیو
- 🔮 ایده‌های آینده

---

## 🎯 هدف پروژه

این پروژه برای نمایش مهارت‌های واقعی فرانت‌اند طراحی شده:

- ارائه تجربه تعاملی به‌جای UI ثابت
- شبیه‌سازی محیط توسعه (Terminal + IDE vibe)
- ایجاد تجربه‌ی ماندگار برای کارفرما یا مصاحبه‌کننده
- ترکیب طراحی مدرن با تعاملات CLI محور

---

## 🧠 ایده و کانسپت

| بخش | توضیح |
|-----|------|
| Landing Page | صفحه اصلی مدرن با طراحی مینیمال و انیمیشن |
| Terminal Overlay | ترمینال واقعی داخل مرورگر با قابلیت اجرای دستور |
| Vibe کلی | ترکیب VS Code + Terminal + Cyberpunk aesthetic |

---

## 🏗️ معماری سیستم

```
Landing Page
│
├── Hero / About / Projects / Skills / Contact
│
└── Floating Terminal Button
        │
        ▼
Terminal Overlay
├── Command Parser
├── History Manager
├── Output Renderer
├── Theme System
└── Command Registry
```

---

## 💻 سیستم ترمینال

### ویژگی‌های Core

- Parser پیشرفته CLI
- پشتیبانی از flag ها:
  - `--filter`
  - `--sort`
  - `--detailed`
- History (↑ ↓)
- Tab Completion
- localStorage persistence

### انواع خروجی

- Text
- Table
- JSON
- Markdown
- ASCII Art
- Interactive UI

### UX Features

- Auto-scroll
- Syntax highlighting
- Loading states (async commands)
- Typewriter effect (optional)

---

## 🎨 Theme System

```text
dark   → VSCode Dark
matrix → Green terminal
amber  → Retro CRT
light  → Minimal light mode
custom → User defined
```

---

## 📋 دستورات (Commands)

### General

- whoami
- about
- contact
- cv
- social

### Projects

- projects
- projects --filter=react
- project <name>

### Skills

- skills
- skills --category=frontend

### Fun

- matrix
- hack
- neofetch
- joke
- game

### System

- help
- clear
- history
- exit


https://www.figma.com/design/AHcrEg45ACtJEm4L9IQcre/Portfolio--Community-?node-id=45-1388&t=MS07l1AGb2rZ9H3Q-1
https://www.shellself.com/