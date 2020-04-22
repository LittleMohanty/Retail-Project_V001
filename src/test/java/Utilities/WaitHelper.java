package Utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WaitHelper {
 public WebDriver driver;
 public WaitHelper(WebDriver driver){
	 this.driver=driver;
 }
 public void waitForElement(WebElement Element, long timeOutInseconds) {
	 WebDriverWait wait=new WebDriverWait(driver, timeOutInseconds);
	 wait.until(ExpectedConditions.visibilityOf(Element));
 }
}
