import { ItemCustom } from '../interfaces';

const custom_files: ItemCustom[] = [
  // Specific files
  { name: 'package.json', icon: ' ', color: 'green' },
  { name: 'package-lock.json', icon: ' ', color: 'green' },
  { name: '.git', icon: ' ', color: 'orange' },
  { name: 'LICENSE', icon: ' ', color: 'red' },
  { name: '.config', icon: ' ', color: 'white' },
  { name: '.ini', icon: ' ', color: 'white' },
  { name: '.lock', icon: ' ', color: 'white' },
  { name: 'README.md', icon: ' ', color: 'cyan' },

  { name: 'eslint', icon: ' ', color: 'magenta' },
  { name: 'prettier', icon: ' ', color: 'magenta' },

  // File extension
  { name: '.tsx', icon: ' ', color: 'blue' }, // TypeScript (React)
  { name: '.jsx', icon: ' ', color: 'cyan' }, // JavaScript (React)
  { name: '.mjs', icon: ' ', color: 'yellow' }, // Javascript (Module)
  { name: '.ts', icon: ' ', color: 'blue' }, // Typescript
  { name: '.js', icon: ' ', color: 'yellow' }, // JavaScript
  { name: '.lua', icon: ' ', color: 'blue' }, // Lua
  { name: '.vim', icon: ' ', color: 'green' }, // VimScript
  { name: '.py', icon: ' ', color: 'magenta' }, // Python
  { name: '.java', icon: ' ', color: 'red' }, // Java
  { name: '.jar', icon: ' ', color: 'red' }, // Java
  { name: '.php', icon: ' ', color: 'magenta' }, // Php

  { name: '.json', icon: ' ', color: 'yellow' }, // Json
  { name: '.html', icon: ' ', color: 'orange' }, // Html
  { name: '.css', icon: ' ', color: 'cyan' }, // Css
  { name: '.scss', icon: ' ', color: 'pink' }, // Scss
  { name: '.less', icon: ' ', color: 'blue' }, // Less
  { name: '.md', icon: ' ', color: 'white' }, // Markdown

  // Databases
  { name: '.sql', icon: ' ', color: 'yellow' }, // SQL

  // Images
  { name: '.jpeg', icon: ' ', color: 'cyan' },
  { name: '.jpg', icon: ' ', color: 'cyan' },
  { name: '.png', icon: ' ', color: 'cyan' },
  { name: '.gif', icon: ' ', color: 'cyan' },
  { name: '.svg', icon: 'ﰟ ', color: 'yellow' },

  // Video
  { name: '.mp4', icon: ' ', color: 'yellow' },
  { name: '.avi', icon: ' ', color: 'yellow' },
  { name: '.mkv', icon: ' ', color: 'yellow' },
  { name: '.flv', icon: ' ', color: 'yellow' },
  { name: '.mov', icon: ' ', color: 'yellow' },
  { name: '.wmv', icon: ' ', color: 'yellow' },

  // Audio
  { name: '.mp3', icon: ' ', color: 'blue' },
  { name: '.wav', icon: ' ', color: 'blue' }
];

export default custom_files;
