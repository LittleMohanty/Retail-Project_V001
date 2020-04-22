$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6768664100,
  "status": "passed"
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
  "duration": 298925400,
  "status": "passed"
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
  "duration": 6016362100,
  "status": "passed"
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
  "duration": 367346200,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step.click_on_login()"
});
formatter.result({
  "duration": 6041226200,
  "status": "passed"
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
  "duration": 180944100,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step.user_click_on_logout_button()"
});
formatter.result({
  "duration": 4708757100,
  "status": "passed"
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
  "duration": 13142100,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step.close_browser()"
});
formatter.result({
  "duration": 843130500,
  "status": "passed"
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
formatter.before({
  "duration": 5230287700,
  "status": "passed"
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
  "duration": 568100,
  "status": "passed"
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
  "duration": 5909420100,
  "status": "passed"
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
  "duration": 450550500,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step.click_on_login()"
});
formatter.result({
  "duration": 1380948500,
  "status": "passed"
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
  "duration": 15426500,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step.user_click_on_logout_button()"
});
formatter.result({
  "duration": 3054025000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Logout\"}\n  (Session info: chrome\u003d80.0.3987.163)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BIKASH\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\Bikash\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:60782}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0dfb6d43fa10e988f4180982544771b6\n*** Element info: {Using\u003dlink text, value\u003dLogout}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat PageObject.login_PageObject.clickLogout(login_PageObject.java:37)\r\n\tat StepDefinition.Login_Step.user_click_on_logout_button(Login_Step.java:90)\r\n\tat ✽.When user click on logout button.(./Feature/Login.feature:20)\r\n",
  "status": "failed"
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
formatter.before({
  "duration": 5463929000,
  "status": "passed"
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
  "duration": 922500,
  "status": "passed"
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
  "duration": 6016454300,
  "status": "passed"
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
  "duration": 344858800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step.click_on_login()"
});
formatter.result({
  "duration": 5331124200,
  "status": "passed"
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
  "duration": 297689000,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step.user_click_on_logout_button()"
});
formatter.result({
  "duration": 4729084800,
  "status": "passed"
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
  "duration": 17121800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step.close_browser()"
});
formatter.result({
  "duration": 811636700,
  "status": "passed"
});
});