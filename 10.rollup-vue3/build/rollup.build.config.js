const rollup = require('rollup')
const chalk = require('chalk')
const glob = require('glob')
const { COMPONENTS_DIR } = require('./config.js')
const {getComponentRollupConfig} = require('./rollup.components.config.js')

function build() {
    const componentsPath = glob.sync(`./${COMPONENTS_DIR}/!(*.*)`)
    componentsPath.forEach(componentPath => {
        const [, componentName] = componentPath.match(
          /.\/src\/components\/(.*)$/
        )
        buildComponents(componentName)
    })
}

async function buildComponents(componentName) {
  const { inputConfig, outputConfig } = getComponentRollupConfig(componentName)
  try {
    const bundle = await rollup.rollup(inputConfig)
    await bundle.write(outputConfig)
    console.log('component ' + componentName + ' are build successfully')
  } catch (error) {
    console.log(chalk.red(error))
    process.exit(1)
  }
}

console.log(chalk.yellow('begin to build components...'))

build()

console.log(chalk.green('success~'))
