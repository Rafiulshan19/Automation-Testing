import { $ } from '@wdio/globals'
import Page from './page.js';

class applyForLeave{
    get leaveType(){
        return $('i[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]')
    }
   

    async selecttype(){
        const item = this.leaveType
        item.selectByVisibleText("CAN - FMLA")
    }

}
export default new applyForLeave()