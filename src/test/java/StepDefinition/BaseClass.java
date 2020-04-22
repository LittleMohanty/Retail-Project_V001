package StepDefinition;

import java.util.Properties;

import org.apache.commons.lang.RandomStringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import PageObject.AddCustomer_PageObject;
import PageObject.SearchCustomer_PageObject;
import PageObject.login_PageObject;

public class BaseClass {
	public WebDriver driver;
	public login_PageObject page;
    public AddCustomer_PageObject addCust;
    public SearchCustomer_PageObject searchCust;
    
    public static Logger logger;
    public Properties prop;
   
    //creating randomString for unique mail id
    public static String randonString() {
    	String generateString1=RandomStringUtils.randomAlphabetic(5);
		return generateString1;
    	
    }
}
