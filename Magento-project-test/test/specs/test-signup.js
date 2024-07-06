import signupForAutomation from "../pageobjects/signup.luma.js"

describe("Testing sign up functionality", ()=>{
    
    it("Should land on home page", async ()=>{
        await signupForAutomation.goToLandingPage()
    })    
    it("Should redirect to sign up page", async ()=>{
        await signupForAutomation.clickToSignUpText()
    })    

    it("Should remove to advertising sticky popup", async ()=>{
        await loginForAutomation.cliclOnCrossButton()
    }) 

    it("Should not create an accuont with invalid credentials", async ()=>{
        await signupForAutomation.createAnAccountPlayAutomation('Abdul', 'Bari', 'bari123@gmail.com', '123456', '235462')
    })


    //---------Create an account
    it("Should create an accuont with valid credentials", async ()=>{
        await signupForAutomation.createAnAccountPlayAutomation('Abdul', 'Bari', 'bari123@gmail.com', 'Bari1234@', 'Bari1234@')
    })
})