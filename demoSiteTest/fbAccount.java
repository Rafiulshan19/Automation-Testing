package demoSiteTest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.edge.EdgeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class fbAccount {

	public static void main(String[] args) throws InterruptedException {
		
		WebDriverManager.edgedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.facebook.com/signup/");
		driver.manage().window().maximize();
		
		driver.findElement(By.id("u_0_b_IE")).sendKeys("New");
//		driver.findElement(By.xpath("//input[@id='u_0_d_H0']")).sendKeys("Glober");
//		driver.findElement(By.xpath("//input[@id='u_0_g_HP']")).sendKeys("slayer@mailinator.com");
//		driver.findElement(By.xpath("//input[@id='password_step_input']")).sendKeys("Slayer#0000");
//		
		
//		Thread.sleep(3000);
//		driver.close();
	}

}
