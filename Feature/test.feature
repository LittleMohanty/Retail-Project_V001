Feature: Login

  @sanity
  Scenario: Successful login with valid credentials
    Given User launch chrome browser
    When user opens url"https://admin-demo.nopcommerce.com/login"
    And user enter email as "admin@yourstore.com" and password as "admin"
    And click on login
    Then the page title should be "Dashboard / nopCommerce administration"
    When user click on logout button.
    Then page title should be "Your store. Login"
    And close browser

  