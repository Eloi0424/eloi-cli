const path = require('path');
const fs = require('fs-extra');
const download = require('download-git-repo');

async function createProject(projectName, parameter) {
  const spinner = (await import('ora')).default("Downloading").start();
  try {
    await downloadTemplate(projectName, parameter);
    spinner.succeed('Template downloaded.');

    // spinner.info('Customizing template...');
    // customizeTemplate(targetPath, answers);
    // spinner.succeed('Template customized.');

    console.log(`\n🎉 Project ${projectName} created successfully.`);
  } catch (error) {
    spinner.fail('Error: ' + error.message);
  }
}

function downloadTemplate(projectName, parameter) {
  return new Promise((resolve, reject) => {
    download(`eloi0424/${parameter.framework_type}-${parameter.language_type}-Template`, projectName, error => {
      if (error) {
        // console.log(parameter.framework_type,parameter.language_type)
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
function customizeTemplate(targetPath, answers) {
  const packageJsonPath = path.join(targetPath, 'package.json');
  const packageJson = require(packageJsonPath);

  packageJson.author = answers.author;
  // 根据用户输入的其他信息，如项目描述、许可证等，自定义模板

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

module.exports = { createProject } 
