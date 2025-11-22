@ui
Feature: Amazon E-commerce Product Search

  Background: Open Browser
    Given I open Amazon homepage

  Scenario: Search for PlayStation 5 console and validate results - positive
    When I search for "PlayStation 5 console"
    Then I should see more than 2000 results

  Scenario: Search for PlayStation 5 console and validate results - negative
    When I search for "PlayStation 5 console"
    Then I should see more than 70000 results