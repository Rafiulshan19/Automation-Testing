class subCategoryFromMultiMenu{
    get categoryMultiMenu(){
        return $('//a[@id="ui-id-24"]//child::span[contains(text(),"Shorts")]')
    }

    async clickOnCategoryMultiMenu(){
        (await this.categoryMultiMenu).click()
    }
}

export default new subCategoryFromMultiMenu()