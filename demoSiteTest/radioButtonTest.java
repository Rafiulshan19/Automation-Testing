package demoSiteTest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class radioButtonTest {

	public static void main(String[] args) throws InterruptedException {
		
		WebDriverManager.edgedriver().setup();
		WebDriver driver = new EdgeDriver();
		driver.get("https://trytestingthis.netlify.app/");
		driver.manage().window().maximize();
		
		driver.findElement(By.id("fname")).sendKeys("Samiul");
		driver.findElement(By.id("lname")).sendKeys("Shan");
		
		WebElement radioButton = driver.findElement(By.id("male"));
		radioButton.click();
		Thread.sleep(1000);

		System.out.println(radioButton.isDisplayed());
		System.out.println(radioButton.isEnabled());
		System.out.println(radioButton.isSelected());
		
		driver.findElement(By.id("female")).click();
		Thread.sleep(1000);
		driver.findElement(By.id("other")).click();
		Thread.sleep(1000);
		
		driver.close();

	}

}
