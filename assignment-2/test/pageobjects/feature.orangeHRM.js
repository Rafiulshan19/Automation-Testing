import { $ } from '@wdio/globals'
import Page from './page.js';

class searchForPIM{
    get featurePIM(){
        return $('input[placeholder="Search"]')
    }
    async goToDashboard(){
            await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            await browser.pause(5000)
    }
    async typeOnSearch(pim){
        (await this.featurePIM).setValue(pim)
    }

    async searchPlayPIM(pim){
        await this.typeOnSearch(pim)
    }
}

export default new searchForPIM()