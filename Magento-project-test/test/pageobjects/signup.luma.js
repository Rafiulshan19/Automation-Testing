

class signupIntoLuma {
    //Property
    get signUpButton(){
        return $('//a[contains(text(),"Create an Account")]')
    }
    get crossButton(){
        return $('div[class="ea-stickybox-hide"]')
    }
    get firstNameInput(){
        return $('#firstname')
    }
    get lastNameInput(){
        return $('#lastname')
    }
    get emailInput(){
        return $('#email_address')
    }
    get passwordInput(){
        return $('#password')
    }
    get confirmPasswordNameInput(){
        return $('#password-confirmation')
    }
    get createAnAccountButton(){
        return $('button[class="action submit primary"]')
    }

    //Action
    async goToLandingPage(){
        // await browser.url('https://magento.softwaretestingboard.com/customer/account/create/')
        await browser.url('https://magento.softwaretestingboard.com/')
    }
    async clickToSignUpText(){
        (await this.signUpButton).click()
    }
    async typeOnFirstName(firstName){
        (await this.firstNameInput).setValue(firstName)
    }
    async typeOnLastName(lastName){
        (await this.lastNameInput).setValue(lastName)
    }
    async typeOnEmail(mail){
        (await this.emailInput).setValue(mail)
    }
    async typeOnPassword(password){
        (await this.passwordInput).setValue(password)
    }
    async typeOnConfirmPassword(confirmPassword){
        (await this.confirmPasswordNameInput).setValue(confirmPassword)
    }
    async clickOnCreateAnAccountButton(){
        (await this.createAnAccountButton).click()
    }
    async cliclOnCrossButton(){
        (await this.crossButton).click()
    }
    async createAnAccountPlayAutomation(firstName,lastName,mail,password,confirmPassword){
        await this.typeOnFirstName(firstName)
        await this.typeOnLastName(lastName)
        await this.typeOnEmail(mail)
        await this.typeOnPassword(password)
        await this.typeOnConfirmPassword(confirmPassword)
        await this.clickOnCreateAnAccountButton()
    }
    

}


export default new signupIntoLuma()