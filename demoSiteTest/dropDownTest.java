package demoSiteTest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class dropDownTest {

	public static void main(String[] args) throws InterruptedException {
		
		WebDriverManager.edgedriver().setup();
		WebDriver driver = new EdgeDriver();
		driver.get("https://trytestingthis.netlify.app/");
		driver.manage().window().maximize();
		
		WebElement dropDown = driver.findElement(By.id("option"));
		Select selectOp = new Select(dropDown);
		
		Thread.sleep(1000);
		selectOp.selectByIndex(1);
		Thread.sleep(1000);
		selectOp.selectByValue("option 2");
		Thread.sleep(1000);
		selectOp.selectByVisibleText("Option 3");
		Thread.sleep(1000);
		
		driver.quit();
	}

}
