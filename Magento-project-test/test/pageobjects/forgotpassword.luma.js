class forgotPassword{
    
    get signInText(){
        return $('//a[contains(text(),"Sign In")]')
    }
    
    get forgotYourPasswordText(){
        return $('//span[contains(text(),"Forgot Your Password?")]')
    }

    get emailInputForForgotPass(){
        return $('#email_address')
    }

    get resetButton(){
        return $('//span[contains(text(),"Reset My Password")]')
    }

    async clickOnSignInText(){
        (await this.signInText).click()  
    }

    async typeOnEmailForForgetPassword(email){
          (await this.emailInputForForgotPass).setValue(email)
    }

    async clickOnResetButton(){
        (await this.resetButton).click()
    }

    async clickOnForgotYourPasswordText(){
        const linkedText = (await this.forgotYourPasswordText)
        await linkedText.click({ button: 'right' })  //
        await browser.keys(['ArrowDown', 'ArrowDown', 'Enter'])
        const newWindow = await browser.getWindowHandles()

        await browser.switchToWindow(newWindow[1])
        await browser.pause(2000)
        // await browser.closeWindow()
        await browser.switchToWindow(newWindow[0])
        await browser.pause(2000)
    }

    async resetPasswordPlay(email){
        await this.typeOnEmailForForgetPassword(email)
        await this.clickOnResetButton()
    }
}

export default new forgotPassword() //

