export const commands = {
  help: `
Available commands:
help      Show available commands
ls        List files
pwd       Show current directory
whoami    Display user
about     About me
skills    Technical skills
projects  Featured projects
contact   Contact information
social    Social links
github    GitHub profile
blog      Latest articles
date      Current date
uptime    System uptime
neofetch  System information
cat       Read files
clear     Clear terminal
`,

  ls: "projects  blog  contact  skills.md  about.txt  README.md",

  pwd: "/home/cipherunit",

  whoami: "cipherunit",

  about: `
Full-stack Developer & Security Enthusiast.
Building modern web applications and exploring cybersecurity.
`,

  skills: `
JavaScript
TypeScript
React
Next.js
Node.js
Express
MongoDB
PostgreSQL
Docker
Linux
Cybersecurity
`,

  projects: `
1. Portfolio Website
2. Terminal UI Portfolio
3. AI Chat Application
4. Security Toolkit
5. E-Commerce Platform
`,

  contact: `
Email: hello@cipherunit.dev
Location: Earth 🌍
`,

  social: `
GitHub: github.com/cipherunit
LinkedIn: linkedin.com/in/cipherunit
Twitter: x.com/cipherunit
`,

  github: "Redirecting to github.com/cipherunit ...",

  blog: `
Latest Posts:
- Building a Terminal Portfolio
- React Performance Tips
- Linux for Developers
`,

  date: new Date().toString(),

  uptime: "127 days, 14 hours, 32 minutes",

  neofetch: `
OS: CipherOS
Host: Portfolio Terminal
Kernel: 6.8.0
Shell: zsh
CPU: Intel Core i9
Memory: 8GB / 32GB
`,

  cat: "Usage: cat <filename>",

  clear: "",
};
