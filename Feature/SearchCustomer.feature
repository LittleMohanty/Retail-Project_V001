Feature: Search Customer

  Background: Common scenarios validation
    Given User launch chrome browser
    When user opens url"https://admin-demo.nopcommerce.com/login"
    And user enter email as "admin@yourstore.com" and password as "admin"
    And click on login
    Then User can view Dashboard
@regression
  Scenario: Search Customer by EMailID
    When User click on Customers Menu
    And click on customer Menu Item
    And Enter customer Email
    When Click on search button
    Then User should found Email in the Search table
    Then close browser
@regression
  Scenario: Search Customer by name
    When User click on Customers Menu
    And click on customer Menu Item
    And Enter customer firstname
    And Enter customer lastname
    When Click on search button
    Then User should found name in the search table
    Then close browser
