import leavePageOrangeHRM from "../pageobjects/leave.page.orangeHRM.js";
import applyLeaveOrangeHRM from "../pageobjects/apply.leave.orangeHRM.js"

describe("Employee can go to leave page to apply for leave", ()=>{
    it("Should redirect to leave apply page", async ()=>{
        await leavePageOrangeHRM.clickOnApplyButton()
    })  

    it("Should selevt leave type", async ()=>{
        await applyLeaveOrangeHRM.selecttype()
    }) 

})

