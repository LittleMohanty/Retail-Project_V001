package PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddCustomer_PageObject {
	public WebDriver driver;

	public AddCustomer_PageObject(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	By lnkCustomers_menu = By.xpath("//a[@href='#']//span[contains(text(),'Customers')]");
	By lnkCustomers_menuitem = By.xpath("//span[@class='menu-item-title'][contains(text(),'Customers')]");

	By btnAddnew = By.xpath("//a[@class='btn bg-blue']"); // Add new

	By txtEmail = By.xpath("//input[@id='Email']");
	By txtPassword = By.xpath("//input[@id='Password']");

	By txtcustomerRoles = By.xpath("//div[@class='k-multiselect-wrap k-floatwrap']");

	By lstitemAdministrators = By.xpath("//li[contains(text(),'Administrators')]");
	By lstitemRegistered = By.xpath("//li[contains(text(),'Registered')]");
	By lstitemGuests = By.xpath("//li[contains(text(),'Guests')]");
	By lstitemVendors = By.xpath("//li[contains(text(),'Vendors')]");

	By drpmgrOfVendor = By.xpath("//*[@id='VendorId']");
	By rdMaleGender = By.id("Gender_Male");
	By rdFeMaleGender = By.id("Gender_Female");

	By txtFirstName = By.xpath("//input[@id='FirstName']");
	By txtLastName = By.xpath("//input[@id='LastName']");

	By txtDob = By.xpath("//input[@id='DateOfBirth']");

	By txtCompanyName = By.xpath("//input[@id='Company']");

	By txtAdminContent = By.xpath("//textarea[@id='AdminComment']");

	By btnSave = By.xpath("//button[@name='save']");
	
	public String pageTitle() {
		return driver.getTitle();
	}

	public void clickOnCustomersMenu() {
		driver.findElement(lnkCustomers_menu).click();
	}

	public void clickOnlnkCustomersMenuitem() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(lnkCustomers_menuitem).click();
	}

	public void clickOnAddnewButton() {
		driver.findElement(btnAddnew).click();
	}

	public void setEmail(String email) {
		driver.findElement(txtEmail).sendKeys(email);
	}

	public void setPassword(String pass) {
		driver.findElement(txtPassword).sendKeys(pass);
	}

	public void setCustomerRole(String role) throws InterruptedException {

           
		driver.findElement(By.xpath("//*[@id=\"SelectedCustomerRoleIds_taglist\"]/li/span[2]")).click();

		driver.findElement(txtcustomerRoles).click();

		WebElement listitem;

		Thread.sleep(3000);

		if (role.equals("Administrators")) {
			listitem = driver.findElement(lstitemAdministrators);
		} else if (role.equals("Guests")) {
			listitem = driver.findElement(lstitemGuests);
		} else if (role.equals("Registered")) {
			listitem = driver.findElement(lstitemRegistered);
		} else if (role.equals("Vendors")) {
			listitem = driver.findElement(lstitemVendors);
		} else {
			listitem = driver.findElement(lstitemGuests);
		}

		
		Thread.sleep(3000);

		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", listitem);

	}

	public void setManagerOfVendor(String value) {
		Select drp = new Select(driver.findElement(drpmgrOfVendor));
		drp.selectByVisibleText(value);
	}

	public void setGender(String gender) {
		if (gender.equals("Male")) {
			driver.findElement(rdMaleGender).click();
		} else if (gender.equals("Female")) {
			driver.findElement(rdFeMaleGender).click();
		} else {
			driver.findElement(rdMaleGender).click();// Default
		}

	}
	public void setFirstName(String fname)
	{
		driver.findElement(txtFirstName).sendKeys(fname);
	}
	
	public void setLastName(String lname)
	{
		driver.findElement(txtLastName).sendKeys(lname);
	}
	
	public void setDob(String dob)
	{
		driver.findElement(txtDob).sendKeys(dob);
	}
	
	public void setCompanyName(String comname)
	{
		driver.findElement(txtCompanyName).sendKeys(comname);
	}
	
	public void setAdminContent(String content)
	{
		driver.findElement(txtAdminContent).sendKeys(content);
	}
	
	public void clickOnSave()
	{
		driver.findElement(btnSave).click();
	}
	
	

}
