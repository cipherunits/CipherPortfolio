import { siteConfig } from "@/lib/site";

export const commands = {
  help: `
     
whoami  
about     
skills   
projects  
contact 
social  
github   
date     
neofetch 

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
1. Cipher Token
2. NPM Mirror
3. CipherPortfolio
`,

  contact: `
Email: ${siteConfig.email}
Location: Earth
`,

  social: `
GitHub: github.com/cipherunits
`,

  github: "Redirecting to github.com/cipherunits ...",

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
