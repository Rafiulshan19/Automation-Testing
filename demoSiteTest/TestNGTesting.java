package demoSiteTest;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class TestNGTesting {

	WebDriver driver;
	
	@BeforeTest
	public void setUp() {
		
		WebDriverManager.edgedriver().setup();
		driver = new EdgeDriver();
				
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get("https://www.saucedemo.com/");
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(1));
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(2));
		
		login("standard_user", "secret_sauce");
	}
	
	@Test(priority=1)
	public  void verifyPageTittleTest() {

		String tittle = driver.getTitle();
		System.out.println("Tittle is: " + tittle);
		Assert.assertEquals(tittle, "Swag Labs");
		
	}
		
	@Test(priority=2)
	public void verifyMenuBarTest() {
		
		WebElement sort = driver.findElement(By.xpath("//select[@class='product_sort_container']"));
		sort.click();
		
		WebElement dropDown = driver.findElement(By.className("product_sort_container"));
		Select opt = new Select(dropDown);
		opt.selectByIndex(3);
		
	}
	
	@Test(priority=3)
	public void verifyAddingItemsTest() {
		
		WebElement addItem1 = driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']"));
		addItem1.click();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
		WebElement addItem2 = driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-backpack']"));
		addItem2.click();
		
	}
	
	@Test(priority=4)
	public void verifyCartTest() {
		WebElement cart = driver.findElement(By.xpath("//a[@class='shopping_cart_link']"));
		cart.click();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
	}
	
	
	@Test(priority=5)
	public void verifyRemoveItemFromCart() {
		WebElement removeItem = driver.findElement(By.xpath("//button[@id='remove-sauce-labs-backpack']"));
		removeItem.click();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
	}

	
	@Test(priority=6)
	public void verifyContinueShoppingButton() {
		WebElement continueShop = driver.findElement(By.xpath("//button[@id='continue-shopping']"));
		continueShop.click();
		
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
	}
	

	@Test(priority=7)
	public void verifyOtherItem() {
		WebElement other = driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-bike-light']"));
		other.click();
	}
	//
	@Test(priority=8)
	public void verifyOtherItemFromCartTest() {
		WebElement cart2 = driver.findElement(By.xpath("//a[@class='shopping_cart_link']"));
		cart2.click();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
	}
	
	
	@Test(priority=9)
	public void verifyCheckoutButtonTest() {
		WebElement check = driver.findElement(By.xpath("//button[@id='checkout']"));
		check.click();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
	}
	
	@Test(priority=10)
	public void verifyCheckoutInfoTest() {
		WebElement firstName = driver.findElement(By.xpath("//input[@id='first-name']"));
		firstName.sendKeys("Shan");
		WebElement lastName = driver.findElement(By.xpath("//input[@id='last-name']"));
		lastName.sendKeys("Rafi");
		WebElement postalCode = driver.findElement(By.xpath("//input[@id='postal-code']"));
		postalCode.sendKeys("1208");
		
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(2));
		
		WebElement continueBtn = driver.findElement(By.xpath("//input[@id='continue']"));
		continueBtn.click();
	}
	
	
		
	@Test(priority=11)
	public void verifyFinishButtonTest() {
		WebElement finishBtn = driver.findElement(By.xpath("//button[@id='finish']"));
		finishBtn.click();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
	}
	
	@Test(priority=12)
	public void verifyBackTohomeTest() {
		WebElement back = driver.findElement(By.xpath("//button[@id='back-to-products']"));
		back.click();
	}
	
	@Test(priority=13)
	public void verifyLogOutTest() {
		WebElement settingButton = driver.findElement(By.xpath("//button[@id='react-burger-menu-btn']"));
		settingButton.click();
		
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(2));
		
		WebElement logOutbutton = driver.findElement(By.xpath("//a[@id='logout_sidebar_link']"));
		logOutbutton.click();
	}
	
	
	
	@AfterTest
	public void finishTest() {
		
		driver.close();
		driver.quit();
	}
	
	public void login(String username, String password) {
		
		driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys(username); 
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);
		WebElement login = driver.findElement(By.xpath("//input[@id='login-button']"));
//		assert login.isDisplayed();
		login.click();
	}

}

