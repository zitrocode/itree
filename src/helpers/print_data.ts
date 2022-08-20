import * as colors from './colors';
import { Folder } from '../interfaces';

export const print_data = (
  childrens: Folder[],
  childrens_length: number,
  show_weight: boolean,
  indent = 0
) => {
  childrens.forEach((folder: Folder, index: number) => {
    const symbol: string = childrens_length !== index + 1 ? '├─' : '└─';
    const separator: string = '│     '.repeat(indent) + `${symbol}───`;
    const name: string = colors[folder.decoration.color](
      folder.decoration.icon,
      folder.name
    );
    let weight = '';

    if (show_weight && folder.size) {
      weight = colors.gray(`(${folder.size})`);
    }

    console.log(separator, name, weight);

    if (folder.type === 'folder') {
      if (folder.childrens) {
        if (folder.childrens.length > 0) {
          const new_indent = indent + 1;
          print_data(
            folder.childrens,
            folder.childrens.length,
            show_weight,
            new_indent
          );
        }
      }
    }
  });
};
