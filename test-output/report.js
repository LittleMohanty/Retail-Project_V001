$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user opens url\"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on logout button.",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Step.user_launch_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "Login_Step.user_opens_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 21
    },
    {
      "val": "admin",
      "offset": 59
    }
  ],
  "location": "Login_Step.user_enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step.click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 26
    }
  ],
  "location": "Login_Step.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step.user_click_on_logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Login_Step.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Login Data test",
  "description": "",
  "id": "login;login-data-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user opens url\"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enter email as \"\u003cemail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click on logout button.",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login;login-data-test;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 25,
      "id": "login;login-data-test;;1"
    },
    {
      "cells": [
        "little@mohan.com",
        "admin"
      ],
      "line": 26,
      "id": "login;login-data-test;;2"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 27,
      "id": "login;login-data-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Login Data test",
  "description": "",
  "id": "login;login-data-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user opens url\"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enter email as \"little@mohan.com\" and password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click on logout button.",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Step.user_launch_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "Login_Step.user_opens_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "little@mohan.com",
      "offset": 21
    },
    {
      "val": "admin",
      "offset": 56
    }
  ],
  "location": "Login_Step.user_enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step.click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 26
    }
  ],
  "location": "Login_Step.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step.user_click_on_logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Login_Step.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Login Data test",
  "description": "",
  "id": "login;login-data-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user opens url\"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click on logout button.",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Step.user_launch_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 15
    }
  ],
  "location": "Login_Step.user_opens_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 21
    },
    {
      "val": "admin",
      "offset": 59
    }
  ],
  "location": "Login_Step.user_enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step.click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 26
    }
  ],
  "location": "Login_Step.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step.user_click_on_logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Login_Step.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});