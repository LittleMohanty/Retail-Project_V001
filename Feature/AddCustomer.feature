Feature: Customer
@regression
  Scenario: Add a new Customer
    Given User launch chrome browser
    When user opens url"https://admin-demo.nopcommerce.com/login"
    And user enter email as "admin@yourstore.com" and password as "admin"
    And click on login
    Then User can view Dashboard
    When User click on Customers Menu
    And click on customer Menu Item
    And click on Add new button
    Then User can view Add new customer page
    When User enter Customer info
    And click on save button
    Then User can view confirmation message "The new customer has been added successfully."
    Then close browser
