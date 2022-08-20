import bytes from 'bytes';
import { Folder, ItemCustom } from '../interfaces';

const get_custom_file: ItemCustom[] = [
  { name: 'package.json', icon: ' ', color: 'green' },
  { name: 'package-lock.json', icon: ' ', color: 'green' },
  { name: '.gitignore', icon: ' ', color: 'orange' },
  { name: 'LICENSE', icon: ' ', color: 'red' },

  { name: '.json', icon: ' ', color: 'yellow' },
  { name: '.html', icon: ' ', color: 'orange' },
  { name: '.css', icon: ' ', color: 'cyan' },
  { name: '.scss', icon: ' ', color: 'pink' },
  { name: '.less', icon: ' ', color: 'blue' },
  { name: '.js', icon: ' ', color: 'yellow' },
  { name: '.mjs', icon: ' ', color: 'yellow' },
  { name: '.cjs', icon: ' ', color: 'yellow' },
  { name: '.jsx', icon: ' ', color: 'yellow' },
  { name: '.ts', icon: ' ', color: 'blue' },
  { name: '.mts', icon: ' ', color: 'blue' },
  { name: '.tsx', icon: ' ', color: 'blue' },
  { name: '.lock', icon: ' ', color: 'white' },
  { name: '.config', icon: ' ', color: 'white' },

  // For lua
  { name: '.lua', icon: ' ', color: 'blue' },

  // For vim
  { name: '.vim', icon: ' ', color: 'green' },

  // For python
  { name: '.py', icon: ' ', color: 'magenta' },

  // For markdown
  { name: '.md', icon: ' ', color: 'cyan' },

  // For images 
  { name: '.jpeg', icon: ' ', color: 'cyan' },
  { name: '.jpg', icon: ' ', color: 'cyan' },
  { name: '.png', icon: ' ', color: 'cyan' },
  { name: '.gif', icon: ' ', color: 'cyan' },

  // For vector
  { name: '.svg', icon: 'ﰟ ', color: 'yellow' }
];

const custom_default_file: ItemCustom = {
  name: 'default',
  icon: ' ',
  color: 'white'
};

export const file_structure = (
  file_path: string[],
  size: number,
  childrens: Folder[]
) => {
  if (file_path.length === 1) {
    const decoration: ItemCustom =
      get_custom_file.find(file => file_path[0].includes(file.name)) ||
      custom_default_file;

    childrens.push({
      type: 'file',
      name: file_path[0],
      size: bytes.format(size),
      decoration: {
        icon: decoration.icon,
        color: decoration.color
      }
    });
    return;
  }

  if (file_path.length > 1) {
    const current_dir: Folder | undefined = childrens.find(
      (dir: Folder) => dir.name === file_path[0]
    );

    if (current_dir) {
      file_path.splice(0, 1);
      file_structure(file_path, size, current_dir.childrens || []);
    }
  }
};
