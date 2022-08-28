import bytes from 'bytes';
import get_custom_file from './custom_files';
import { Folder, ItemCustom } from '../interfaces';

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
