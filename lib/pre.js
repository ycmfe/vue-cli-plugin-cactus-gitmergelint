const chalk = require('chalk');
const { exec, execSync } = require('child_process');
const currentBranch = execSync(`git branch | awk '$1 == "*"{print $2}'`);
// master分支合并时，强制要求rebase命令
if(currentBranch === 'master'){
    console.log(chalk.red('🔧 合并到master分支请使用rebase命令.'));
    process.exit(1);
} else{
    console.log(chalk.yellow(`🔨 合并完成后，请删除本次合并的分支.`));
    process.exit(0);
}
