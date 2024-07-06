class singleProduct{
    get product(){
        return $('img[src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/s/msh09-blue_main_1.jpg"]')
    }
    get productColor(){
        return $('#option-label-color-93-item-49')
    }
    get productSize(){
        return $('#option-label-size-143-item-175')
    }
    get productQuantity(){
        return $('#qty')
    }

    async clickOnImageOfProduct(){
        (await this.product).click()
    }
    async clickOnProductSize(){
        (await this.productSize).click()
    }
    async clickOnProductColor(){
        (await this.productColor).click()
    }
    async typeOnSetQuantity(quantity){
        (await this.productQuantity).setValue(quantity)
    }

    async singleProductPlayAutomation(quantity){
        await this.clickOnProductSize()
        await this.clickOnProductColor()
        await this.typeOnSetQuantity(quantity)
    }
}

export default new singleProduct()