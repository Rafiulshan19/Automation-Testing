class subCategoryFromMenuBar{
    get subCategory (){
        return $('//a[@id="ui-id-10"]//child::span[contains(text(),"Bottoms")]')
    }


    async clickOnSubCategory(){
        (await this.subCategory).click()
    }
}



export default new subCategoryFromMenuBar()