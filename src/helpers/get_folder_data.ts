import path from 'path';
import fs from 'fs';
import { folder_structure } from './folder_structure';
import { file_structure } from './file_structure';
import { File, Folder } from '../interfaces';

const ignore_folders_enviroment = ['.git', 'node_modules', 'venv', 'env', '.expo', '.expo-shared'];

const get_folder_data = (base_path: string, folderContents: boolean) => {
  const data: (Folder | File)[] = [];

  const get_data = (src: string): void => {
    const child_names = fs.readdirSync(src);
    child_names.forEach((child_name: string) => {
      const child_address = path.resolve(src, child_name);

      // Convert path to array
      const short_path: string[] = child_address
        .replace(base_path + path.sep, '')
        .split(path.sep);

      const ignored: string | undefined = ignore_folders_enviroment.find(
        folder => folder === short_path[0]
      );

      const information_path = fs.lstatSync(child_address);
      if (information_path.isDirectory()) {
        folder_structure(short_path, data);
        if (!ignored && folderContents) get_data(child_address);
        return;
      }

      file_structure(short_path, information_path.size, data);
    });
  };

  get_data(base_path);
  return data;
};

export default get_folder_data;
