type Type = 'file' | 'folder';

type Colors =
  | 'red'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'blue'
  | 'pink'
  | 'magenta'
  | 'cyan'
  | 'white';

export interface Options {
  weight: boolean;
  folderContents: boolean;
}

export interface File {
  type: Type;
  name: string;
  size?: string;
  decoration: {
    color: Colors;
    icon: string;
  };
}

export interface Folder extends File {
  childrens?: Folder[];
}

export interface ItemCustom {
  name: string;
  color: Colors;
  icon: string;
}

export interface CLI {
  author: boolean;
  noEnvironmentFolder: boolean;
  weight: boolean;
  folder: string;
}
