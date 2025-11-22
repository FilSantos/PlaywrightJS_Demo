Feature: Art Institute of Chicago API

@api
Scenario Outline: Fetch artwork from API - <type>
  When I request artworks from the API
  Then the response should have status 200
  And the API should return exactly <quantity> artworks

  Examples:
    | quantity | type     | 
    |    1     | positive | 
    |    2     | negative | 