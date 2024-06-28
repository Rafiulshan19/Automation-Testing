import loginForOrangeHRM from '../pageobjects/login.orangeHRM.js';


describe("Practice for Page Object Model", ()=>{
    
    it("Should login with valid username & password", async()=>{
        await loginForOrangeHRM.loginPlayOrangeHRM('Admin','admin123')
 
    })

    it("Should not login with invalid username & valid password", async()=>{
        await loginForOrangeHRM.loginPlayOrangeHRM('satdb','admin123')
    })

    it("Should not login with valid username & invalid password", async()=>{
        await loginForOrangeHRM.loginPlayOrangeHRM('Admin','akufdjh')
    })

    it("Should not login with invalid username & password", async()=>{
        await loginForOrangeHRM.loginPlayOrangeHRM("hsagdfv","hgsfvfed2")
    })
})