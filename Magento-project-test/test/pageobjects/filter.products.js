class filteringForProducts{
    get filterPrice(){
        return $('//div[contains(text(),"Price")]')
    }

    get filterByPriceRange(){
        return $('a[href="https://magento.softwaretestingboard.com/men/bottoms-men/shorts-men.html?price=20-30&product_list_limit=36&product_list_order=name"]')
    }

    async clickOnPrice(){
        (await this.filterPrice).click()
    }

    async selectPriceForFilterProducts(){
        (await this.filterByPriceRange).click()
    }

    async filterPlayAutomation(){
        await this.clickOnPrice()
        await this.selectPriceForFilterProducts()
    }
}

export default new filteringForProducts()