const inquirerPromise = import('inquirer')
const chalkPromise = import('chalk')
const templates = [
  {
    name:'React',
    description:'React + Redux + Vite + Antd'
  },
  {
    name: "Express",
    description:"Express + cors + nodemon"
  }
  // {
  //   name:'Vue',
  //   description:'React + Redux + Vite + Antd'
  // },
]
const language = [
  {
    name: "JS",
    description:"Code lang will be Javascript"
  },
  {
    name: "TS",
    description:"Code lang will be Typescript"
  }
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
      },
      {
        type:'list',
        name:'language_type',
        message: chalk.yellowBright('选择语言类型'),
        choices:language.map(item => item.name)
      }
    ])
  return parameter
}



module.exports={gatherPara}