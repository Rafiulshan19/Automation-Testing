package demoSiteTest;

import java.net.http.WebSocketHandshakeException;
import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class B122_Shan_OpenCartTest {

	@SuppressWarnings("deprecation")
	public static void main(String[] args) throws InterruptedException {
		
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.get("https://demo.opencart.com/");
		
		driver.manage().window().maximize();
		
		driver.findElement(By.xpath("//i[@class='fas fa-user']")).click();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
		driver.findElement(By.xpath("//a[normalize-space()='Register']")).click();
//		Thread.sleep(1000);
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
		
		driver.findElement(By.xpath("//input[@id='input-firstname']")).sendKeys("Abcd");
		driver.findElement(By.xpath("//input[@id='input-lastname']")).sendKeys("Xyz");
		driver.findElement(By.xpath("//input[@id='input-email']")).sendKeys("xyz123@yahoo.com");
		driver.findElement(By.xpath("//input[@id='input-password']")).sendKeys("xyz@000#");
//		Thread.sleep(1000);
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
		
		driver.findElement(By.xpath("//input[@id='input-newsletter-yes']")).click();
		driver.findElement(By.xpath("//input[@name='agree']")).click();
		driver.findElement(By.xpath("//button[@type='submit']")).click();
		
// Login
		driver.findElement(By.xpath("//a[normalize-space()='login page']")).click();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(2));
		
		driver.findElement(By.cssSelector("input#input-email")).sendKeys("xyz@yahoo.com");
		driver.findElement(By.cssSelector("input#input-password")).sendKeys("123456");
		driver.findElement(By.cssSelector("button[type='submit']")).click();
		
//		Thread.sleep(1000);
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
		
		driver.findElement(By.xpath("//img[@title='Your Store']")).click();
		
		WebElement iphone = driver.findElement(By.xpath("//button[@type='submit']"));
		System.out.println(iphone.isSelected());
		System.out.println(iphone.isDisplayed());
		System.out.println(iphone.isEnabled());
		iphone.click();

		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
		
		driver.close();

	}

}
