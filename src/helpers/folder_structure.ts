import { Folder, ItemCustom } from '../interfaces';

const get_custom_folder: ItemCustom[] = [
  { name: '.git', icon: ' ', color: 'orange' },
  { name: '.github', icon: ' ', color: 'white' },
  { name: '.vscode', icon: ' ', color: 'cyan' },
  { name: 'node_modules', icon: ' ', color: 'green' },
  { name: 'images', icon: ' ', color: 'cyan' },
  { name: 'img', icon: ' ', color: 'cyan' }
];

const custom_default_folder: ItemCustom = {
  name: 'default',
  icon: ' ',
  color: 'white'
};

export const folder_structure = (
  dirs: string[],
  childrens: Folder[] = []
): void => {
  let current_folder = childrens.find(folder => folder.name === dirs[0]);

  if (current_folder === undefined) {
    const decoration: ItemCustom =
      get_custom_folder.find(folder => folder.name === dirs[0]) ||
      custom_default_folder;

    childrens.push({
      type: 'folder',
      name: dirs[0],
      decoration: {
        icon: decoration.icon,
        color: decoration.color
      },
      childrens: []
    });
  }

  // Reload folder
  current_folder = childrens.find((dir: Folder) => dir.name === dirs[0]);
  // Delete first element.
  if (current_folder) {
    dirs.splice(0, 1);
    if (dirs.length !== 0) {
      folder_structure(dirs, current_folder.childrens);
    }
  }
};
