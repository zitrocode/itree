import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const cli = yargs(hideBin(process.argv))
  .scriptName('itree')
  .usage('$0 [options]')
  .wrap(yargs.terminalWidth())
  .option('a', {
    alias: 'author',
    type: 'boolean',
    describe: 'Displays information from the author of this package'
  })
  .option('f', {
    alias: 'folder',
    type: 'string',
    describe: 'Display the files inside the folder you specified'
  })
  .alias('h', 'help')
  .option('folder-contents', {
    type: 'boolean',
    describe: 'Show the content of the folder'
  })
  .alias('v', 'version')
  .option('w', {
    alias: 'weight',
    type: 'boolean',
    describe: 'Display the weight of the files'
  })
  .help()
  .parseSync();

export default cli;
