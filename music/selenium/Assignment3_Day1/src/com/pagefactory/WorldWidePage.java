package com.pagefactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class WorldWidePage {
    
	WebDriver driver;

	@FindBy(xpath=".//*[@id='ctl00_SPWebPartManager1_g_97bee3e1_1a6c_440f_9af5_3f7d217c5446']/div/div[2]/ul/li[5]/a")
	WebElement germany;
	
	public WorldWidePage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	public void clickG()
	{
		germany.click();
	}
}
