Feature: PostgreSQL check

  @db
  Scenario: Verify user Filipe exists in users table
    Given I connect to PostgreSQL
    Then the users table should contain a record with name "Filipe"
    And close the database connection
