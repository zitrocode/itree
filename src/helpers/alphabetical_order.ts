import { Folder } from '../interfaces';

export const alphabetical_order = (childrens: Folder[]): Folder[] => {
  childrens
    .sort((a: Folder, b: Folder) => {
      const before_path = a.name.toLowerCase();
      const after_path = b.name.toLowerCase();

      if (before_path > after_path) {
        if (a.type > b.type) return 1;
        return -1;
      }

      return 0;
    })
    .reverse();

  childrens.forEach((folder: Folder) => {
    if (folder.type === 'folder') {
      alphabetical_order(folder.childrens || []);
    }
  });

  return childrens;
};
