import { $ } from '@wdio/globals'
import Page from './page.js';

class addEmployee {
    //properties
    get firstNameInput(){
        return $('input[name="firstName"]')
    }
    get middleNameInput(){
        return $('input[name="middleName"]')
    }
    get lastNameInput(){
        return $('input[name="lastName"]')
    }
    
    get saveButton(){
        return $('button[type="submit"]')
    }
    //action
    async typeOnFirstNameInput(firstName){
        (await this.firstNameInput).setValue(firstName)
    }
    async typeOnMiddleNameInput(middleName){
        (await this.middleNameInput).setValue(middleName)
    }
    async typeOnLastNameInput(lastName){
        (await this.lastNameInput).setValue(lastName)
    }

    async clickOnSaveButton(){
        (await this.saveButton).click()
    }

    async gotoAddEmployeePage (){
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')
    }

    async addEmployeePlay(firstName, middleName, lastName){
        await this.typeOnFirstNameInput(firstName)
        await this.typeOnMiddleNameInput(middleName)
        await this.typeOnLastNameInput(lastName)
        await this.clickOnSaveButton()
    }
    
}

export default new addEmployee()