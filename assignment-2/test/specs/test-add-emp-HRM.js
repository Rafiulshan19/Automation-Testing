import addEmployeeButton from '../pageobjects/btn.emp.orangeHRM.js'
import employeeOrangeHRM from '../pageobjects/employee.orangeHRM.js'

describe("After getting Employee list, we can add an employee account", ()=>{
    it("Should go to add employee page", async ()=>{
        await addEmployeeButton.clickOnAddButton()
    })
    
    it("Should go to add a new employee", async ()=>{
        employeeOrangeHRM.addEmployeePlay('Rafiul','Alam','Shan')
    })  

})