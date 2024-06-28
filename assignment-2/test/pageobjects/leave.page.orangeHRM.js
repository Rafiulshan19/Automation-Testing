import { $ } from '@wdio/globals'
import Page from './page.js';

class leavePage{
    get applyButton(){
        return $('li[class="oxd-topbar-body-nav-tab --visited"]')
    }


    async goToLeavepage(){
            await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')
            await browser.pause(5000)
    }
    

    async clickOnApplyButton(){
        (await this.applyButton).click()
    }
}

export default new leavePage()