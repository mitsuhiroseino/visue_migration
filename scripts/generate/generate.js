const manipulations = require('./manipulations');
const postFormatting = require('../../.prettierrc.json');
const migrate = require('../../build');
const { OPERATION_TYPE } = migrate;
const { GENERATE } = OPERATION_TYPE;
const migration = migrate.default;
const operate = require('../../build/operate');
const fs = require('fs-extra');
const replaceByValues = require('../../build/utils/replaceByValues').default;

const MANIPULATION_TEMPLATE_PATH = './scripts/generate/templates/operate/Image/$';
const MANIPULATION_OUTPUT_PATH = './src/operate/Image/{{uppercamelcase}}';
const MANIPULATION_INDEX_TEMPLATE_PATH = './scripts/generate/templates/operate/Image/index.ts';
const MANIPULATION_INDEX_OUTPUT_PATH = './src/operate/Image/index.ts';

migration.initConfig({
  postFormatting: { ...postFormatting, parser: 'typescript' },
  onIterationStart: (config, params) => {
    fs.removeSync(replaceByValues(MANIPULATION_OUTPUT_PATH, params));
  },
  onIterationEnd: (result) => {
    console.info(`[${result.status}] ${result.outputPath}`);
  },
  tasks: [
    // Imageのmanipulationを生成
    {
      id: 'image-manipulations',
      jobs: {
        templatePath: MANIPULATION_TEMPLATE_PATH,
        outputPath: MANIPULATION_OUTPUT_PATH,
        iteration: manipulations,
        operations: {
          type: GENERATE,
        },
      },
    },
    {
      id: 'image-manipulations-index',
      jobs: {
        templatePath: MANIPULATION_INDEX_TEMPLATE_PATH,
        outputPath: MANIPULATION_INDEX_OUTPUT_PATH,
        params: { manipulations },
        operations: {
          type: GENERATE,
        },
      },
    },
  ],
});

migration
  .run()
  .then((result) => console.info(result))
  .catch((error) => console.error(error));
