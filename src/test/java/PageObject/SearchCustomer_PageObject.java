package PageObject;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Utilities.WaitHelper;

public class SearchCustomer_PageObject {
 public WebDriver driver;
 WaitHelper helper;
 
 public SearchCustomer_PageObject(WebDriver driver) {
	 this.driver=driver;
	 PageFactory.initElements(driver, this);
	 helper= new WaitHelper(driver);
 }
 
 @FindBy(id="SearchEmail")
 WebElement Email;
 
 @FindBy(id="SearchFirstName")
 WebElement Firstname;
 
 @FindBy(id="SearchLastName")
 WebElement lastname;
 
 @FindBy(id="search-customers")
 WebElement searchbtn;
 
@FindBy(xpath ="//table[@id=\"customers-grid\"]")
WebElement table;

@FindBy(xpath="//table[@id=\"customers-grid\"]//tbody/tr")
List<WebElement>tableRows;

@FindBy(xpath="//table[@id=\"customers-grid\"]//tbody/tr/td")
List<WebElement>tablecolumn;


public void setEmail(String mail) {
	helper.waitForElement(Email, 30);
	Email.clear();
	Email.sendKeys(mail);	
}
public void setFirstName(String fstname) {
	helper.waitForElement(Firstname, 30);
	Firstname.clear();
	Firstname.sendKeys(fstname);
}
public void setLastname(String lstname) {
	helper.waitForElement(lastname, 30);
	lastname.clear();
	lastname.sendKeys(lstname);
}
public void clickSearchButton() {
	searchbtn.click();
}
public int getNoOfRows() {
	return tableRows.size();
}
public int getNoOfColumn() {
	return tablecolumn.size();
}

public boolean searchByMailId(String mail) {
	boolean status=false;
	for(int i=1;i<=getNoOfRows();i++) {
		String email=driver.findElement(By.xpath("//table[@id=\"customers-grid\"]//tbody/tr["+i+"]/td[2]")).getText();
		System.out.println(email);
		if(email.equals(mail)) {
			status=true;
		}
		
	}
	return status;
	
}
public boolean searchByName() {
	boolean status=false;
	for(int i=1;i<=getNoOfRows();i++) {
		String custName=driver.findElement(By.xpath("//table[@id=\"customers-grid\"]//tbody/tr["+i+"]/td[3]")).getText();
		System.out.println(custName);
		String[] ar=custName.split(" ");
		if(ar[0].equals("Victoria")&& ar[1].equals("Terces")) {
			status=true;
		}
		
	}
	return status;
}










}
