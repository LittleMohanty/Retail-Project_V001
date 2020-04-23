package StepDefinition;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import PageObject.AddCustomer_PageObject;
import PageObject.SearchCustomer_PageObject;
import PageObject.login_PageObject;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import junit.framework.Assert;

public class Login_Step extends BaseClass {
	@Before
	public void setup() throws IOException {
		logger = Logger.getLogger("Retail Project");
		PropertyConfigurator.configure("Log4j.properties");
		prop=new Properties();
		FileInputStream file=new FileInputStream("Config.properties");
		prop.load(file);
		
		String browser=prop.getProperty("browser");
		if (browser.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver",prop.getProperty("chromePath"));
			driver = new ChromeDriver();
		}
		else if(browser.equals("ie")) {
			System.setProperty("webdriver.ie.driver",prop.getProperty("iePath"));
			driver = new InternetExplorerDriver();
		}
		else if(browser.equals("firefox")) {
			System.setProperty("webdriver.gecko.driver",prop.getProperty("firePath"));
			driver = new FirefoxDriver();
		}
		
	}

	@Given("^User launch chrome browser$")
	public void user_launch_chrome_browser() throws Throwable {
		
		page = new login_PageObject(driver);
	}

	@When("^user opens url\"([^\"]*)\"$")
	public void user_opens_url(String url) {	
		driver.get(url);
		driver.manage().window().maximize();
		logger.info("*****Browser launch successfully*****");

	}

	@When("^user enter email as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_enter_email_as_and_password_as(String email, String password) {
		page.setEmail(email);
		page.setPassword(password);
		logger.info("****User id and password enter successfully****");

	}

	@When("^click on login$")
	public void click_on_login() {
		page.clickLogin();
		logger.info("***Click the Login successfully****");
	}

	@Then("^the page title should be \"([^\"]*)\"$")
	public void the_page_title_should_be(String title) {
		if (driver.getPageSource().contains("Login was unsuccessful")) {
			driver.close();
			logger.info("****Page title validation successful***");
		} else {
			Assert.assertEquals(title, driver.getTitle());
			logger.info("***Page title validation not successful****");
		}
	}

	@When("^user click on logout button\\.$")
	public void user_click_on_logout_button() throws InterruptedException {
		Thread.sleep(3000);
		page.clickLogout();
		logger.info("****LogOut successful****");
	}

	@Then("^page title should be \"([^\"]*)\"$")
	public void page_title_should_be(String logoutTitle) {
		Assert.assertEquals(logoutTitle, driver.getTitle());
		logger.info("***Logout title validation successful***");
	}

	@Then("^close browser$")
	public void close_browser() {
		driver.quit();
		logger.info("****All browser closed successfully****");

	}
	// ----------ADD customer Testcase--------------------------

	@Then("^User can view Dashboard$")
	public void user_can_view_Dashboard() {
		addCust = new AddCustomer_PageObject(driver);
		Assert.assertEquals("Dashboard / nopCommerce administration", addCust.pageTitle());
	}

	@When("^User click on Customers Menu$")
	public void user_click_on_Customers_Menu() throws InterruptedException {
		Thread.sleep(3000);
		addCust.clickOnCustomersMenu();

	}

	@When("^click on customer Menu Item$")
	public void click_on_customer_Menu_Item() throws InterruptedException {
		addCust.clickOnlnkCustomersMenuitem();
		Thread.sleep(2000);
	}

	@When("^click on Add new button$")
	public void click_on_Add_new_button() throws InterruptedException {
		addCust.clickOnAddnewButton();
		Thread.sleep(2000);
	}

	@Then("^User can view Add new customer page$")
	public void user_can_view_Add_new_customer_page() {
		Assert.assertEquals("Add a new customer / nopCommerce administration", addCust.pageTitle());
	}

	@When("^User enter Customer info$")
	public void user_enter_Customer_info() throws InterruptedException {
		Thread.sleep(3000);
		String email = randonString() + "@gmail.com";
		addCust.setEmail(email);
		addCust.setPassword("Admin123");
		addCust.setCustomerRole("Guests");
		Thread.sleep(2000);
		addCust.setManagerOfVendor("Vendor 2");
		addCust.setGender("Male");
		addCust.setFirstName("Little");
		addCust.setLastName("mohan");
		addCust.setDob("7/05/1995");
		addCust.setCompanyName("cucumber lab");
		addCust.setAdminContent("Testing phase----");

	}

	@When("^click on save button$")
	public void click_on_save_button() throws InterruptedException {
		addCust.clickOnSave();
		Thread.sleep(2000);

	}

	@Then("^User can view confirmation message \"([^\"]*)\"$")
	public void user_can_view_confirmation_message(String msg) {
		Assert.assertTrue(driver.findElement(By.tagName("body")).getText()
				.contains("The new customer has been added successfully."));
	}
	// *****Create steps for search with mail id********

	@When("^Enter customer Email$")
	public void enter_customer_Email() {
		searchCust = new SearchCustomer_PageObject(driver);
		searchCust.setEmail("victoria_victoria@nopCommerce.com");
		logger.info("***Mail id enter successfully****");
	}

	@When("^Click on search button$")
	public void click_on_search_button() throws InterruptedException {
		searchCust.clickSearchButton();
		Thread.sleep(3000);
		logger.info("Search the mail adress successfully");
	}

	@Then("^User should found Email in the Search table$")
	public void user_should_found_Email_in_the_Search_table() {
		boolean status = searchCust.searchByMailId("victoria_victoria@nopCommerce.com");
		Assert.assertEquals(true, status);
		logger.info("User find the mail id successfully");

	}

	// *******Steps for searching customer by name
	@When("^Enter customer firstname$")
	public void enter_customer_firstname() {
		searchCust = new SearchCustomer_PageObject(driver);
		searchCust.setFirstName("Victoria");
		logger.info("First name entered successfully");
	}

	@When("^Enter customer lastname$")
	public void enter_customer_lastname() {
		searchCust.setLastname("Terces");
		logger.info("Last name entered successfully");
	}

	@Then("^User should found name in the search table$")
	public void user_should_found_name_in_the_search_table() {
		boolean result = searchCust.searchByName();
		Assert.assertEquals(true, result);
		logger.info("User able to find the mail successfully ");
	}

}
