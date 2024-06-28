import { $ } from '@wdio/globals'
import Page from './page.js';

class loginForOrangeHRM {
    //properties
    get usernameInput(){
        return $('input[name="username"]')
    }
    get passwordInput(){
        return $('input[name="password"]')
    }
    get loginButton(){
        return $('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]')
    }

    //action
    async typeOnUsernameInput(username){
        (await this.usernameInput).setValue(username)
    }
    async typeOnPasswordInput(password){
        (await this.passwordInput).setValue(password)
    }
    async clickOnLoginButton(){
        (await this.loginButton).click()
    }

    async gotoLoginPage (){
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async loginPlayOrangeHRM(username, password){
        await this.typeOnUsernameInput(username)
        await this.typeOnPasswordInput(password)
        await this.clickOnLoginButton()
    }
    
}

export default new loginForOrangeHRM()