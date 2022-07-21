@demouitest
Feature: Demo test for UI validation

    This is a demo feature file for validating UI tests

Scenario Outline: Tutorials point automation practice
    Given user accesses the automation practice site
    When user enters first name "<Dataset>"
    And user extracts the last name label
    Then user asserts the label value
    When user clicks the 'Button' button

Examples:
    | Dataset  |
    | Dataset1 |