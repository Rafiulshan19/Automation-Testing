package demoSiteTest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class B122_Shan_SwagLabTest {

	public static void main(String[] args) throws InterruptedException {

		WebDriverManager.edgedriver().setup();
		WebDriver driver = new EdgeDriver(); 
		
		driver.get("https://www.saucedemo.com/");
		
		driver.manage().window().maximize();
		Thread.sleep(2000);
		driver.findElement(By.id("user-name")).sendKeys("standard_user");
		driver.findElement(By.id("password")).sendKeys("secret_sauce");
		driver.findElement(By.id("login-button")).click();
		
		Thread.sleep(3000);
		
		driver.findElement(By.id("add-to-cart-sauce-labs-fleece-jacket")).click();
		Thread.sleep(1000);
		
		driver.findElement(By.className("shopping_cart_badge")).click();
		Thread.sleep(1000);
		
		driver.findElement(By.id("checkout")).click();
		Thread.sleep(1000);
		
		driver.findElement(By.id("first-name")).sendKeys("Rafiul");
		driver.findElement(By.id("last-name")).sendKeys("Shan");
		driver.findElement(By.id("postal-code")).sendKeys("1207");
		driver.findElement(By.id("continue")).click();
		Thread.sleep(1000);
		
		driver.findElement(By.id("finish")).click();
		Thread.sleep(2000);
		
		driver.findElement(By.id("back-to-products")).click();
		Thread.sleep(1000);
		
		driver.findElement(By.id("react-burger-menu-btn")).click();
		Thread.sleep(1000);
				
		driver.findElement(By.id("logout_sidebar_link")).click();
		 
		
		Thread.sleep(1000);
		
		driver.close();
		
	}

}
