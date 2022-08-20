#!/usr/bin/env node
import path from 'path';
import * as colors from './helpers/colors';

import cli from './lib/cli';
import get_folder_data from './helpers/get_folder_data';
import { alphabetical_order } from './helpers/alphabetical_order';
import { print_data } from './helpers/print_data';

import { Options } from './interfaces';

(() => {
  let base_path = path.resolve(process.cwd());

  if (cli.a) {
    console.log('Name:', colors.green('Oscar Ortiz (zitrocode)'));
    console.log('GitHub:', 'https://github.com/sponsors/zitrocode');
    return;
  }

  if (cli.f) {
    base_path = path.resolve(base_path, cli.f);
  }

  const options: Options = {
    weight: cli.w || false,
    folderContents: cli.folderContents || false
  };

  const data = alphabetical_order(
    get_folder_data(base_path, options.folderContents)
  );

  console.log(colors.green('  ' + base_path));
  print_data(data, data.length, options.weight);
})();
