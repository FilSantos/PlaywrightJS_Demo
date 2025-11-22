
Feature: Open TCS homepage

  @TC_tcs @mobile
  Scenario: Open Tata Consultancy Services landing page - mobile
    Given I open "TCS" homepage
    Then the page title should contain "Tata Consultancy Services"

  @TC_tcs @ui
  Scenario: Open Tata Consultancy Services landing page - desktop
    Given I open "TCS" homepage
    Then the page title should contain "Tata Consultancy Services"


  @TC_pwc @ui
  Scenario: Open Tata Consultancy Services landing page and verify PwC in title wrongly
    Given I open "TCS" homepage
    Then the page title should contain "PwC"
