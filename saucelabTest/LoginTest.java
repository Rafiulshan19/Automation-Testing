package saucelabTest;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginTest {

	public static void main(String[] args) throws InterruptedException {
		
		WebDriverManager.edgedriver().setup();
		WebDriver driver = new EdgeDriver();
		
//		driver.get("https://www.saucedemo.com/");
		driver.navigate().to("https://www.saucedemo.com/");
		
		/*Maximize the window*/
		driver.manage().window().maximize();
		
		Thread.sleep(3000);
		
		driver.close();
		
		driver.quit();
	}

}
