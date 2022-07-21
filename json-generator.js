const Formatter = require("cucumber-json-report-formatter").Formatter
// import {Formatter} from 'cucumber-json-report-formatter';

const formatter = new Formatter()
const sourceFile = "./testResults/cucumberJson/cucumber-messages.ndjson"
const outputFile = "./testResults/cucumberJson/cucumber-results.json"
formatter.parseCucumberJson(sourceFile, outputFile)