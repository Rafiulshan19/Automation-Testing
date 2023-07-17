package demoSiteTest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class demo {

	public static void main(String[] args) throws InterruptedException {


		WebDriverManager.edgedriver().setup();
		WebDriver driver = new EdgeDriver();
		driver.get("https://demo.opencart.com/");
		
		driver.manage().window().maximize();
		
		driver.findElement(By.xpath("//i[@class='fas fa-user']")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//a[@class='dropdown-item'][normalize-space()='Login']")).click();
		Thread.sleep(1000);
		driver.findElement(By.cssSelector("input#input-email")).sendKeys("xyz@yahoo.com");
		Thread.sleep(1000);
		driver.findElement(By.cssSelector("input#input-password")).sendKeys("123456");
		Thread.sleep(1000);
		driver.findElement(By.cssSelector("button[type='submit']")).click();
		
		Thread.sleep(2000);
		
		driver.close();
		//All ok
		
		
//		driver.get("https://www.gozayaan.com/");
		
//		driver.manage().window().maximize();
//		
//		driver.findElement(By.xpath("//span[@class='search-type-tab active']")).click();
//		
//		Thread.sleep(1000);
//		
//		WebElement ra1 = driver.findElement(By.xpath("(//span[@class='radio-btn'])[2]"));
//		System.out.println(ra1.isSelected());
//		ra1.click();
//		Thread.sleep(2000);
//		WebElement ra2 = driver.findElement(By.xpath("(//span[@class='radio-btn'])[3]"));
//		System.out.println(ra2.isSelected());
//		ra2.click();
		
		

	}

}
