const inquirerPromise = import('inquirer')
const chalkPromise = import('chalk')
const templates = [
  {
    name:'React',
    description:'React + Redux + Vite + Antd'
  },
  // {
  //   name:'Vue',
  //   description:'React + Redux + Vite + Antd'
  // },
]
const gatherPara = async()=>{
  const inquirer = (await inquirerPromise).default
  const chalk = (await chalkPromise).default
  const parameter = await inquirer.prompt([
      {
        type:'list',
        name:'framework_type',
        message: chalk.yellowBright('选择框架类型'),
        choices:templates.map(item => item.name)
      }
    ])
  return parameter
}



module.exports={gatherPara}