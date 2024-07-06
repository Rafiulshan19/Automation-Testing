import demo from "../pageobjects/forgotpassword.luma.js"

describe("Demo test", ()=>{
    it("Testing", async ()=>{
        // await browser.url("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
        await demo.clickOnForgotYourPasswordButton()
    })  
})