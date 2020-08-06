const chalk = require('chalk');
const { exec, execSync } = require('child_process');
const preBash = execSync(`!!`).split(' ')
const currentBranch = execSync(`git branch | awk '$1 == "*"{print $2}'`);
const white = ['dev', 'develop', 'test', 'release', 'master'];

const isWhite = white.filter((w) => preBash.includes(w));
if(!isWhite.length){
    console.log(chalk.yellow(`🔨 合并完成后，请删除本次合并的分支.`));
}
process.exit(0);