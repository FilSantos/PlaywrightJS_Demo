@ui
Feature: Open TCS homepage

  Scenario: Open Tata Consultancy Services landing page
    Given I open "TCS" homepage
    Then the page title should contain "Tata Consultancy Services"
