const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './testResults/cucumberJson/',
	reportPath: './testResults/cucumberReport/',
	openReportInBrowser: true,
    pageTitle: "Cypress Cucumber Framework HTML Report",
    reportName: "Cypress Cucumber Framework HTML Report",
    displayDuration: true,
    hideMetadata: true
});