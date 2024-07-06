import loginForAutomation from "../pageobjects/login.luma.js"
import forgotPasswordForAutomation from "../pageobjects/forgotpassword.luma.js"
import imageForAutomation from "../pageobjects/image.luma.js"
import menubarLuma from "../pageobjects/menubar.luma.js"
import subCategoryMenubar from "../pageobjects/subCategory.menubar.js"
import subcategoryMultimenu from "../pageobjects/subcategory.multimenu.js"
import searchProduct from "../pageobjects/search.product.js"
import paginationSortingProducts from "../pageobjects/pagination.sorting.products.js"
import filterProducts from "../pageobjects/filter.products.js"
import singleProduct from "../pageobjects/single.product.js"

describe("Testing login functionality", ()=>{
    
    it("Should land on home page", async ()=>{
            await loginForAutomation.goToLandingPage()
    })    
    it("Should redirect to login page", async ()=>{
        await loginForAutomation.clickToSignInText()
    })    
    it("Should be removed the advertising sticky popup", async ()=>{
        await loginForAutomation.cliclOnCrossButton()
        // await browser.pause(3000)
    }) 
    // Forgot Your Password Functionality
    // it("Should be redirected to forget password page", async ()=>{
    //     await forgotPasswordForAutomation.clickOnForgotYourPasswordText()
    //     await forgotPasswordForAutomation.resetPasswordPlay('new123@gmail.com')
    // })
    
    //------------------------------Login------------------------------

    // it("Should not login with invalid email and invalid password", async ()=>{
    //     await loginForAutomation.loginPlayAutomation('admin@admin.com','adfvq1')
    // })
    // it("Should not login with invalid email and valid password", async ()=>{
    //     await loginForAutomation.loginPlayAutomation('adgcx@admin.com','Bari1234@')
    // })  
    // it("Should not login with valid email and invalid password", async ()=>{
    //     await loginForAutomation.loginPlayAutomation('bari123@gmail.com','hrg52')
    // })   
   it("Should login with valid email and password", async ()=>{
        await loginForAutomation.loginPlayAutomation('bari123@gmail.com','Bari1234@')
    })  

    //------------------------Clicking Image Box------------------------------

    it("Should redirect to Pants category product page", async ()=>{
        await imageForAutomation.clickOnImage()
    })

    //------------------------Searching Products------------------------------
    it("Should search product and redirect to related product page", async ()=>{
        await searchProduct.searchPlayAutomation('Rapha Sports Short')
    })

    //------------------------Clicking Category from the Menu bar------------------------------
    it("Should select a category on the menubar and redirect to that category product page", async ()=>{
        await menubarLuma.clickOnCateroyInMennuBar()
    })

    //------------------------Clicking Sub Category from the Menu bar------------------------------
    it("Should select a category on the menubar and redirect to that category product page", async ()=>{
        await subCategoryMenubar.clickOnSubCategory()
    })

    //------------------------Clicking Sub Category from the Multi Menu bar------------------------------
    it("Should select a category on the menubar and redirect to that category product page", async ()=>{
        await subcategoryMultimenu.clickOnCategoryMultiMenu()
    })

    //------------------------Pagination to get more Products------------------------------
    it("Should display more and soting products  into the same product page", async ()=>{
        await paginationSortingProducts.selectOptionForSortingProducts()
        await paginationSortingProducts.selectValueForMoreProducts()
    })

    //------------------------Filtering to get specific Products------------------------------
    it("Should filter the products into product page", async ()=>{
        await filterProducts.filterPlayAutomation()
    })
    //------------------------Single Product ------------------------------
    it("Should redirect to single product page", async ()=>{
        await singleProduct.clickOnImageOfProduct()
        await singleProduct.singleProductPlayAutomation('2')
    })


})