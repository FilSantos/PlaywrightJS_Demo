@ui
Feature: Amazon Product Search

  Background: Open Browser
    Given I open Amazon homepage

  Scenario: Search for PlayStation 5 console and validate results - Positive
    When I search for "PlayStation 5 console"
    Then I should see more than 2000 results

  Scenario: Search for PlayStation 5 console and validate results - False
    When I search for "PlayStation 5 console"
    Then I should see more than 70000 results