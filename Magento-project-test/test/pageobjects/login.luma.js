

class loginIntoLuma {
    
    // Property
    get signInButton(){
        return $('//a[contains(text(),"Sign In")]')
    }

    get crossButton(){
        return $('div[class="ea-stickybox-hide"]')
    }

    get emaiInput(){
        return $('#email')
    }
    get passwordInput(){
        return $('#pass')
    }
    get loginButton(){
        return $('#send2')
    }

    //Action

    async goToLandingPage(){
        await browser.url('https://magento.softwaretestingboard.com/')
    }

    async cliclOnCrossButton(){
        (await this.crossButton).click()
    }

    async clickToSignInText(){
        (await this.signInButton).click()
    }

    async typeOnEmailForIogin(email){
        (await this.emaiInput).setValue(email)
    }
    async typeOnPasswordForIogin(password){
        (await this.passwordInput).setValue(password)
    }
    async clickOnLoginButtonForLogin(){
        (await this.loginButton).click()
    }

    async loginPlayAutomation(email,password){
        await this.typeOnEmailForIogin(email)
        await this.typeOnPasswordForIogin(password)
        await this.clickOnLoginButtonForLogin()
    }

}

export default new loginIntoLuma()