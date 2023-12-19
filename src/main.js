#!/usr/bin/env node

const program = require('commander')
const {createProject} = require('./createProject.js')
const {gatherPara} = require('./gatherPara.js') 

program
  .version('0.1.0')
  .command('create')
  .alias('c')
  .argument('<ProjectName>')
  .action(async projectName => {
    const parameter = await gatherPara()
    createProject(projectName, parameter)
  })

program.parse(process.argv);
