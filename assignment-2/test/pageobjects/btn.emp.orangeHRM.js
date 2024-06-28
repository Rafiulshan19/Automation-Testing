

import { $ } from '@wdio/globals'
import Page from './page.js';

class addEmpbutton{
    get addButton(){
        return $('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]')
    }


    async goToDashboard(){
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        await browser.pause(5000)
    }

    async clickOnAddButton(){
        (await this.addButton).click()
    }

    
}

export default new addEmpbutton()