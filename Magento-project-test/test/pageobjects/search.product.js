class searchingProduct{
    get searchingProductInput(){
        return $('#search')
    }
    get searchingProductIcon(){
        return $('button[title="Search"]')
    }
    async typeOnProductNameForSearching(productName){
        (await this.searchingProductInput).setValue(productName)
    }
    async clickOnSearchIcon(){
        (await this.searchingProductIcon).click()
    }

    async searchPlayAutomation(productName){
        await this.typeOnProductNameForSearching(productName)
        await this.clickOnSearchIcon()
    }
}

export default new searchingProduct()