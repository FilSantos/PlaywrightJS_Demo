@ui
Feature: Open TCS homepage

  @TC_tcs
  Scenario: Open Tata Consultancy Services landing page
    Given I open "TCS" homepage
    Then the page title should contain "Tata Consultancy Services"

  @TC_pwc
  Scenario: Open Tata Consultancy Services landing page and verify PwC in title wrongly
    Given I open "TCS" homepage
    Then the page title should contain "PwC"
