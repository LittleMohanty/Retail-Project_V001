package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class login_PageObject {
	public WebDriver driver;
	
	public login_PageObject(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="Email")
	WebElement email;
	
	@FindBy(id="Password")
	WebElement password;
	
	@FindBy(xpath="//input[contains(@type, 'submit')]")
	WebElement login;
	
	@FindBy(linkText="Logout")
	WebElement logout;
	
	public void setEmail(String mail) {
		email.sendKeys(mail);
	}
	public void setPassword(String pass) {
		password.sendKeys(pass);
	}
	public void clickLogin() {
		login.click();
	}
	public void clickLogout() {
		logout.click();
	}
	

}
